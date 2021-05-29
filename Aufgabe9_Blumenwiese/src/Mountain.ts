namespace eia10 {
    export class Mountain {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;

        x: number;
        y: number;
        w: number;
        h: number;
        pointAmount: number;
        points: number[][] = [];

        constructor(_canvas: HTMLCanvasElement, x: number, y: number, w: number, h: number) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");

            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            for (let i: number = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.w / this.pointAmount) + (this.x + (this.w / this.pointAmount) * i), Math.random() * this.h / 1.25 + this.y]);
            }
        }

        draw(): void {
            this.context.beginPath();
            this.context.moveTo(this.x, this.y + this.h);
            this.context.lineTo(this.x, this.y + this.h / 2);
            for (let i: number = 0; i < this.pointAmount; i++) {
                this.context.lineTo(this.points[i][0], this.points[i][1]);
            }
            this.context.lineTo(this.x + this.w, this.y + this.h / 2);
            this.context.lineTo(this.x + this.w, this.y + this.h);
            let gradient: CanvasGradient = this.context.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            this.context.fillStyle = gradient;
            this.context.fill();
        }
    }
}
