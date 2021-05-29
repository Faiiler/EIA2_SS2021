var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var DayNightCycle = /** @class */ (function () {
        function DayNightCycle(_canvas, _size, _angle, _timeScale) {
            this.canvas = _canvas;
            this.context = _canvas.getContext("2d");
            this.timeScale = _timeScale;
            this.time = 0;
            this.current = 0;
            this.total = 2 * Math.PI / this.timeScale;
            this.cX = this.canvas.width / 2;
            this.cY = this.canvas.height / 3;
            this.rX = this.canvas.width * 0.4;
            this.rY = this.canvas.height * 0.28;
            this.size = _size;
            this.angle = _angle;
            this.timeScale = _timeScale;
        }
        DayNightCycle.prototype.update = function () {
            this.angle += this.timeScale;
            this.drawSky();
            this.drawSun();
            this.drawMoon();
            this.time++;
            this.current = this.time % (this.total);
        };
        DayNightCycle.prototype.drawSun = function () {
            this.context.beginPath();
            var x = this.cX + this.rX * Math.cos(this.angle);
            var y = this.cY + this.rY * Math.sin(this.angle);
            var gradient = this.context.createRadialGradient(x, y, this.size / 4, x, y, this.size);
            gradient.addColorStop(0, "#FC9601");
            gradient.addColorStop(0.5, "#FFCC33");
            gradient.addColorStop(1, "rgba(255, 204, 51, 0)");
            this.context.fillStyle = gradient;
            this.context.fillRect(x - this.size, y - this.size, this.size * 2, this.size * 2);
        };
        DayNightCycle.prototype.drawMoon = function () {
            this.context.beginPath();
            var x = this.cX + this.rX * Math.cos(this.angle + Math.PI);
            var y = this.cY + this.rY * Math.sin(this.angle + Math.PI);
            var gradient = this.context.createRadialGradient(x, y, this.size / 3, x, y, this.size);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            this.context.arc(x, y, this.size, 0, 2 * Math.PI);
            this.context.fillStyle = gradient;
            this.context.fill();
        };
        /// Wird genutzt, damit wir nachts ein dunkleres Bild bekommen
        DayNightCycle.prototype.drawNightAtmosphere = function () {
            this.context.beginPath();
            this.context.fillStyle = "rgba(39, 33, 78, 0.5)";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        DayNightCycle.prototype.isNight = function () {
            return this.time % (this.total) > (this.total) / 2.1;
        };
        /// Festlegung, welche Farben zu welchem Zeitpunkt verwendet werden
        DayNightCycle.prototype.drawSky = function () {
            this.context.beginPath();
            this.context.rect(0, 0, this.canvas.width, this.canvas.height);
            if (this.current > 0 && this.current < this.total * 0.02) {
                this.context.fillStyle = DayNightCycle.colorFade(39, 33, 78, 255, 107, 62, this.time % this.total, this.total * 0.02);
            }
            if (this.current > this.total * 0.02 && this.current < this.total * 0.6) {
                this.context.fillStyle = DayNightCycle.colorFade(255, 107, 62, 181, 214, 224, this.time % this.total - (this.total * 0.02), this.total * 0.04);
            }
            if (this.current > this.total * 0.06 && this.current < this.total * 0.44) { // Tag
                this.context.fillStyle = "rgb(181, 214, 224)";
            }
            if (this.current > this.total * 0.44 && this.current < this.total * 0.47) {
                this.context.fillStyle = DayNightCycle.colorFade(181, 214, 224, 255, 107, 62, this.time % this.total - (this.total * 0.44), this.total * 0.03);
            }
            if (this.current > this.total * 0.47 && this.current < this.total * 0.5) {
                this.context.fillStyle = DayNightCycle.colorFade(255, 107, 62, 39, 33, 78, this.time % this.total - (this.total * 0.47), this.total * 0.03);
            }
            if (this.current > this.total * 0.5 && this.current < this.total) { // Nacht
                this.context.fillStyle = "rgb(39,33,78)";
            }
            this.context.fill();
        };
        /// Festlegung der Farben, welche für den Übergang genutzt werden. Das S steht für Start, das E für Ende
        DayNightCycle.colorFade = function (rS, gS, bS, rE, gE, bE, i, steps) {
            var r = rS + ((rE - rS) / steps) * i;
            var g = gS + ((gE - gS) / steps) * i;
            var b = bS + ((bE - bS) / steps) * i;
            return "rgb(" + r + ", " + g + ", " + b + ")";
        };
        return DayNightCycle;
    }());
    Aufgabe9_Blumenwiese.DayNightCycle = DayNightCycle;
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
//# sourceMappingURL=DayNightCycle.js.map