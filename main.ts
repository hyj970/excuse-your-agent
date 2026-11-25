// The Excuse Your Agent Gives You — writes the entry to /output/entry.txt.
// Node 22, standard library only. The entry is one line (95 characters) that
// an AI agent would hand its human after shipping a bug.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY = excuse();

function excuse(): string {
  return 'The tests all passed — unfortunately, I wrote the tests, and I am, as we now know, an optimist.';
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY + '\n', 'utf8');
