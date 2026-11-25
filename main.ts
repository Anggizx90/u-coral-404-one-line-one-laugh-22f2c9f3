import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original, self-contained one-liner. Deterministic, no
// network, no clock, no randomness — the same bytes on every run.
const LINE =
  "My AI assistant apologizes so sincerely that it's now the most emotionally mature relationship I have.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
