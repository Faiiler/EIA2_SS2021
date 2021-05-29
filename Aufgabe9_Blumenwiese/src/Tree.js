var eia10;
(function (eia10) {
    var Tree = /** @class */ (function () {
        function Tree(_canvas, x, y) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");
            this.x = x;
            this.y = y;
            this.height = -150 - Math.random() * 100;
            this.makeColors();
            this.makeValues();
        }
        Tree.prototype.draw = function () {
            this.context.beginPath();
            this.context.fillStyle = "rgb(83, 49, 24)";
            this.context.fillRect(this.x, this.y, 40, this.height);
            for (var i = 0; i < 10; i++) {
                this.context.beginPath();
                this.context.arc(this.x + 20 + this.valuesX[i], this.y + this.height + this.valuesY[i], 50, 0, Math.PI * 2);
                this.context.fillStyle = this.colors[i];
                this.context.fill();
            }
        };
        Tree.prototype.makeValues = function () {
            this.valuesX = [];
            this.valuesY = [];
            for (var i = 0; i < 10; i++) {
                this.valuesX.push(Math.cos((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
                this.valuesY.push(Math.sin((Math.PI * 2) / 10 * (i * (Math.random() * 0.3 + 0.85))) * 50);
            }
        };
        Tree.prototype.makeColors = function () {
            this.colors = [];
            for (var i = 0; i < 10; i++) {
                this.colors.push("rgba(" + (82 + (Math.random() * 20 - 10)) + ", " + (140 + (Math.random() * 20 - 10)) + ", " + (41 + (Math.random() * 20 - 10)) + ", " + 0.8 + ")");
            }
        };
        return Tree;
    }());
    eia10.Tree = Tree;
})(eia10 || (eia10 = {}));
//# sourceMappingURL=Tree.js.map