window.onload = main;

let inventory = [];

function main () {
    addEventListeners()
}

function addEventListeners() {
    let startGame = document.getElementById("startbutton")
    startGame.onclick = firstStage;
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
            goToCave();
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
        alert("Du går till grottan. Plötsligt ser du en staty mitt inne i grottan. Statyn är en riddare gjord i trä. Riddaren håller i en sköld! Du tar en närmare titt. Skölden sitter stenhårt, du behöver svärdet för att kunna skära trät och ta ner skölden... Som tur är har du hittat svärdet så du använder det för att skära i trät och du har nu skölden också.")
        let collectedAll = prompt("Det är dags att bege dig mot monstret. Ange inventory för att dubbelkolla att du har allt du behöver.")
        if (collectedAll === "inventory") {
            alert(inventory)
            monsterFight()
        }
        else {
            alert("Vänligen dubbelkolla att du har alla föremål du behöver")
            goToCave();
        }
    }

    function monsterFight() {
        let hitTheMonster = prompt("Du närmar dig monstret. Du hör det skrika. Plötsligt står du rakt framför det. Ange slå för att slå monstret")
    
        if (hitTheMonster === "slå") {
            alert("Du slog monstret!")
            monsterFightPartTwo()
        }
        else {
            alert("Vänligen ange slå")
        }
    }
    
    function monsterFightPartTwo() {
        let blockTheMonster = prompt("Monstret försöker slå dig! Ange blockera för att blockera monstrets slag eller ange slå för att slå istället.")
    
        if (blockTheMonster === "blockera") {
            alert("Du blockerade monstrets slag!")
            monsterFightPartThree()
        }
        else if (blockTheMonster === "slå") {
            inventory.pop("Svärd")
            alert("Du försökte slå monstret. Men monstret slog dig först, du ramlar till marken. Du ser inte så bra för du är yr, men du märker att du tappat något.")
            calmTheMonster()
        }
        else {
            alert("Vänligen ange blockera eller slå")
            monsterFightPartTwo()
        }
    }
    
    function monsterFightPartThree() {
        alert("Monstret ger upp. Han vill inte slåss mer. Han säger att han ska flyga tillbaka till Goodbye World om du lovar att bli monstrets vän. För det är allt han vill, att ha en vän.")
        friendlyMonster()
    }
    
    function calmTheMonster() {
        let checkInventory = prompt("Ange inventory för att se vad du tappat")
    
        if (checkInventory === "inventory") {
            alert(inventory)
            alert("Du har tappat skölden. Monstret ser det. Men monstret slår dig inte igen.")
            alert("Monstret säger att han inte vill slåss och att han kom till Hello World för att han inte passade in i Goodbye World. Monstret vill bli din vän.")
            friendlyMonster();
        }
        else {
            alert("Vänligen ange inventory")
            calmTheMonster()
        }
    }

    function friendlyMonster() {
        let beFriends = prompt("Vill du bli monstrets vän? Ange ja eller nej")

        if (beFriends === "ja") {
            alert("Du är nu vän med monstret!")
            alert("GRATTIS DU HAR HJÄLPT MONSTRET ATT HITTA EN VÄN OCH SAMTIDIGT FÖRT BORT DET! DU HAR KLARAT SPELET!")
        }
        else if (beFriends === "nej") {
            alert("Monstret tittar ledset på dig. Monstret säger att han borde bege sig tillbaka till Goodbye World. Monstret fäller ut sina vingar och flyger iväg.")
            alert("GRATTIS DU HAR BEKÄMPAT MONSTRET OCH KLARAT SPELET!")
        }
    }