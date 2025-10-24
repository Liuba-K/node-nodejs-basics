import fs from 'node:fs';
import path from 'node:path';

const create = async () => {
  const filePath = path.join('files', 'fresh.txt');
  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (Error) {
    console.error('FS operation failed');
  }
};

await create();
