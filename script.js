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

function forest() {
    alert("Du går in i skogen. Du ser ett hus framför dig. Du knackar på dörren.")
        alert("En gubbe öppnar. Han frågar vad du vill och du svarar att du letar efter ett svärd, en sköld och en hjälm. Gubben säger att han nog har ett svärd hemma men han minns inte vart han lagt det... Du kan gärna leta här inne säger han.")
        insideHouse();
}

function insideHouse() {
    let openChest = prompt("I hallen ser du en kista. Vill du öppna den? Ange ja eller nej")
    if (openChest === "ja") {
        alert("Kistan är tom.. Leta vidare")
    }
    else if (openChest === "nej"){
        alert("Du letar vidare")
    }
    else {
        alert("Vänligen ange ja eller nej")
        insideHouse()
    }
    upstairs()
}

function upstairs() {
    let openWardrobe = prompt("Du ser en trappa. Du går upp på övervåningen. Där uppe i ett av rummen ser du en garderob. Vill du öppna den? Ange ja eller nej.")
    
    if (openWardrobe === "ja") {
        alert("Där ligger svärdet! Du har hittat det. Nu saknas bara skölden.")
        inventory.push("Svärd")
        let whereNext = prompt("Vart vill du gå nu? Ange fight för att gå och bekämpa monstret eller grottan för att gå till grottan")

        if (whereNext === "grottan"){
            goToCave();
        }
        else if (whereNext === "fight") {
            alert("Oops, du har ju inte skölden än... Du måste hämta den först. Klicka ok för att gå till grottan.")
            goToCave()
        }
        else {
            alert("Vänligen ange fight eller grottan")
            upstairs()
        }
        
    }
    else if(openWardrobe === "nej") {
        alert("Gubben kommer upp till dig på övervåningen. Han sa att han minns nu var han lagt svärdet. Det ligger i garderoben säger han och öppnar den. Han ger dig svärdet. Nu behöver du bara skölden.")
        inventory.push("Svärd")
        let whereNext = prompt("Vart vill du gå nu? Ange fight för att gå och bekämpa monstret eller grottan för att gå till grottan")

        if (whereNext === "grottan"){
            goToCave();
        }
        else if (whereNext === "fight") {
            alert("Oops, du har ju inte skölden än... Du måste hämta den först. Klicka ok för att gå till grottan.")
            goToCave()
        }
        else {
            alert("Vänligen ange fight eller grottan")
            upstairs()
        }

    }
    
}

function cave() {
        alert("Det är mörkt och kallt när du beger dig in i grottan, men som tur har har du en ficklampa med dig. Du går allt längre in i grottan. Det är läskigt och du ser fladdermöss flyga omkring där inne.")
        alert("Plötsligt ser du en staty mitt inne i grottan. Statyn är en riddare gjord i trä. Riddaren håller i en sköld! Du tar en närmare titt. Skölden sitter stenhårt, du behöver svärdet för att kunna skära trät och ta ner skölden...")
        alert("Du går besviket ut ur grottan igen. Du måste hitta svärdet. Du går till skogen.")
        forest();
    }
    function forest() {
            alert("Du går in i skogen. Du ser ett hus framför dig. Du knackar på dörren.")
            alert("En gubbe öppnar. Han frågar vad du vill och du svarar att du letar efter ett svärd och en sköld. Gubben säger att han nog har ett svärd hemma men han minns inte vart han lagt det... Du kan gärna leta här inne säger han.")
            insideHouse();
    }

    function goToCave() {
        inventory.push("Sköld")
        alert("Du är i grottan. Du använder svärdet för att skära i trät. Nu har du skölden också!")
        let collectedAll = prompt("Ange inventory för att dubbelkolla att du har allt du behöver.")
        if (collectedAll === "inventory") {
            alert(inventory)
            monsterFight()
        }
        else {
            alert("Vänligen dubbelkolla att du har alla föremål du behöver")
            goToCave();
        }
    }