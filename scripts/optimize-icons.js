import fs from "fs";
import path from "path";
import { optimize } from "svgo";
import svgoConfig from "../svgo.config.js";
const inputDir = path.resolve("raw_iconates");
const outputDir = path.resolve("dist_iconates");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".svg"));

if (files.length === 0) {
  console.log("⚠️  No SVG files found in raw_iconates");
  process.exit(0);
}

for (const file of files) {
  const raw = fs.readFileSync(path.join(inputDir, file), "utf8");

  // ✅ explicitly pass your config object
  const result = optimize(raw, {
    path: path.join(inputDir, file),
    ...svgoConfig
  });

  fs.writeFileSync(path.join(outputDir, file), result.data);
  console.log(`✅ Optimized: ${file}`);
}

console.log("🎉 All icons optimized successfully!");
