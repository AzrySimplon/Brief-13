const difficultyDiv =  document.getElementById("difficulty");
const form = document.getElementById("form");
const errorInput = document.getElementById("error");

//api nbr of images limit
const apiLimit = 201;

//fetch all levels + display levels buttons
fetch("levels.json").then(r => r.json())
    .then(data => {
        for (let i = 0; i < data.settings.nbrLevels; i++) {
            const element = data[i];
            const div = document.createElement("div");
            const p = document.createElement("p");
            const bestMoves = localStorage.getItem(element.name);
            if (bestMoves !== null){
                p.innerHTML = `moves : ${bestMoves}`;
            }




            const a = document.createElement("a");
            a.innerHTML = element.name;
            a.href = `level.html?lvl=${i}`;


            div.appendChild(a);
            div.appendChild(p);
            difficultyDiv.appendChild(div);
        }
    });

//listen to the form + verify if user input is correct to redirect the user
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('tiles').value;

    if(inputValue !== null && inputValue < apiLimit){
        document.location.href = `freemode.html?tiles=${inputValue}`;
    }else{
        errorInput.style.display = "block";
        setTimeout(() => {
            errorInput.style.display = "none";
        }, 2000)
    }

})