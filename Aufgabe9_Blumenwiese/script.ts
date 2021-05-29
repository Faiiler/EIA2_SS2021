namespace eia10 {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

    const timeScale: number = 0.005;
    const scene: Scene = new Scene(canvas, timeScale);

    function updateAll(): void {
        scene.update();
    }

    setInterval(updateAll, 30);
}
