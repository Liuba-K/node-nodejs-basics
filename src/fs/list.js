import { readdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "filesz");

const list = async () => {
  try {
    await access(folderPath);
    const files = await readdir(folderPath);
    console.log(files);
  } catch (Error) {
    console.error("FS operation failed");
  }
};

await list();
