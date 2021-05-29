var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var Cloud = /** @class */ (function () {
        function Cloud(_canvas, x, y) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");
            this.x = x;
            this.y = y;
            this.sizeX = 150;
            this.vX = Math.random() + 1;
        }
        Cloud.prototype.update = function () {
            this.x += this.vX;
            if (this.x > this.canvas.width + this.sizeX)
                this.x = 0 - this.sizeX;
            this.draw();
        };
        Cloud.prototype.draw = function () {
            this.context.beginPath();
            this.context.save();
            this.context.scale(1.5, 1.5);
            this.context.arc(this.x, this.y, 25, 0, Math.PI * 2);
            this.context.arc(this.x + 25, this.y - 10, 25, 0, Math.PI * 2);
            this.context.arc(this.x + 60, this.y, 20, 0, Math.PI * 2);
            this.context.arc(this.x + 25, this.y, 25, 0, Math.PI * 2);
            this.context.arc(this.x + 45, this.y, 20, 0, Math.PI * 2);
            this.context.fillStyle = "rgba(255,255,255,0.7)";
            this.context.fill();
            this.context.restore();
        };
        return Cloud;
    }());
    Aufgabe9_Blumenwiese.Cloud = Cloud;
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map