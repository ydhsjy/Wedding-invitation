import { mkdir, readdir, stat } from "node:fs/promises";
import { extname, join, parse, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const assets = resolve(root, "assets");
const optimized = resolve(assets, "optimized");
const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

const imageProfiles = [
  { pattern: /^gallery-\d+$/i, width: 1400, quality: 78 },
  { pattern: /^(Desktop|Ending|Groom|ODS02206|IMG_5516\.JPG)$/i, width: 1600, quality: 78 }
];

await mkdir(optimized, { recursive: true });

const files = await readdir(assets);

for (const file of files) {
  const extension = extname(file).toLowerCase();
  const baseName = parse(file).name;

  if (!imageExtensions.has(extension)) {
    continue;
  }

  const profile = imageProfiles.find((item) => item.pattern.test(baseName));

  if (!profile) {
    continue;
  }

  const source = join(assets, file);
  const target = join(optimized, `${baseName}.webp`);
  const sourceStat = await stat(source);
  const targetStat = await stat(target).catch(() => null);

  if (targetStat && targetStat.mtimeMs >= sourceStat.mtimeMs) {
    continue;
  }

  await sharp(source, { failOn: "none" })
    .rotate()
    .resize({
      width: profile.width,
      height: profile.width,
      fit: "inside",
      withoutEnlargement: true
    })
    .webp({ quality: profile.quality, effort: 4 })
    .toFile(target);

  const optimizedStat = await stat(target);
  console.log(`${file} -> optimized/${baseName}.webp (${sourceStat.size} -> ${optimizedStat.size})`);
}
