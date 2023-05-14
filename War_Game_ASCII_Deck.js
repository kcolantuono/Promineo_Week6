//The deck for War! Game
//ASCII kinda made it bloated. Sooooo it's here now

//Classes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class card {
    constructor(rank, value, suit, row1, row2, row3, row4){
        this.rank = rank; //card number or rank
        this.value = value; //card's "power level"
        this.suit = suit; //Suit of card
        this.row1 = row1; //For ASCII
        this.row2 = row2; //""
        this.row3 = row3; //""
        this.row4 = row4; //""
    }

    display(){
        alert(
            `
            ${this.row1}
            ${this.row2}
            ${this.row3}
            ${this.row4}
            `
        )
    }
}

//Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function checkRank(value){ //Checks card "power level" and turns it into card rank or number
    let rank;
    switch(value){
        case 14:
            rank = "A";
            break;
        case 11:
            rank = "J";
            break;
        case 12:
            rank = "Q";
            break;
        case 13:
            rank = "K";
            break;
        default:
            rank = false;
    }
    if (rank){
        return rank;
    } else{
        return value;
    }
}
function convertRank(rank){ //Makes rank be 2 spaces long if not already
    var output = "";
    output += rank;
    if (output.length < 2){
        output += " ";
    } else {
        //do nothing
    }
    return output;
}
function createHeart(value,array){
    var rank = checkRank(value);
    array.push(new card(
        rank,
        value,
        `heart`,
        ` ____ `,
        `|${convertRank(rank)}   |`,
        `| (')  |`,
        `| _\\_ |`
    ))
}
function createDiamond(value,array){
    var rank = checkRank(value);
    array.push(new card(
        rank,
        value,
        `diamond`,
        ` ____ `,
        `|${convertRank(rank)}   |`,
        `|   /\\ |`,
        `|__\\/_|`
    ))
}
function createSpade(value,array){
    var rank = checkRank(value);
    array.push(new card(
        rank,
        value,
        `spade`,
        ` ____ `,
        `|${convertRank(rank)}   |`,
        `|  ^  |`,
        `| ( , ) |`
    ))
}
function createClub(value,array){
    var rank = checkRank(value);
    array.push(new card(
        rank,
        value,
        `club`,
        ` ____ `,
        `|${convertRank(rank)}   |`,
        `|  O  |`,
        `|O,O|`
    ))
}

//Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const masterDeck = [];

//Main~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
for (let i = 2; i <= 14; i++){//Adding hearts to deck
    createHeart(i, masterDeck);
}
for (let i = 2; i <= 14; i++){//Adding diamond to deck
    createDiamond(i, masterDeck);
}
for (let i = 2; i <= 14; i++){//Adding spade to deck
    createSpade(i, masterDeck);
}
for (let i = 2; i <= 14; i++){//Adding club to deck
    createClub(i, masterDeck);
}