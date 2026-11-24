import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
// Cliff-sensor excuse: the vacuum backs away from imaginary stairs.
// A real excuse needs more than a shrug: at least five words.
const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "entry.txt"), "utf8").trim();
if (line.length < 1 || line.length > 140 || line.includes("\n")) throw new Error("entry must be one line, 1-140 chars");
if (line.split(/\s+/).length < 5) throw new Error("entry too short");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
