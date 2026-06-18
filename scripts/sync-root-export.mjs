import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const source = "out";
const rootPublishEntries = [
  "CNAME",
  ".nojekyll",
  "404.html",
  "_next",
  "_not-found",
  "_not-found.html",
  "_not-found.txt",
  "__next.__PAGE__.txt",
  "__next._full.txt",
  "__next._head.txt",
  "__next._index.txt",
  "__next._tree.txt",
  "index.html",
  "index.txt"
];

if (!existsSync(source)) {
  throw new Error("Static export folder 'out' was not found. Run next build first.");
}

for (const entry of rootPublishEntries) {
  if (existsSync(entry)) {
    rmSync(entry, { recursive: true, force: true });
  }

  const sourceEntry = join(source, entry);
  if (existsSync(sourceEntry)) {
    cpSync(sourceEntry, entry, { recursive: true });
  }
}

console.log(`Synced ${readdirSync(source).length} static export entries to repository root.`);
