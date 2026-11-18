#!/usr/bin/env bash
# One-time setup for automatic deploys of sobrinotech.com to Cloudflare Pages.
# Run it from the repository folder on your computer:   bash tools/setup-cloudflare.sh
# Needs: Node 22+, the GitHub CLI (`gh`, signed in) and a browser to sign in to Cloudflare.
set -euo pipefail

PROJECT="sobrinotech"
DOMAIN="sobrinotech.com"
REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"

say() { printf '\n\033[1;32m==>\033[0m %s\n' "$*"; }

say "1/5 · Iniciar sesión en Cloudflare (se abre el navegador)"
npx --yes wrangler@4 whoami >/dev/null 2>&1 || npx --yes wrangler@4 login

ACCOUNT_ID="$(npx --yes wrangler@4 whoami 2>/dev/null | grep -Eo '[0-9a-f]{32}' | head -1)"
if [ -z "$ACCOUNT_ID" ]; then
  read -rp "No he podido leer tu Account ID. Pégalo (Cloudflare → Workers & Pages → panel derecho): " ACCOUNT_ID
fi
echo "Account ID: $ACCOUNT_ID"

say "2/5 · Crear el proyecto de Pages \"$PROJECT\" (si no existe)"
npx --yes wrangler@4 pages project create "$PROJECT" --production-branch=main 2>&1 | tail -2 || true

say "3/5 · Crear un token de API para GitHub Actions"
URL="https://dash.cloudflare.com/profile/api-tokens"
echo "Abre $URL → Create Token → Create Custom Token:"
echo "  · Permisos: Account → Cloudflare Pages → Edit"
echo "  · Account Resources: Include → tu cuenta"
(command -v open >/dev/null && open "$URL") || (command -v xdg-open >/dev/null && xdg-open "$URL") || true
read -rsp "Pega el token (no se mostrará): " TOKEN; echo

say "4/5 · Guardar los secretos en GitHub ($REPO)"
printf '%s' "$TOKEN" | gh secret set CLOUDFLARE_API_TOKEN --repo "$REPO"
printf '%s' "$ACCOUNT_ID" | gh secret set CLOUDFLARE_ACCOUNT_ID --repo "$REPO"

say "5/5 · Conectar el dominio $DOMAIN y www.$DOMAIN"
for d in "$DOMAIN" "www.$DOMAIN"; do
  curl -fsS -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT/domains" \
    -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
    --data "{\"name\":\"$d\"}" >/dev/null && echo "  ✓ $d añadido" || echo "  · $d: ya estaba o hay que añadirlo a mano (ver DEPLOY.md)"
done

say "Listo. Lanza el primer despliegue con:  gh workflow run deploy.yml --ref main"
echo "Comprueba el dominio en: https://dash.cloudflare.com/?to=/:account/pages/view/$PROJECT/domains"
