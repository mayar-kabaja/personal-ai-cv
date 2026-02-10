#!/usr/bin/env node
/**
 * Converts public/og-image.svg to public/og-image.png (1200x630) for social sharing.
 * Run from frontend/: node scripts/generate-og-image.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'og-image.svg');
const pngPath = join(root, 'public', 'og-image.png');

const svg = readFileSync(svgPath, 'utf8');
const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
const pngData = resvg.render();
const pngBuffer = pngData.asPng();
writeFileSync(pngPath, pngBuffer);
console.log('Written', pngPath);
