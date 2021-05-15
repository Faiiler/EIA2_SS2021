var L05_Landschaft;
(function (L05_Landschaft) {
    var COLOR_SKY = "#2ea0dc";
    var COLOR_GRASS = "#177b1c";
    var COLOR_MOUNTAIN = "#767676";
    var COLOR_CLOUD = "#fff";
    var COLOR_TREE_TRUNK = "#653f3f";
    var COLOR_TREE_TOP = "#39de26";
    var COLOR_FLOWER_BASE = "#5c3434";
    var COLORS_FLOWER = [
        "#e0d821",
        "#25c9c9",
        "#c71515",
        "#c77115",
        "#bf19d4",
        "#ea5bff"
    ];
    var canvas = document.querySelector("#canvas");
    var context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
    console.log("w", canvas.width);
    console.log("h", canvas.height);
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });
    function draw() {
        context.strokeStyle = "black";
        drawSky();
        drawMountains();
        drawClouds();
        drawGrass();
        drawClouds();
        drawFlowers();
        drawTrees();
    }
    function drawSky() {
        context.save();
        context.fillStyle = COLOR_SKY;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();
    }
    function drawMountains() {
        context.save();
        context.fillStyle = COLOR_MOUNTAIN;
        drawPointyMountain(rand(), .4, .35, .4);
        drawPointyMountain(.2 + rand(), .5, .35, .4);
        drawPointyMountain(.4 + rand(), .4, .35, .4);
        drawPointyMountain(.56 + rand(), .6, .3, .3);
        drawPointyMountain(.7 + rand(), .45, .36, .4);
        context.restore();
    }
    function drawPointyMountain(x, y, w, h) {
        context.save();
        context.translate(wp(x), hp(y)); // move to start
        var bottomLeftX = 0;
        var bottomLeftY = hp(h);
        var topX = wp(w) / 2;
        var topY = 0;
        var bottomRightX = wp(w);
        var bottomRightY = hp(h);
        context.moveTo(bottomLeftX, bottomLeftY);
        context.beginPath();
        context.lineTo(topX, topY); // top
        context.lineTo(bottomRightX, bottomRightY); // bottom right
        context.lineTo(bottomLeftX, bottomLeftY); //bottom left
        context.closePath();
        context.fill();
        context.restore();
    }
    function drawClouds() {
        context.fillStyle = COLOR_CLOUD;
        drawCloud(.1 + rand(), .1 + rand(), .3, .25);
        drawCloud(.26 + rand(), .3 + rand(), .2, .1);
        drawCloud(.5 + rand(), .2 + rand(), .3, .25);
        drawCloud(.8 + rand(), .15 + rand(), .31, .3);
    }
    function drawCloud(x, y, w, h) {
        context.save();
        context.translate(wp(x), hp(y));
        var midHeight = hp(h) / 2;
        context.beginPath();
        context.moveTo(0, midHeight); // start point, center height
        context.bezierCurveTo(0, hp(h), wp(w), hp(h), wp(w), midHeight); // bottom curve
        context.bezierCurveTo(wp(w), 0, 0, 0, 0, midHeight); // top curve
        context.fill();
        context.restore();
    }
    function drawGrass() {
        context.save();
        context.fillStyle = COLOR_GRASS;
        context.fillRect(0, hp(0.8), canvas.width, canvas.height); // just draw out-of-bounds, don't really care
        context.restore();
    }
    function drawTrees() {
        context.save();
        drawTree(0.1 + rand(), 0.7 + rand(), 0.12, 0.4);
        drawTree(0.3 + rand(), 0.75 + rand(), 0.12, 0.4);
        drawTree(0.5 + rand(), 0.71 + rand(), 0.1, 0.3);
        drawTree(0.8 + rand(), 0.69 + rand(), 0.1, 0.26);
        context.restore();
    }
    function drawTree(x, y, w, h) {
        context.save();
        context.translate(wp(x), hp(y));
        context.fillStyle = COLOR_TREE_TRUNK;
        context.moveTo(0, 0);
        context.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.25 * w), hp(0.5 * h));
        context.fillStyle = COLOR_TREE_TOP;
        context.moveTo(0, 0);
        context.fillRect(wp(0), hp(0), wp(w), hp(0.35 * h));
        context.restore();
    }
    function drawFlowers() {
        context.save();
        drawFlower(0.1 + rand(), 0.9 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.2 + rand(), 0.85 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.3 + rand(), 0.9 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.4 + rand(), 0.86 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.5 + rand(), 0.91 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.6 + rand(), 0.89 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.7 + rand(), 0.95 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.8 + rand(), 0.88 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        drawFlower(0.9 + rand(), 0.9 + rand(), 0.005, 0.06, COLORS_FLOWER[Math.floor(Math.random() * COLORS_FLOWER.length)]);
        context.restore();
    }
    function drawFlower(x, y, w, h, color) {
        context.save();
        context.translate(wp(x), hp(y));
        context.fillStyle = COLOR_FLOWER_BASE;
        context.moveTo(0, 0);
        context.fillRect(wp(0.4 * w), hp(0.1 * h), wp(0.1 * w), hp(0.5 * h));
        context.fillStyle = color;
        context.moveTo(0, 0);
        fillCircle(wp(0.4 * w), hp(0), wp(w));
        context.restore();
    }
    function fillCircle(x, y, r) {
        context.moveTo(x, y);
        context.beginPath();
        context.arc(x, y, r, 0, 360);
        context.closePath();
        context.fill();
    }
    function hp(h) {
        return canvas.height * h;
    }
    function wp(w) {
        return canvas.width * w;
    }
    function rand() {
        return (Math.random() - Math.random()) * Math.random() * 0.1;
    }
})(L05_Landschaft || (L05_Landschaft = {}));
//# sourceMappingURL=script.js.map