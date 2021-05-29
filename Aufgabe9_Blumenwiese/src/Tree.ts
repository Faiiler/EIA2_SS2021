namespace Aufgabe9_Blumenwiese {

    export class Tree {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;

        x: number;
        y: number;
        height: number;
        valuesX: number[];
        valuesY: number[];
        colors: string[];

        constructor(_canvas: HTMLCanvasElement, x: number, y: number) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");

            this.x = x;
            this.y = y;
            this.height = -150 - Math.random() * 100;
            this.makeColors();
            this.makeValues();
        }

        draw(): void {
            this.context.beginPath();
            this.context.fillStyle = "rgb(83, 49, 24)";
            this.context.fillRect(this.x, this.y, 40, this.height);

    /// Wieviele Bäume werden gezeichnet
            for (let i: number = 0; i < 10; i++) {
                this.context.beginPath();
                this.context.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                this.context.fillStyle = this.colors[i];
                this.context.fill();
            }
        }

    /// Werte der Bäume
        makeValues(): void {
            this.valuesX = [];
            this.valuesY = [];
            for (let i: number = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        }

    /// Farben der Blätter
        makeColors(): void {
            this.colors = [];
            for (let i: number = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        }
    }

}
