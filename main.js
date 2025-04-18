import { getArrayImagesId } from "./script/randomImagesFunction.js";
import { displayCardsOnDom, createCards } from "./script/cardsInteractionsFunction.js";
import { getActualLevelbyId, getMoves } from "./script/levelsFunction.js";

//VARIABLES
const gameDiv = document.getElementById("gameDiv");
const winDiv = document.getElementById("win");
const looseDiv = document.getElementById("loose");
let cardsArray = [];
const url = new URL(window.location.toLocaleString());
let winning = false;


const actualLevelID = url.searchParams.get("lvl");
let actualLevel = null;

main();

//determine level/free mode + launch main functions
async function main(){
    let size;

    //if on a level
    if(actualLevelID !== null){
        actualLevel = await getActualLevelbyId(actualLevelID);
        size = actualLevel.tiles;

    }else{ // on free mode
        //get url size parameter
        size = url.searchParams.get("tiles");
    }

    //be sure that the number is even
    while (size % 2 !== 0) {
        size++;
    }

    //get all images
    const arrayDiffImages = await getArrayImagesId(size);

    //create all cards
    cardsArray = createCards(size, arrayDiffImages);

    //displays cards
    displayCardsOnDom(cardsArray, gameDiv);
}

//verify if the user won the game
export function verifyWin(){
    const result = cardsArray.every(card => card.isMatched === true);
    if(result){
        win();
    }
}

//animate winning text
export function win(){
    winning = true;
    //add to localstorage
    //Win animation....
    winDiv.style.display = "flex";
    if(actualLevel !== null){
        if( parseInt(localStorage.getItem(actualLevel.name)) > getMoves() || localStorage.getItem(actualLevel.name) === null){
            localStorage.setItem(actualLevel.name, getMoves().toString());
        }

    }

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000)


}

//animate loosing text
export function loose(){
    if(!winning){
        looseDiv.style.display = "flex";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000)
    }


}