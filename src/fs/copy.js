import { cp, access } from "node:fs/promises";

const copy = async () => {
  try {
    await access("files");
    try {
      await access("files_copy");
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    await cp("files", "files_copy", { recursive: true });
  } catch (err) {
    console.error("FS operation failed");
  }
};

await copy();
