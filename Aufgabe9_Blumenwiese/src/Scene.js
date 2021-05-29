var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var Scene = /** @class */ (function () {
        function Scene(_canvas, _timeScale) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");
            this.dayNightCycle = new Aufgabe9_Blumenwiese.DayNightCycle(this.canvas, 70, Math.PI, _timeScale);
            this.mountain = new Aufgabe9_Blumenwiese.Mountain(this.canvas, 0, 150, this.canvas.width, 300);
            this.mountain2 = new Aufgabe9_Blumenwiese.Mountain(this.canvas, 0, 300, this.canvas.width, 150);
            this.makeTrees();
            this.makeFlowers();
            this.makeBees();
            this.makeClouds();
        }
        /// Was wird zuerst gezeichnet? Verleiht den Objekten eine Hierarchie
        Scene.prototype.update = function () {
            this.dayNightCycle.update();
            this.drawGrass();
            for (var _i = 0, _a = this.clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                cloud.update();
            }
            this.mountain.draw();
            this.mountain2.draw();
            for (var _b = 0, _c = this.flowers; _b < _c.length; _b++) {
                var flower = _c[_b];
                flower.draw();
            }
            for (var _d = 0, _e = this.trees; _d < _e.length; _d++) {
                var tree = _e[_d];
                tree.draw();
            }
            for (var _f = 0, _g = this.bees; _f < _g.length; _f++) {
                var bee = _g[_f];
                bee.update();
            }
            if (this.dayNightCycle.isNight())
                this.dayNightCycle.drawNightAtmosphere();
        };
        /// Make != draw. Make erstellt, zeichnet sie aber nicht
        Scene.prototype.makeClouds = function () {
            this.clouds = [];
            for (var i = 0; i < 5; i++) {
                this.clouds.push(new Aufgabe9_Blumenwiese.Cloud(this.canvas, Math.random() * this.canvas.width, Math.random() * 100 + 50));
            }
        };
        Scene.prototype.makeBees = function () {
            this.bees = [];
            for (var i = 0; i < 6; i++) {
                this.bees.push(new Aufgabe9_Blumenwiese.Bee(this.canvas, Math.random() * this.canvas.width, Math.random() * 800 + 300));
            }
        };
        Scene.prototype.makeTrees = function () {
            this.trees = [];
            for (var i = 0; i < 12; i++) {
                this.trees.push(new Aufgabe9_Blumenwiese.Tree(this.canvas, Math.random() * this.canvas.width, Math.random() * 1050 + 450));
            }
            this.sortTrees(this.trees);
        };
        Scene.prototype.makeFlowers = function () {
            this.flowers = [];
            for (var i = 0; i < 200; i++) {
                this.flowers.push(new Aufgabe9_Blumenwiese.Flower(this.canvas, Math.random() * this.canvas.width, Math.random() * 1050 + 460, Math.random() * 15 + 30));
            }
        };
        /// Welcher Baum steht vor dem anderen? Je kleiner der Y wert, desto früher werden sie gezeichnet
        Scene.prototype.sortTrees = function (trees) {
            var temp = [];
            for (var i = 0; i < trees.length; i++) {
                temp.push(trees[i].y);
            }
            temp.sort(function (a, b) {
                return a - b;
            });
            for (var i = 0; i < trees.length; i++) {
                trees[i].y = temp[i];
            }
        };
        Scene.prototype.drawGrass = function () {
            this.context.beginPath();
            this.context.rect(0, 450, this.canvas.width, this.canvas.height);
            var gradient = this.context.createLinearGradient(0, 450, 0, this.canvas.height);
            gradient.addColorStop(0, "#5B7200");
            gradient.addColorStop(1, "#868D01");
            this.context.fillStyle = gradient;
            this.context.fill();
        };
        return Scene;
    }());
    Aufgabe9_Blumenwiese.Scene = Scene;
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
//# sourceMappingURL=Scene.js.map