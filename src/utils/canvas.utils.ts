import { Canvas, Image, loadImage, SKRSContext2D } from "@napi-rs/canvas";

export type GradientPoints = {
    x0: number,
    y0: number,
    x1: number,
    y1: number,
}

export class CanvasUtils {
    public canvas: Canvas;
    public ctx: SKRSContext2D;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    roundedRect(x: number, y: number, width: any, height: any, radius: number, fillStyle?: string | CanvasGradient | CanvasPattern) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, radius);
        this.ctx.arcTo(x + width, y + height, x, y + height, radius);
        this.ctx.arcTo(x, y + height, x, y, radius);
        this.ctx.arcTo(x, y, x + width, y, radius);
        this.ctx.closePath();
        if(fillStyle) {
            this.ctx.fillStyle = fillStyle;
            this.ctx.fill();
        }
    }

    linearGradient(points: GradientPoints, colors: string[], colorStops?: number[]) {
        const { x0, y0, x1, y1 } = points;
        const gradient = this.ctx.createLinearGradient(x0, y0, x1, y1);

        if(colorStops && colorStops.length !== colors.length) {
            throw 'Number of colors and colorStops should be equal'
        }

        const colorStopIncrement = 1 / colors.length;
        let colorStopCounter = 0;

        for(let i=0; i<colors.length; i++) {
            let colorStop: number;

            if(colorStops) {
                colorStop = colorStops[i];
            } else {
                colorStop = colorStopCounter;
                colorStopCounter += colorStopIncrement;
            }

            const color = colors[i];

            gradient.addColorStop(colorStop, color);
        }

        return gradient;
    }

    addEqualPadding(padding: number, width: number, height: number, x: number, y: number) {
        return {
            boxWidth: width - (2 * padding),
            boxHeight: height - (2 * padding),
            startX: x + padding,
            startY: y + padding,
        }
    }
}