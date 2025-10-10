import fs from "fs";
import path from "path";

const iconsDir = path.resolve("./svgs");
const metadataDir = path.resolve("./metadata");

// Get all SVG files
const icons = {};
fs.readdirSync(iconsDir).forEach((file) => {
  if (file.endsWith(".svg")) {
    const name = file.replace(".svg", "");
    icons[name] = fs.readFileSync(path.join(iconsDir, file), "utf8");
  }
});

// Get metadata if exists
const metadata = {};
if (fs.existsSync(metadataDir)) {
  fs.readdirSync(metadataDir).forEach((file) => {
    if (file.endsWith(".json")) {
      const name = file.replace(".json", "");
      metadata[name] = JSON.parse(
        fs.readFileSync(path.join(metadataDir, file), "utf8")
      );
    }
  });
}

// Export both
export { icons, metadata };
