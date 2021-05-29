namespace Aufgabe9_Blumenwiese {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

    const timeScale: number = 0.005;
    const scene: Scene = new Scene(canvas, timeScale);

    function updateAll(): void {
        scene.update();
    }

    setInterval(updateAll, 30);
}

/*
    Aufgabe: L09.2_Landschaft: Canvas
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 29.05.2021
    Quellen: Larissa Gaede, Eva Breuninger
    */
