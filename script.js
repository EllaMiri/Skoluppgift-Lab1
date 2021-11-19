window.onload = main;

/** Declares an array to display what the user has picked up */
let inventory = [];

function main () {
    addEventListeners()
}

function addEventListeners() {
    let startGame = document.getElementById("startbutton")
    startGame.onclick = firstStage;
}

/** First step where user decides which path to go first */
function firstStage() {
    let firstStep = prompt("Vart vill du börja leta? Ange skogen eller grottan").toLowerCase();

    if (firstStep === "skogen") {
        forestFirstTime();
    }
    else if (firstStep === "grottan") {
        cave();
    }
    else {
        alert("Vänligen ange skogen eller grottan")
        firstStage()
    }
}

/** User chose the forest as starting point */
function forestFirstTime() {
    alert("Du går in i skogen. Du ser ett hus framför dig. Du knackar på dörren.")
        alert("En gubbe öppnar. Han frågar vad du vill och du svarar att du letar efter ett svärd och en sköld. Gubben säger att han nog har ett svärd hemma men han minns inte vart han lagt det... Du kan gärna leta här inne säger han.")
        insideHouseFirstTime();
}

function insideHouseFirstTime() {
    let openChest = prompt("I hallen ser du en kista. Vill du öppna den? Ange ja eller nej").toLowerCase();
    if (openChest === "ja") {
        alert("Kistan är tom.. Leta vidare")
        upstairsFirstTime()
    }
    else if (openChest === "nej") {
        alert("Du letar vidare")
        upstairsFirstTime()
    }
    else {
        alert("Vänligen ange ja eller nej")
        insideHouseFirstTime()
    }
}

function upstairsFirstTime() {
    let openWardrobe = prompt("Du ser en trappa. Du går upp på övervåningen. Där uppe i ett av rummen ser du en garderob. Vill du öppna den? Ange ja eller nej.").toLowerCase();
    
    if (openWardrobe === "ja") {
        alert("Där ligger svärdet! Du har hittat det. Nu saknas bara skölden.")
        inventory.push("Svärd")
        fightOrCave();
        
    }
    else if(openWardrobe === "nej") {
        alert("Gubben kommer upp till dig på övervåningen. Han sa att han minns nu var han lagt svärdet. Det ligger i garderoben säger han och öppnar den. Han ger dig svärdet. Nu behöver du bara skölden.")
        inventory.push("Svärd")
        fightOrCave();

    }
    else {
        alert("Vänligen ange ja eller nej")
        upstairsFirstTime()
    }
    
}

function goToCaveFirstTime() {
    inventory.push("Sköld")
    alert("Du går till grottan. Det är mörkt och kallt där inne och fladdermöss flyger omkring. Mitt i grottan ser du ett ljus. Det är en lykta. Brevid lyktan står en staty av en riddare gjord i trä. Riddaren håller i en sköld. Som tur är har du hittat svärdet så du använder det för att skära i trät och du har nu skölden också.")
   doubleCheckInventory();
}


/** User chose the cave as starting point */
function cave() {
    alert("Det är mörkt och kallt när du beger dig in i grottan.")
    alert("Plötsligt ser du en staty mitt inne i grottan. Statyn är en riddare gjord i trä. Riddaren håller i en sköld! Du tar en närmare titt. Skölden sitter stenhårt, du behöver svärdet för att kunna skära trät och ta ner skölden...")
    alert("Du går besviket ut ur grottan igen. Du måste hitta svärdet så du går in i skogen.")
    forestSecondTime();
}
function forestSecondTime() {
        alert("Du ser ett hus framför dig. Du knackar på dörren.")
        alert("En gubbe öppnar. Han frågar vad du vill och du svarar att du letar efter ett svärd och en sköld. Gubben säger att han nog har ett svärd hemma men han minns inte vart han lagt det... Du kan gärna leta här inne säger han.")
        insideHouseSecondTime();
}

function insideHouseSecondTime() {
    let openChest = prompt("I hallen ser du en kista. Vill du öppna den? Ange ja eller nej").toLowerCase();
    if (openChest === "ja") {
        alert("Kistan är tom.. Leta vidare")
        upstairsSecondTime()
    }
    else if (openChest === "nej"){
        alert("Du letar vidare")
        upstairsSecondTime()
    }
    else {
        alert("Vänligen ange ja eller nej")
        insideHouseSecondTime()
    }
}

