"use strict";
var L04_GenerativeKunst;
(function (L04_GenerativeKunst) {
    /*
    Aufgabe: L08.1_GenerativeKunst
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 06.05.2021
    Quellen: -
    */
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });
    function draw() {
        const shapeCount = getRandomInt(100, 10000); //If you want a clear background, set this number to 5, 100
        for (let i = 0; i < shapeCount; i++) {
            drawRandomShape();
        }
    }
    function drawRandomShape() {
        const x = getRandomInt(0, canvas.width);
        const y = getRandomInt(0, canvas.height);
        context.save();
        context.translate(x, y);
        context.fillStyle = getRandomColor();
        const shapeType = getRandomInt(0, 3);
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
        const width = getRandomInt(10, 100);
        const height = getRandomInt(10, 100);
        context.fillRect(0, 0, width, height);
    }
    function drawRandomCircle() {
        const size = getRandomInt(1, 100);
        context.beginPath();
        context.arc(0, 0, size, 0, 360);
        context.closePath();
        context.fill();
    }
    function drawRandomPoly() {
        const points = getRandomInt(3, 8);
        context.beginPath();
        for (let i = 0; i < points; i++) {
            const x = getRandomInt(0, 100) - getRandomInt(0, 100);
            const y = getRandomInt(0, 100) - getRandomInt(0, 100);
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
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 8; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})(L04_GenerativeKunst || (L04_GenerativeKunst = {}));
//# sourceMappingURL=script.js.map