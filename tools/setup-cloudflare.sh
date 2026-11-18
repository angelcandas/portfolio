#!/usr/bin/env bash
# One-time setup for automatic deploys of sobrinotech.com to Cloudflare Pages.
# Run it from the repository folder on your computer:   bash tools/setup-cloudflare.sh
# Needs: Node 22+, the GitHub CLI (`gh`, signed in) and a browser to sign in to Cloudflare.
set -uo pipefail

PROJECT="sobrinotech"
DOMAIN="sobrinotech.com"
WRANGLER=(npx --yes wrangler@4)

say()  { printf '\n\033[1;32m==>\033[0m %s\n' "$*"; }
die()  { printf '\n\033[1;31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

command -v node >/dev/null || die "No encuentro Node. Instálalo (https://nodejs.org, versión 22) y vuelve a lanzar el script."
command -v gh >/dev/null   || die "No encuentro la CLI de GitHub. Instálala con:  brew install gh   y luego:  gh auth login"
gh auth status >/dev/null 2>&1 || die "La CLI de GitHub no tiene sesión. Ejecuta:  gh auth login"
REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null)" || die "Lanza el script desde la carpeta del repositorio (la que clonaste)."

say "1/5 · Sesión en Cloudflare"
WHOAMI="$("${WRANGLER[@]}" whoami 2>&1)"
# `wrangler whoami` exits 0 even when you are not signed in, so look at what it says.
if ! grep -Eq '[0-9a-f]{32}' <<<"$WHOAMI"; then
  echo "Se abre el navegador para iniciar sesión…"
  "${WRANGLER[@]}" login || die "No se pudo iniciar sesión en Cloudflare."
  WHOAMI="$("${WRANGLER[@]}" whoami 2>&1)"
fi

IDS=($(grep -Eo '[0-9a-f]{32}' <<<"$WHOAMI" | awk '!seen[$0]++'))
if [ "${#IDS[@]}" -eq 1 ]; then
  ACCOUNT_ID="${IDS[0]}"
else
  echo "$WHOAMI"
  read -rp "Pega el Account ID de la cuenta donde está sobrinotech.com: " ACCOUNT_ID
fi
[[ "$ACCOUNT_ID" =~ ^[0-9a-f]{32}$ ]] || die "Ese Account ID no parece válido: $ACCOUNT_ID"
echo "Account ID: $ACCOUNT_ID"
export CLOUDFLARE_ACCOUNT_ID="$ACCOUNT_ID"

say "2/5 · Proyecto de Pages \"$PROJECT\""
if "${WRANGLER[@]}" pages project list 2>/dev/null | grep -qw "$PROJECT"; then
  echo "Ya existe."
else
  "${WRANGLER[@]}" pages project create "$PROJECT" --production-branch=master || die "No se pudo crear el proyecto de Pages."
fi

say "3/5 · Token de API para GitHub Actions"
URL="https://dash.cloudflare.com/profile/api-tokens"
echo "En $URL → Create Token → Create Custom Token:"
echo "  · Permissions: Account → Cloudflare Pages → Edit"
echo "  · Account Resources: Include → tu cuenta"
echo "  · Continue to summary → Create Token, y copia el token"
open "$URL" 2>/dev/null || xdg-open "$URL" 2>/dev/null || true
read -rsp "Pega el token aquí (no se verá al escribir) y pulsa Enter: " TOKEN; echo
[ -n "$TOKEN" ] || die "No has pegado ningún token."
VERIFY="$(curl -sS "https://api.cloudflare.com/client/v4/user/tokens/verify" -H "Authorization: Bearer $TOKEN")"
grep -q '"status":"active"' <<<"$VERIFY" || die "Cloudflare no acepta el token: $VERIFY"
echo "Token válido."

say "4/5 · Secretos en GitHub ($REPO)"
printf '%s' "$TOKEN" | gh secret set CLOUDFLARE_API_TOKEN --repo "$REPO" || die "No se pudo guardar CLOUDFLARE_API_TOKEN."
printf '%s' "$ACCOUNT_ID" | gh secret set CLOUDFLARE_ACCOUNT_ID --repo "$REPO" || die "No se pudo guardar CLOUDFLARE_ACCOUNT_ID."
echo "Guardados."

say "5/5 · Dominios $DOMAIN y www.$DOMAIN"
for d in "$DOMAIN" "www.$DOMAIN"; do
  RES="$(curl -sS -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT/domains" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" --data "{\"name\":\"$d\"}")"
  if grep -q '"success":true' <<<"$RES"; then echo "  ✓ $d añadido"
  elif grep -qi 'already' <<<"$RES"; then echo "  ✓ $d ya estaba"
  else echo "  · $d no se pudo añadir por API. Hazlo a mano (DEPLOY.md). Respuesta: $RES"; fi
done

say "Listo"
echo "Primer despliegue:   gh workflow run deploy.yml --repo $REPO --ref master   (cuando el PR esté en master)"
echo "Vista previa del PR: se publica sola en el próximo push al PR."
echo "Dominios:            https://dash.cloudflare.com/$ACCOUNT_ID/pages/view/$PROJECT/domains"
