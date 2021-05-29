var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var Bee = /** @class */ (function () {
        function Bee(_canvas, x, y) {
            this.canvas = _canvas;
            this.context = this.canvas.getContext("2d");
            this.x = x;
            this.y = y;
            this.vX = Math.random() * 8 - 4;
            this.vY = Math.random() * 8 - 4;
            this.time = 0;
            this.changeTime = Math.random() * 50 + 40;
            this.scale = Math.random() * 20 + 10;
        }
        Bee.prototype.update = function () {
            this.time++;
            this.x += this.vX;
            this.y += this.vY;
            this.updateVelocities();
            this.drawBee();
        };
        /// Biene wird gezeichnet
        Bee.prototype.drawBee = function () {
            this.context.beginPath();
            this.context.ellipse(this.x, this.y, this.scale, this.scale * 0.7, (this.vX > 0) ? -Math.PI / 10 : Math.PI / 10, 0, 2 * Math.PI);
            this.context.fillStyle = "yellow";
            this.context.lineWidth = 5;
            this.context.strokeStyle = "black";
            this.context.stroke();
            this.context.fill();
            /// Umrandung der Biene
            this.context.beginPath();
            this.context.arc((this.vX > 0) ? this.x + this.scale / 3 : this.x - this.scale / 3, this.y - this.scale / 6, this.scale / 5, 0, Math.PI * 2);
            this.context.fillStyle = "black";
            this.context.fill();
            /// Zeichnen der Flügel (durch das abrufen der Zeit, wir überprüft, wann welcher Flügelschlag bzw, welche Ellipse gezeichnet werden muss)
            this.context.beginPath();
            if (this.time % 4 < 2) {
                this.context.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 2.7, this.scale * 0.9, this.scale * 0.5, (this.vX > 0) ? Math.PI / 8 : -Math.PI / 8, 0, Math.PI * 2);
            }
            else {
                this.context.ellipse((this.vX > 0) ? this.x - this.scale / 1.2 : this.x + this.scale / 1.2, this.y - this.scale / 7, this.scale * 0.9, this.scale * 0.5, 0, 0, Math.PI * 2);
            }
            this.context.fillStyle = "rgba(180,180,180, 0.7)";
            this.context.fill();
            /// Umrandung der Flügel
            this.context.lineWidth = 2;
            this.context.strokeStyle = "rgb(100,100,100)";
            this.context.stroke();
        };
        /// Bestimmen der Geschwindigkeiten, in welcher die Bienen Fliegen + abbouncen der Bienen am Rand (letzte If -> Regulierung der Flughöhe)
        Bee.prototype.updateVelocities = function () {
            if (this.time >= this.changeTime) {
                this.vX = Math.random() * 8 - 4;
                this.vY = Math.random() * 8 - 4;
                this.changeTime = Math.random() * 50 + 40;
                this.time = 0;
            }
            if (this.x >= this.canvas.width - this.scale) {
                this.vX = -this.vX;
                this.x = this.canvas.width - this.scale;
            }
            if (this.x <= this.scale) {
                this.vX = -this.vX;
                this.x = this.scale;
            }
            if (this.y >= this.canvas.height - this.scale) {
                this.vY = -this.vY;
                this.y = this.canvas.height - this.scale;
            }
            if (this.y <= 300 + this.scale) {
                this.vY = -this.vY;
                this.y = this.scale + 300;
            }
        };
        return Bee;
    }());
    Aufgabe9_Blumenwiese.Bee = Bee;
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map