namespace eia10 {

    export class Flower {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;

        x: number;
        y: number;
        height: number;
        type: number;
        scale: number;
        color: string;

        constructor(_canvas: HTMLCanvasElement, x: number, y: number, height: number) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");

            this.x = x;
            this.y = y;
            this.height = height;
            this.type = Math.round(Math.random() + 1);
            this.scale = Math.random() * 4 + 10;
            this.color = "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";

        }

        draw(): void {
            switch (this.type) {
                case 1:
                    this.drawFlowerType1();
                    break;
                case 2:
                    this.drawFlowerType2();
                    break;
            }
        }

        drawFlowerType1(): void {
            this.context.beginPath();
            this.context.fillStyle = "rgb(0, 150, 0)";
            this.context.fillRect(this.x, this.y, 6, -this.height);
            this.context.beginPath();
            let gradient: CanvasGradient = this.context.createRadialGradient(this.x + 3, this.y - this.height, 2, this.x + 3, this.y - this.height, this.scale);
            gradient.addColorStop(0, "rgba(255,255,255,1)");
            gradient.addColorStop(0.3, "rgba(255,255,255,1)");
            gradient.addColorStop(1, "rgba(255,255,255,0)");
            this.context.fillStyle = gradient;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        drawFlowerType2(): void {
            this.context.beginPath();
            this.context.fillStyle = "rgb(0,150,0)";
            this.context.fillRect(this.x, this.y, 6, -this.height);
            this.context.beginPath();
            this.context.arc(this.x + 3, this.y - this.height, 7, 0, Math.PI * 2);
            this.context.fillStyle = "yellow";
            this.context.fill();
            for (let i: number = 1; i <= 8; i++) {
                this.context.beginPath();
                this.context.arc(this.x + 3 + Math.cos((Math.PI * 2) / 8 * i) * 12, this.y - this.height + Math.sin((Math.PI * 2) / 8 * i) * 12, 7, 0, Math.PI * 2);
                this.context.fillStyle = this.color;
                this.context.fill();
            }
        }
    }

}
