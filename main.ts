// Angry Judge: The Short Rant Contest
// Writes one short, funny rant to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The grader runs this repo read-only, so the ONLY write is to
// MAKEFUN_OUTPUT_DIR (absolute path from the environment).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The self-checkout just accused me of stealing my own bananas. " +
  "I scanned them, I bagged them, I paid for them — and now a robot is " +
  "screaming 'UNEXPECTED ITEM IN THE BAGGING AREA' while a teenager with " +
  "the only key in the store watches me like a shoplifter. I came for milk, not a job " +
  "interview with a machine that hates me. Pay me an hourly wage, or " +
  "bring back the cashier.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
