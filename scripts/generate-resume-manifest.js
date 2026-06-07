const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const resumeDir = path.join(rootDir, "resume");
const outputPath = path.join(rootDir, "js", "resume-manifest.js");

function toWebPath(fileName) {
  return `resume/${encodeURIComponent(fileName).replace(/%2F/g, "/")}`;
}

if (!fs.existsSync(resumeDir)) {
  fs.writeFileSync(
    outputPath,
    "window.PORTFOLIO_RESUME_PDF = null;\n",
    "utf8",
  );
  console.warn("No resume folder found. Create resume/ and add exactly one PDF.");
  process.exit(0);
}

const pdfFiles = fs
  .readdirSync(resumeDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
  .map((entry) => entry.name);

if (pdfFiles.length !== 1) {
  fs.writeFileSync(
    outputPath,
    "window.PORTFOLIO_RESUME_PDF = null;\n",
    "utf8",
  );
  console.warn(`Expected exactly one PDF in resume/, found ${pdfFiles.length}.`);
  process.exit(0);
}

const fileName = pdfFiles[0];
const manifest = {
  href: toWebPath(fileName),
  fileName,
};

fs.writeFileSync(
  outputPath,
  `window.PORTFOLIO_RESUME_PDF = ${JSON.stringify(manifest, null, 2)};\n`,
  "utf8",
);

console.log(`Resume manifest generated for ${fileName}`);
