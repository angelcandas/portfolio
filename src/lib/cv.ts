// The CV button only renders once the PDF is in public/, so the page never links to a 404.
import fs from 'node:fs';
import path from 'node:path';
import { site } from '../i18n/content';

export const hasCv = fs.existsSync(path.join(process.cwd(), 'public', site.cv));
