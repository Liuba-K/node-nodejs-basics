import { readFile } from "node:fs/promises";
import path from "node:path";

const read = async () => {
  try {
    const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");
    const content = await readFile(filePath, { encoding: "utf8" });
    console.log(content);
  } catch (Error) {
    console.error("FS operation failed");
  }
};

await read();
