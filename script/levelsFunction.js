const levelNameSpan = document.getElementById("levelName");
const movesSpan = document.getElementById("moves");
const movesLimitSpan = document.getElementById("movesLimit");
const pairsFoundSpan = document.getElementById("pairsFound");
let moves = 0;
let pairsFound = 0;
let localLevel = null;

//get level information by id
export async function getActualLevelbyId(id){
    const level = await fetch("levels.json")
        .then(response => response.json())
        .then(data => {
            return data[id];
        });
    levelNameSpan.innerHTML = level.name;
    movesLimitSpan.innerHTML = level.moves;
    localLevel = level;
    return level;
}

//get level when fetch has already been done
export function getActualLevel(){
    if(localLevel !== null){
        return localLevel;
    }
    return false;

}

//increment moves of 1
export function incrementMoves(){
    moves++;
    movesSpan.innerHTML = moves;
}

//increment moves of 1
export function incrementPairsFound(){
    pairsFound++;
    pairsFoundSpan.innerHTML = pairsFound;
}

//returns the value of moves
export function getMoves(){
    return moves;
}

//to know if we are on level mode or not
export function isLevelMode(){
    return localLevel !== null;
}