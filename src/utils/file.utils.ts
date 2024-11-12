import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export function base64ToImage(base64: string) {
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');

    fs.writeFileSync(path.join(__dirname, '../generated.png'), imageBuffer);
}

export function getImageAsset(fileName: string) {
    return path.join(__dirname, '../assets/icons/', fileName);
}
