var eia10;
(function (eia10) {
    var canvas = document.getElementById("canvas");
    var timeScale = 0.005;
    var scene = new eia10.Scene(canvas, timeScale);
    function updateAll() {
        scene.update();
    }
    setInterval(updateAll, 30);
})(eia10 || (eia10 = {}));
//# sourceMappingURL=script.js.map