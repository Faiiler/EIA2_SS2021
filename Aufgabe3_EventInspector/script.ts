window.addEventListener("load", handleLoad);

function handleLoad(): void {

    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

    const button = document.getElementById("btn");
    if (button) {
        button.addEventListener("click", handleButtonClick);
    }

    document.addEventListener("customEvent", function (event: Event) {
        console.log("Soeben wurde ein custom Event ausgeführt, wow!", event)
    })
}

function handleButtonClick(): void {
    let event = new Event("customEvent");
    document.dispatchEvent(event); //
}

function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.pageX;
    let y: number = _event.pageY;
    let coordinates: string = "X: " + x + "Y: " + y;
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    let target: HTMLElement = <HTMLElement>_event.target;

    span.style.top = (y+5) + "px"
    span.style.left = (x+5) + "px"
    span.innerHTML = coordinates + "<br/>" + target + "<br/>" + target.id;

}

function logInfo(_event: Event): void {
    console.log("The type is: ", _event.type);
    console.log("The target is: ", _event.target);
    console.log("The current target is :", _event.currentTarget);
    console.log(_event);
}
