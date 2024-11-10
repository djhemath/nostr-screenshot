import { createCanvas } from 'canvas'
import { base64ToImage } from './dev-utils.js';

export function nostrScreenshot() {
    const canvas = createCanvas(650, 325);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Impact';
    ctx.rotate(0.1);

    ctx.fillStyle = "white";
    ctx.fillText('Nostr!!', 50, 100);

    // Draw line under text
    var text = ctx.measureText('Nostr!!')
    ctx.strokeStyle = 'rgba(255,255,255)'
    ctx.beginPath()
    ctx.lineTo(50, 102)
    ctx.lineTo(50 + text.width, 102)
    ctx.stroke()

    return canvas.toDataURL();
}

const base64 = nostrScreenshot();
base64ToImage(base64);
