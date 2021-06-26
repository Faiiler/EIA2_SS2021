namespace BlumenwieseIntelligent {

    /*
    Aufgabe: L11.1_BlumenwiesePolymorphie
    Name: Maximilian Buckel
    Matrikel: 266825
    Datum: 26.06.2021
    Quellen: Larissa Gaede, Eva Breuninger
    */

    let timeScale: number = 0.005;
    export let scene: Scene = new Scene(timeScale);

    setInterval(updateAll, 30);

    function updateAll(): void {
        scene.update();
    }

    document.addEventListener("click", e => {
        scene.makeBee(e.x, e.y);
    })
}
