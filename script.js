window.onload = main;

let inventory = [];

function main () {
    addEventListeners()
}

function addEventListeners() {
    let startGame = document.getElementById("startbutton")
    startGame.onclick = run;
}

function run() {
    alert("Välkommen till Hello World! Detta spel går ut på att du är en karaktär från planeten Hello World och du ska bekämpa ett monster som kommit från planeten Goodbye World. Monstret försöker förstöra din planet.")
    alert("För att bekämpa monstret måste du ha ett svärd och en sköld. Dessa hittar du genom att utforska världen. Lycka till!")
    firstStage();
}

function firstStage() {
    let firstStep = prompt("Vart vill du börja leta? Ange skogen eller grottan")

    if (firstStep === "skogen") {
        forest();
    }
    else if (firstStep === "grottan") {
        cave();
    }
    else {
        alert("Vänligen ange skogen eller grottan")
        firstStage()
    }
}