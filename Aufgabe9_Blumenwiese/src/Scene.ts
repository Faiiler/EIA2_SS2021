namespace Aufgabe9_Blumenwiese {

    export class Scene {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;

        dayNightCycle: DayNightCycle;
        mountain: Mountain;
        mountain2: Mountain;
        flowers: Flower[];
        trees: Tree[];
        bees: Bee[];
        clouds: Cloud[];

        constructor(_canvas: HTMLCanvasElement, _timeScale: number) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");

            this.dayNightCycle = new DayNightCycle(this.canvas, 70, Math.PI, _timeScale);
            this.mountain = new Mountain(this.canvas, 0, 150, this.canvas.width, 300);
            this.mountain2 = new Mountain(this.canvas, 0, 300, this.canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeBees();
            this.makeClouds();
        }

    /// Was wird zuerst gezeichnet? Verleiht den Objekten eine Hierarchie
        update(): void {
            this.dayNightCycle.update();
            this.drawGrass();
            for (let cloud of this.clouds) {    //Für jede Wolke im Wolkenarray wird die Cloud geupdated
                cloud.update();
            }
            this.mountain.draw();
            this.mountain2.draw();
            for (let flower of this.flowers) {
                flower.draw();
            }
            for (let tree of this.trees) {
                tree.draw();
            }
            for (let bee of this.bees) {
                bee.update();
            }
            if (this.dayNightCycle.isNight()) this.dayNightCycle.drawNightAtmosphere();
        }

    /// Make != draw. Make erstellt, zeichnet sie aber nicht
        makeClouds(): void {
            this.clouds = [];
            for (let i: number = 0; i < 5; i++) {
                this.clouds.push(new Cloud(this.canvas, Math.random() * this.canvas.width, Math.random() * 100 + 50));
            }
        }

        makeBees(): void {
            this.bees = [];
            for (let i: number = 0; i < 6; i++) {
                this.bees.push(new Bee(this.canvas, Math.random() * this.canvas.width, Math.random() * 800 + 300));
            }
        }

        makeTrees(): void {
            this.trees = [];
            for (let i: number = 0; i < 12; i++) {
                this.trees.push(new Tree(this.canvas, Math.random() * this.canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        }

        makeFlowers(): void {
            this.flowers = [];
            for (let i: number = 0; i < 200; i++) {
                this.flowers.push(new Flower(this.canvas, Math.random() * this.canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
            }
        }

    /// Welcher Baum steht vor dem anderen? Je kleiner der Y wert, desto früher werden sie gezeichnet
        sortTrees(trees: Tree[]): void {
            let temp: number[] = [];
            for (let i: number = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function (a: number, b: number): number {
                return a - b;
            });
            for (let i: number = 0; i < trees.length; i++) {
                trees[i].y = temp[i];
            }
        }

        drawGrass(): void {
            this.context.beginPath();
            this.context.rect(0, 450, this.canvas.width, this.canvas.height);
            let gradient: CanvasGradient = this.context.createLinearGradient(0, 450, 0, this.canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            this.context.fillStyle = gradient;
            this.context.fill();
        }
    }
}
