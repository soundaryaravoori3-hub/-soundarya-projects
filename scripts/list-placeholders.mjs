// Lists every [PLACEHOLDER: ...] still left in the site content.
import { readFileSync } from 'node:fs';

const file = new URL('../src/data/content.ts', import.meta.url);
const lines = readFileSync(file, 'utf8').split('\n');
let count = 0;
lines.forEach((line, i) => {
  if (line.trim().startsWith('*')) return; // skip the instructions comment
  for (const m of line.matchAll(/\[PLACEHOLDER:\s*([^\]]*)\]/g)) {
    count++;
    console.log(`src/data/content.ts:${i + 1}  ${m[1]}`);
  }
});
console.log(count ? `\n${count} placeholder(s) left to complete.` : 'No placeholders left. Ready to publish.');
