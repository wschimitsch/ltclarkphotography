import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageBase = path.join(__dirname, "../assets/images");
const galleries = ["acadia","australia","darkroom","hc_track2024","kenya","lowlight","project","photo2_final","50col"];

const manifest = {};
for (const g of galleries) {
  manifest[g] = fs.readdirSync(path.join(imageBase, g))
    .filter(f => /\.(jpg|jpeg|JPG|JPEG)$/.test(f))
    .sort();
}

fs.writeFileSync(
  path.join(__dirname, "../src/_data/images-manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log("Manifest written to src/_data/images-manifest.json");
