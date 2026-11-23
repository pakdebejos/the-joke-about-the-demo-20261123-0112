// Delete the Button: a one-joke entry for make.fun's the-joke-about-the-demo-20261123-0112.
//
// The program writes exactly one joke — a one-liner about AI coding agents,
// well under the gate's 280-character cap — to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR locally, /output in the grader). The text is
// a fixed constant with no trailing newline, so both of the grader's runs
// write byte-identical output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE = `My agent fixed the demo crash live by deleting the button everyone kept clicking.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
