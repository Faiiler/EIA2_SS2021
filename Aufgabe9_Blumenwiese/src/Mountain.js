var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var Mountain = /** @class */ (function () {
        function Mountain(_canvas, x, y, w, h) {
            this.points = [];
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");
            /// Wie viele Bergspitzen gibt es und wo werden sie platziert?
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.pointAmount = Math.round(Math.random() * 10 + 10);
            for (var i = 0; i < this.pointAmount; i++) {
                this.points.push([Math.random() * (this.w / this.pointAmount) + (this.x + (this.w / this.pointAmount) * i), Math.random() * this.h / 1.25 + this.y]);
            }
        }
        Mountain.prototype.draw = function () {
            this.context.beginPath();
            this.context.moveTo(this.x, this.y + this.h);
            this.context.lineTo(this.x, this.y + this.h / 2);
            for (var i = 0; i < this.pointAmount; i++) {
                this.context.lineTo(this.points[i][0], this.points[i][1]);
            }
            this.context.lineTo(this.x + this.w, this.y + this.h / 2);
            this.context.lineTo(this.x + this.w, this.y + this.h);
            var gradient = this.context.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
            gradient.addColorStop(0, "#ebecf0");
            gradient.addColorStop(1, "#787fa0");
            this.context.fillStyle = gradient;
            this.context.fill();
        };
        return Mountain;
    }());
    Aufgabe9_Blumenwiese.Mountain = Mountain;
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
//# sourceMappingURL=Mountain.js.map