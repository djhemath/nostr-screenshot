import { Canvas, createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas'
import { base64ToImage, __dirname, getImageAsset } from './utils/file.utils.js';
import { CanvasUtils } from './utils/canvas.utils.js';

GlobalFonts.registerFromPath('./assets/fonts/Quicksand-Light.ttf', 'QuicksandLight');
GlobalFonts.registerFromPath('./assets/fonts/Quicksand-Regular.ttf', 'QuicksandRegular');
GlobalFonts.registerFromPath('./assets/fonts/Quicksand-Medium.ttf', 'QuicksandMedium');
GlobalFonts.registerFromPath('./assets/fonts/Quicksand-Bold.ttf', 'QuicksandBold');
GlobalFonts.registerFromPath('./assets/fonts/NotoColorEmoji-Regular.ttf', 'Emoji');

type NostrAuthor = {
    dp: string,
    name: string,
    nip05: string,
}

type NostrNoteBlock = {
    type: 'text' | 'image' | 'mention' | 'url' | 'line-break',
    value: string,
};

type NostrNote = {
    author: NostrAuthor,
    note: NostrNoteBlock[],
};


const dataArr: NostrNote[] = [
    {
        author: {
            dp: 'https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg',
            name: 'djhemath',
            nip05: 'djhemath@iris.to',
        },
        note: [
            {
                type: 'text',
                value: 'Blockchains simply will not scale to serve global commerce.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'You have to use a payment channel system to enable limitless transactional throughout.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'That\'s what Lightning Network does.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'image',
                value: 'https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fi.nostr.build%2FTNm5g7rD6FVlknpQ.jpg',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'mention',
                value: '#lightningnetwork',
            },
            {
                type: 'line-break',
                value: '',
            },
        ],
    },

    {
        author: {
            dp: 'https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg',
            name: 'djhemath',
            nip05: 'djhemath@iris.to',
        },
        note: [
            {
                type: 'text',
                value: 'Hey Nostriches,',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'Excited to share my latest project, SnapNostr!',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'Forget boring screenshots of your Nostr notes. SnapNostr helps you create beautiful, clean picture of your Nostr notes that you can share to the world.. How to use?',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: '1. Copy the note id or URL of your note',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: '2. Paste it in the SnapNostr',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: '3. Download your screenshot!',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'Check it out - ',
            },
            {
                type: 'url',
                value: 'https://snapnostr.app',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'mention',
                value: '@SnapNostr',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'image',
                value: 'https://imgproxy.snort.social/n0bvw80qR6ro-isPZ_KBp8WnSsBrvW08Eu-d4iZ8pCU//aHR0cHM6Ly9tLnByaW1hbC5uZXQvTHZySy5wbmc',
            },
            {
                type: 'line-break',
                value: '',
            },
        ],
    },

    {
        author: {
            dp: 'https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg',
            name: 'djhemath',
            nip05: 'djhemath@iris.to',
        },
        note: [
            {
                type: 'text',
                value: 'Chef Satoshi',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'image',
                value: 'https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fimage.nostr.build%2Fcce16a122d28a34953097a8169bc986327f9f2d0b8515c5063497bc541742063.jpg',
            },
            {
                type: 'line-break',
                value: '',
            },
        ],
    },

    {
        author: {
            dp: 'https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg',
            name: 'djhemath',
            nip05: 'djhemath@iris.to',
        },
        note: [
            {
                type: 'text',
                value: 'It\'s a beautiful day to be alive.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'image',
                value: 'https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fi.nostr.build%2FrY2uWRe05lNSn9DA.jpg',
            },
            {
                type: 'line-break',
                value: '',
            },
        ],
    },

    {
        author: {
            dp: 'https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg',
            name: 'djhemath',
            nip05: 'djhemath@iris.to',
        },
        note: [
            {
                type: 'text',
                value: 'WE ARE GOING TO HAVE SO MUCH FUN THIS CYCLE FAM.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'THIS ISN\'T EVEN THE FIRST INNING.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'IT IS THE DAY BEFORE THE GAME.',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'line-break',
                value: '',
            },
            {
                type: 'text',
                value: 'THE SUITS STILL THINK WE ARE GOING TO SELL INTO THE PUMP. THEY DONT REALIZE WE ARE BUILT DIFFERENT. THEY DONT REALIZE BITCOIN IS A COMPLETE PARADIGM SHIFT.',
            },
            {
                type: 'line-break',
                value: '',
            },
        ],
    }
]

const data = dataArr[1];

type BoxProps = {
    startX: number,
    startY: number,
    width: number,
    height: number,
};

const canvasWidth = 700;
const outerBoxPadding = 60;
const innerBoxPadding = 40;

// Caching the loaded image
const imageCache: any = {};

const specialTextColor = '#ca077c';

async function drawInnerCard(canvas: Canvas) {
    const ctx = canvas.getContext('2d');
    const cUtils = new CanvasUtils(canvas);

    const { boxWidth, boxHeight, startX, startY } = cUtils.addEqualPadding(outerBoxPadding, canvas.width, canvas.height, 0, 0);

    // Draw the first shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    cUtils.roundedRect(startX, startY, boxWidth, boxHeight, 16, 'white');

    // Reset and draw the second shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.06)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    cUtils.roundedRect(startX, startY, boxWidth, boxHeight, 16, 'white');

    // Reset shadow
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    return [
        startX,
        startY,
        boxWidth,
        boxHeight,
    ];
}

async function drawCardHeader(canvas: Canvas, innerCardBoxProps: BoxProps) {
    const ctx = canvas.getContext('2d');
    const cUtils = new CanvasUtils(canvas);

    const authorDP = await loadImage('https://primal.b-cdn.net/media-cache?s=s&a=1&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg');

    const {
        startX,
        startY,
        boxWidth,
    } = cUtils.addEqualPadding(innerBoxPadding, innerCardBoxProps.width, innerCardBoxProps.height, innerCardBoxProps.startX, innerCardBoxProps.startY);

    cUtils.roundedRect(startX, startY, 60, 60, 30);
    ctx.save();
    ctx.clip();

    const authorDPWidth = 60;
    const authorDPHeight = 60;
    ctx.drawImage(authorDP, startX, startY, 60, 60);

    ctx.restore();

    const authorNamefontSize = 18;
    const authorNIP05fontSize = 14;

    let x = startX + authorDPWidth + 15;
    let y = startY + authorNamefontSize + 5;

    ctx.font = `${authorNamefontSize}px QuicksandBold, Emoji`;
    ctx.fillStyle = '#111';
    ctx.fillText('djhemath 🍔', x, y);

    // TODO: NIP05 should be optional
    y += authorNamefontSize + 5;
    ctx.font = `${authorNIP05fontSize}px QuicksandRegular`;
    ctx.fillStyle = '#000000CC';
    ctx.fillText('djhemath@iris.to', x, y);

    const nostrichHead = await loadImage(getImageAsset('nostrich-head.svg'))
    ctx.drawImage(nostrichHead, boxWidth + outerBoxPadding, startY + 15, 30, 30);

    ctx.font = `14px QuicksandBold`;
    ctx.fillStyle = '#a366c5';
    ctx.fillText('Nostr', boxWidth + outerBoxPadding - 3, startY + 15 + 45)

    return {
        headerWidth: boxWidth,
        headerHeight: authorDPHeight,
        startX: startX,
        startY: startY + authorDPHeight + 40,
    }

}

async function drawCardBody(canvas: Canvas, boxProps: Pick<BoxProps, 'startX' | 'startY' | 'width'>, renderQueue: RenderQueueItem[]) {
    const ctx = canvas.getContext('2d');
    const cUtils = new CanvasUtils(canvas);

    ctx.font = `22px QuicksandMedium`;
    ctx.fillStyle = '#111'

    // TODO: If mention, url can't be put in the current line, render them in a new line

    for(let i=0; i<renderQueue.length; i++) {
        const queueItem = renderQueue[i];

        const x = queueItem.x + boxProps.startX;
        const y = queueItem.y + boxProps.startY;

        if(queueItem.type === 'line-break') {
            
        }
        else if(queueItem.type === 'text') {
            ctx.fillStyle = '#111';
            ctx.fillText(queueItem.value, x, y);
        } else if(queueItem.type === 'mention') {
            ctx.font = `22px QuickSandBold`;
            ctx.fillStyle = specialTextColor;
            ctx.fillText(queueItem.value, x, y);
            ctx.font = `22px QuickSandMedium`;
        } else if(queueItem.type === 'url') {
            ctx.font = `22px QuickSandBold`;
            ctx.fillStyle = specialTextColor;
            ctx.fillText(queueItem.value, x, y);
            ctx.font = `22px QuickSandMedium`;

            ctx.fillRect(x, y + 4, ctx.measureText(queueItem.value).width, 1);
        } else if(queueItem.type === 'image') {
            // TODO: If there are multiple images, pick the first one
            const image = imageCache[queueItem.value];

            // Preserve the aspect ratio but reduce width
            const imageWidth = boxProps.width - (innerBoxPadding * 2);
            const imageHeight = (image.height / image.width) * imageWidth




            cUtils.roundedRect(x, y, imageWidth, imageHeight, 8);
            ctx.save();
            ctx.clip();
            ctx.drawImage(image, x, y, imageWidth, imageHeight);
            ctx.restore();

        }
    }

    // ctx.fillText('Hey Nostriches,', x, y);
    // ctx.fillText('Excited to share my latest project, SnapNostr!', x, y + 30);
    // ctx.fillText('Forget boring screenshots of your Nostr notes.', x, y + 90);
    // ctx.fillText('SnapNostr helps you create beautiful, clean', x, y + 120);
    // ctx.fillText('picture of your Nostr notes that you can share', x, y + 150);
    // ctx.fillText('to the world.. How to use?', x, y + 180);

    // ctx.fillText('1. Copy the note id or URL of your note', x, y + 210);
    // ctx.fillText('2. Paste it in the SnapNostr', x, y + 240);
    // ctx.fillText('3. Download your screenshot!', x, y + 270);

    // ctx.fillText('Check it out - ', x, y + 330);

    // const checkItOut = ctx.measureText('Check it out - ');
    // ctx.fillStyle = specialTextColor;
    // ctx.fillText('https://snapnostr.app', x + checkItOut.width, y + 330);
    // ctx.fillRect(x + checkItOut.width, y + 331, ctx.measureText('https://snapnostr.app').width, 2);

    // ctx.fillText('@SnapNostr', x, y + 380);

    // const image = await loadImage('https://imgproxy.snort.social/n0bvw80qR6ro-isPZ_KBp8WnSsBrvW08Eu-d4iZ8pCU//aHR0cHM6Ly9tLnByaW1hbC5uZXQvTHZySy5wbmc');

    // // Preserve the aspect ratio but reduce width
    // const imageWidth = boxProps.width - (innerBoxPadding * 2);
    // const imageHeight = (image.height / image.width) * imageWidth


    // ctx.drawImage(image, x, y + 410, imageWidth, imageHeight);
}

type RenderQueueItem = {
    x: number,
    y: number,
    type: 'text' | 'image' | 'mention' | 'url' | 'line-break',
    value: string,
};

async function prepareForRendering() {
    const canvas = createCanvas(5000, 5000);
    const ctx = canvas.getContext('2d');
    ctx.font = `22px QuicksandMedium`;

    let canvasHeight = 0;
    canvasHeight += (outerBoxPadding * 2) + (innerBoxPadding * 2);

    const headerHeight = 60;

    canvasHeight += headerHeight;


    const fontSize = 22;
    const lineHeight = 8;
    const fontHeight = fontSize + lineHeight;

    let startX = 0;
    let startY = 0;

    let x = startX;
    let y = startY;

    const renderQueue: RenderQueueItem[] = [];

    const innerCardWidth = canvasWidth - (outerBoxPadding * 2) - (innerBoxPadding * 2);

    for(let i=0; i<data.note.length; i++) {
        const block = data.note[i];

        if(block.type === 'line-break') {
            renderQueue.push({
                x,
                y,
                type: 'line-break',
                value: '',
            });

            x = startX;
            y += fontHeight;
            canvasHeight += fontHeight;
        }
        else if(block.type === 'text') {
            const textWidth = ctx.measureText(block.value).width;

            if(textWidth > innerCardWidth) {
                let currentBuffer = '';

                const words = block.value.split(' ');

                for(let i=0; i<words.length; i++) {
                    const char = words[i];

                    if(ctx.measureText(x + currentBuffer + char).width > innerCardWidth) {
                        x = startX;

                        renderQueue.push({
                            x,
                            y,
                            type: 'text',
                            value: currentBuffer,
                        });

                        renderQueue.push({
                            x,
                            y,
                            type: 'line-break',
                            value: '',
                        });

                        canvasHeight += fontHeight;

                        y += fontHeight;

                        currentBuffer = '';
                    }

                    currentBuffer += (char + ' ');
                }

                if(currentBuffer.length > 0) {
                    renderQueue.push({
                        x,
                        y,
                        type: 'text',
                        value: currentBuffer + ' ',
                    });
    
                    x = ctx.measureText(currentBuffer).width;
                }
            } else {
                renderQueue.push({
                    x,
                    y,
                    type: 'text',
                    value: block.value,
                });

                x += ctx.measureText(block.value).width;
            }

        } else if(block.type === 'mention') {
            let currentBuffer = '';


            for(let i=0; i<block.value.length; i++) {
                const char = block.value[i];

                if(ctx.measureText(x + currentBuffer + char).width > innerCardWidth) {
                    renderQueue.push({
                        x,
                        y,
                        type: 'mention',
                        value: currentBuffer,
                    });

                    renderQueue.push({
                        x,
                        y,
                        type: 'line-break',
                        value: '',
                    });

                    canvasHeight += fontHeight;

                    x = startX;
                    y += fontHeight;

                    currentBuffer = '';
                }

                currentBuffer += (char);
            }

            if(currentBuffer.length > 0) {
                renderQueue.push({
                    x,
                    y,
                    type: 'mention',
                    value: currentBuffer + ' ',
                });

                x += ctx.measureText(currentBuffer).width;

            }
        } else if(block.type === 'url') {
            let currentBuffer = '';

            for(let i=0; i<block.value.length; i++) {
                const char = block.value[i];

                if(ctx.measureText(x + currentBuffer + char).width > innerCardWidth) {
                    renderQueue.push({
                        x,
                        y,
                        type: 'url',
                        value: currentBuffer,
                    });

                    renderQueue.push({
                        x,
                        y,
                        type: 'line-break',
                        value: '',
                    });

                    x = startX;
                    y += fontHeight;

                    currentBuffer = '';

                    canvasHeight += fontHeight;
                }

                currentBuffer += (char);
            }

            if(currentBuffer.length > 0) {
                renderQueue.push({
                    x,
                    y,
                    type: 'url',
                    value: currentBuffer + ' ',
                });

                x += ctx.measureText(currentBuffer).width;

            }
        } else if(block.type === 'image') {
            // TODO: If there are multiple images, pick the first one
            const image = await loadImage(block.value);

            imageCache[block.value] = image;

            // Preserve the aspect ratio but reduce width
            const imageWidth = innerCardWidth;
            const imageHeight = (image.height / image.width) * imageWidth;

            renderQueue.push({
                x,
                y,
                type: 'image',
                value: block.value,
            });

            x = startX;
            y += imageHeight;

            canvasHeight += imageHeight;
        }

    }
    
    return { renderQueue, canvasHeight };
}

export async function nostrScreenshot() {

    const { renderQueue, canvasHeight } = await prepareForRendering();

    // Canvas width - can be fixed
    // Canvas height - (outer padding * 2) + (inner padding * 2) + header height + body height

    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    const cUtils = new CanvasUtils(canvas);

    const gradient = cUtils.linearGradient({
        x0: 0,
        y0: 0,
        x1: canvas.width,
        y1: canvas.height,
    }, [
        '#ffb880',
        '#ff827d',
        '#ff7f7f',
        '#de78af',
        '#c76cd5',
        '#a366c5',
    ]);

    cUtils.roundedRect(0, 0, canvas.width, canvas.height, 8, gradient);

    const [ innerCardStartX, innerCardStartY, innerCardWidth, innerCardHeight ] = await drawInnerCard(canvas);
    const {
        startX,
        startY,
    } = await drawCardHeader(canvas, {
        startX: innerCardStartX,
        startY: innerCardStartY,
        width: innerCardWidth,
        height: innerCardHeight,
    });

    await drawCardBody(canvas, {
        startX,
        startY,
        width: innerCardWidth,
    }, renderQueue);

    return canvas.toDataURL();
}


async function main() {
    const base64 = await nostrScreenshot();
    base64ToImage(base64);
}

main();