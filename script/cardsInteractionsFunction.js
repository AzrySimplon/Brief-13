//create cards
import { Card } from "./cardClass.js";
import { incrementMoves, incrementPairsFound, isLevelMode, getActualLevel, getMoves } from "./levelsFunction.js";
import {verifyWin, loose} from "../main.js";

let cardsTurned = [];
let onCheckMatch = false;
let actualLevel = null;

//initialize cards with images...
export function createCards(size, arrayImagesIds){
    let returnCardsArray = [];

    for (let i = 0; i < size; i++) {
        const randomNbrImage = Math.floor(Math.random() * arrayImagesIds.length);
        const image = `https://picsum.photos/id/${arrayImagesIds[randomNbrImage][1]}/300/300`;
        const card = new Card(i, image);

        if(arrayImagesIds[randomNbrImage][0] !== 0){
            arrayImagesIds[randomNbrImage][0]--;
        }else {
            arrayImagesIds.splice(randomNbrImage, 1);
        }
        returnCardsArray.push(card);
    }

    return returnCardsArray;
}

//display all cards given in parameters in the mainDiv
export function displayCardsOnDom(cardsArray, mainDiv){
    const returnSectionsArray = [];

    cardsArray.forEach(card => {
        const section = document.createElement("section");
        section.classList.add("card");
        const divInner = document.createElement("div");
        divInner.classList.add("card-inner");
        const divBack = document.createElement("div");
        divBack.classList.add("card-back");
        const divFront = document.createElement("div");
        divFront.classList.add("card-front");
        const img = document.createElement("img");
        img.setAttribute("src", card.img);

        returnSectionsArray.push(section);

        section.addEventListener("click", () => {

            //check if checkMatch isn't running
            if(!onCheckMatch && cardsTurned[0] !== card){
                //verify that the second card clicked isn't the same
                card.turn();
                cardsTurned.push(card);
                if(cardsTurned.length === 2){
                    checkMatch(cardsTurned[0], cardsTurned[1]);
                }
            }

        })
        card.setHtmlElement(section);

        divBack.appendChild(img);
        divInner.appendChild(divFront);
        divInner.appendChild(divBack);
        section.appendChild(divInner);
        mainDiv.appendChild(section);
    })

    return returnSectionsArray;
}

//check if cards match
export function checkMatch(card1, card2){
    onCheckMatch = true;

    setTimeout(() => {
        if(card1.img === card2.img){
            card1.matches();
            card2.matches();
            if(isLevelMode()){incrementPairsFound();}

        }else{
            card1.turn();
            card2.turn();
        }
        incrementMoves();
        verifyWin();
        if(isLevelMode()){isInLevelLimits();}
        cardsTurned = [];
        onCheckMatch = false;
    }, 1000)
}

//verify if respects the limits of the level
function isInLevelLimits(){
    if(actualLevel === null){
        actualLevel = getActualLevel();
    }

    if(actualLevel.moves <= getMoves()){
        loose()
    }
}
