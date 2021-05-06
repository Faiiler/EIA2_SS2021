var L04_GenerativeKunst;
(function (L04_GenerativeKunst) {
    /*
    Aufgabe: L08.1_GenerativeKunst
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 06.05.2021
    Quellen: -
    */
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });
    function draw() {
        var shapeCount = getRandomInt(100, 10000); //If you want a clear background, set this number to 5, 100
        for (var i = 0; i < shapeCount; i++) {
            drawRandomShape();
        }
    }
    function drawRandomShape() {
        var x = getRandomInt(0, canvas.width);
        var y = getRandomInt(0, canvas.height);
        context.save();
        context.translate(x, y);
        context.fillStyle = getRandomColor();
        var shapeType = getRandomInt(0, 3);
        switch (shapeType) {
            case 0:
                drawRandomRect();
                break;
            case 1:
                drawRandomCircle();
                break;
            case 2:
                drawRandomPoly();
                break;
        }
        context.restore();
    }
    function drawRandomRect() {
        var width = getRandomInt(10, 100);
        var height = getRandomInt(10, 100);
        context.fillRect(0, 0, width, height);
    }
    function drawRandomCircle() {
        var size = getRandomInt(1, 100);
        context.beginPath();
        context.arc(0, 0, size, 0, 360);
        context.closePath();
        context.fill();
    }
    function drawRandomPoly() {
        var points = getRandomInt(3, 8);
        context.beginPath();
        for (var i = 0; i < points; i++) {
            var x = getRandomInt(0, 100) - getRandomInt(0, 100);
            var y = getRandomInt(0, 100) - getRandomInt(0, 100);
            context.lineTo(x, y);
        }
        context.closePath();
        context.fill();
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    // https://stackoverflow.com/a/1484514
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 8; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})(L04_GenerativeKunst || (L04_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map