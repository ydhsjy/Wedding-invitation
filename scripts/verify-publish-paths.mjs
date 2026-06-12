import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const forbiddenPath = "/Wedding-invitation/";
const requiredPath = "/undangan-yudha-alda/";
const scanRoots = ["out", "."];
const rootPublishEntries = new Set([
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
]);
const textExtensions = new Set([".css", ".html", ".js", ".json", ".txt"]);

function extensionOf(filePath) {
  const slash = filePath.lastIndexOf("/");
  const dot = filePath.lastIndexOf(".");
  return dot > slash ? filePath.slice(dot).toLowerCase() : "";
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      yield* walk(path);
    } else if (textExtensions.has(extensionOf(path.replaceAll("\\", "/")))) {
      yield path;
    }
  }
}

const violations = [];
let hasRequiredPath = false;

for (const root of scanRoots) {
  if (!existsSync(root)) continue;

  const paths =
    root === "."
      ? [...rootPublishEntries].filter((entry) => existsSync(entry)).flatMap((entry) => {
          const stat = statSync(entry);
          return stat.isDirectory() ? [...walk(entry)] : [entry];
        })
      : [...walk(root)];

  for (const filePath of paths) {
    const content = readFileSync(filePath, "utf8");
    if (content.includes(forbiddenPath)) {
      violations.push(filePath);
    }
    if (content.includes(requiredPath)) {
      hasRequiredPath = true;
    }
  }
}

if (violations.length > 0) {
  throw new Error(
    `Forbidden publish path '${forbiddenPath}' found in:\n${violations
      .map((path) => `- ${path}`)
      .join("\n")}`
  );
}

if (!hasRequiredPath) {
  throw new Error(`Expected publish path '${requiredPath}' was not found in static output.`);
}

console.log(`Publish paths verified: using '${requiredPath}' and not '${forbiddenPath}'.`);
