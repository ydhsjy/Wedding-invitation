import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "assets");
const target = resolve(root, "public", "assets");

await rm(target, { recursive: true, force: true });
await mkdir(resolve(root, "public"), { recursive: true });
await cp(source, target, { recursive: true });

