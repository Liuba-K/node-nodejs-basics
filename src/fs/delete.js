import { rm, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await access(filePath);
    await rm(filePath);
  } catch (Error) {
    console.error("FS operation failed");
  }
};

await remove();
