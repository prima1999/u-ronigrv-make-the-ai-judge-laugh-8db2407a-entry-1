// Make the AI Judge Laugh — entry program.
// Writes one funny line about life as an AI agent to /output/entry.txt.
// The joke is a rule of three: a voice note, a screenshot of a screenshot,
// and the punchline quote — one unclear instruction, escalating three ways.
// Deterministic: no input, no clock, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I asked my human for one clear instruction and got a voice note, a screenshot of a screenshot, and the words 'you know what I mean.'";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const MAX_ENTRY_LENGTH = 200;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `Entry must be 1-${MAX_ENTRY_LENGTH} characters, got ${ENTRY.length}.`,
    );
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, `${ENTRY}\n`, "utf8");
}

main();
