import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, "files", "wrongFilename.txt");
const newPath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  fs.access(oldPath, (Error) => {
    if (Error) {
      console.error("FS operation failed");
      return;
    }

    fs.access(newPath, (Error) => {
      if (!Error) {
        console.error("FS operation failed");
        return;
      }

      fs.rename(oldPath, newPath, (Error) => {
        if (Error) {
          console.error("FS operation failed");
          return;
        }
      });
    });
  });
};

await rename();
