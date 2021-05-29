var Aufgabe9_Blumenwiese;
(function (Aufgabe9_Blumenwiese) {
    var canvas = document.getElementById("canvas");
    var timeScale = 0.005;
    var scene = new Aufgabe9_Blumenwiese.Scene(canvas, timeScale);
    function updateAll() {
        scene.update();
    }
    setInterval(updateAll, 30);
})(Aufgabe9_Blumenwiese || (Aufgabe9_Blumenwiese = {}));
/*
    Aufgabe: L09.2_Landschaft: Canvas
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 29.05.2021
    Quellen: Larissa Gaede, Eva Breuninger
    */
//# sourceMappingURL=script.js.map