function upstairsSecondTime() {
    let openWardrobe = prompt("Du ser en trappa. Du går upp på övervåningen. Där uppe i ett av rummen ser du en garderob. Vill du öppna den? Ange ja eller nej.").toLowerCase();
    
    if (openWardrobe === "ja") {
        alert("Där ligger svärdet! Du har hittat det. Nu saknas bara skölden.")
        inventory.push("Svärd")
        fightOrCave();
        
    }
    else if (openWardrobe === "nej") {
        alert("Gubben kommer upp till dig på övervåningen. Han sa att han minns nu var han lagt svärdet. Det ligger i garderoben säger han och öppnar den. Han ger dig svärdet. Nu behöver du bara skölden.")
        inventory.push("Svärd")
        fightOrCave();

    }
    else {
        alert("Vänligen ange ja eller nej")
        upstairsSecondTime()
    }
    
}

    function goToCaveSecondTime() {
        inventory.push("Sköld")
        alert("Du går till grottan. Du ser statyn igen. Som tur är har du hittat svärdet så du använder det för att skära i trät och du har nu skölden också.")
       doubleCheckInventory();
    }


/** Functions that run the monster fight part */
    function monsterFight() {
        let hitTheMonster = prompt("Du närmar dig monstret. Du hör det skrika. Plötsligt står du rakt framför det. Ange slå för att slå monstret").toLowerCase();
    
        if (hitTheMonster === "slå") {
            alert("Du slog monstret!")
            monsterFightPartTwo()
        }
        else {
            alert("Vänligen ange slå")
            monsterFight()
        }
    }
    
    function monsterFightPartTwo() {
        let blockTheMonster = prompt("Monstret försöker slå dig! Ange blockera för att blockera monstrets slag eller ange slå för att slå istället.").toLowerCase();
    
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
        let checkInventory = prompt("Ange inventory för att se vad du tappat").toLowerCase();
    
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
        let beFriends = prompt("Vill du bli monstrets vän? Ange ja eller nej").toLowerCase();

        if (beFriends === "ja") {
            alert("Du är nu vän med monstret!")
            alert("GRATTIS DU HAR HJÄLPT MONSTRET ATT HITTA EN VÄN OCH SAMTIDIGT FÖRT BORT DET! DU HAR KLARAT SPELET!")
        }
        else if (beFriends === "nej") {
            alert("Monstret tittar ledset på dig. Monstret säger att han borde bege sig tillbaka till Goodbye World. Monstret fäller ut sina vingar och flyger iväg.")
            alert("GRATTIS DU HAR BEKÄMPAT MONSTRET OCH KLARAT SPELET!")
        }
        else {
            alert("Vänligen ange ja eller nej")
            friendlyMonster()
        }
        clearInventory();
        
    }
    
   
    /** Clears the inventory so that if the user starts game again the inventory is empty */
    function clearInventory() {
        while (inventory != 0) {
            inventory.pop()
        }
    }

    /** Function that handles the choice of where the user wants to go next after they've been upstairs */
function fightOrCave() {

    let whereNext = prompt("Vart vill du gå nu? Ange fight för att gå och bekämpa monstret eller grottan för att gå till grottan").toLowerCase();

        if (whereNext === "grottan"){
            goToCaveSecondTime();
        }
        else if (whereNext === "fight") {
            alert("Oops, du har ju inte skölden än... Du måste hämta den först. Klicka ok för att gå till grottan.")
            goToCaveSecondTime();
        }
        else {
            alert("Vänligen ange fight eller grottan")
            fightOrCave()
        }

        
}

function doubleCheckInventory() {

    let collectedAll = prompt("Det är dags att bege dig mot monstret. Ange inventory för att dubbelkolla att du har allt du behöver.").toLowerCase();
        if (collectedAll === "inventory") {
            alert(inventory)
            monsterFight()
        }
        else {
            alert("Vänligen ange inventory för att dubbelkolla att du har alla föremål du behöver")
            doubleCheckInventory();
        }
}