//War Game
//credits and thanks to:
//https://www.asciiart.eu/miscellaneous/playing-cards - card asciiart

//Classes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.deck = [];
    }
}

//Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function displayGameScreen(p1, p2) { //Displays Game Screen
    alert(`
    cards left: ${p1.deck.length}
    ${p1.name}: ${p1.points}
    ${p1.deck[0].row1}
    ${p1.deck[0].row2}
    ${p1.deck[0].row3}
    ${p1.deck[0].row4}

    ${p2.name}: ${p2.points}
    ${p2.deck[0].row1}
    ${p2.deck[0].row2}
    ${p2.deck[0].row3}
    ${p2.deck[0].row4}
    `);
}
function shuffle(array){
    for (var i = array.length - 1; i > 0; i--) { 
        var j = Math.floor(Math.random() * (i + 1)); //rando thats within boundries

        var temp = array[i]; //saves old value
        array[i] = array[j]; //places new value
        array[j] = temp;     //puts old value in new value's place
    }
    return array;
}


//Main Body~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
alert(
`War! The Card Game
~~~~~~~~~~~~~~~~~~
    click "ok"
     to play
`) //starting screen

const p1 = new player(prompt("enter your name: ")); //player creation
const p2 = new player("computer");                  //computer creation

shuffle(masterDeck); //shuffle

for (let i = 0; i < masterDeck.length; i++){//spliting the deck
    if (i % 2 === 0){
        p1.deck.push(masterDeck[i]);
    } else {
        p2.deck.push(masterDeck[i]);
    }
}

while (p1.deck.length !== 0){//game tiiiime
    displayGameScreen(p1,p2);
    if (p1.deck[0].value > p2.deck[0].value){
        p1.points++;
    } else if (p1.deck[0].value < p2.deck[0].value){
        p2.points++;
    } else {
        //do nothing
    }

    p1.deck.splice(0, 1);
    p2.deck.splice(0, 1);
}

if (p1.points > p2.points){
    alert(`
        Game Over:
    ${p1.name} won the game by ${p1.points}:${p2.points}!
    `);
} else if (p1.points > p2.points){
    alert(`
        Game Over:
    ${p2.name} won the game by ${p2.points}:${p1.points}!
    `);
}