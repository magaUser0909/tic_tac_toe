const area = document.getElementById("area");
const cell = document.getElementsByClassName("cell");
const scoreX = document.querySelector(".score-x");
const scoreO = document.querySelector(".score-o");
const goes = document.querySelector(".goes span");
const win = document.querySelector(".win");
const button = document.querySelector(".win button");
const winPlayer = document.querySelector(".player");

let player = "x";

let players = {
    x: 0,
    o: 0,
}

for (let i = 1; i <= 9; i++) {
    area.innerHTML += `<div class="cell"></div>`;
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", cellClick);
}

function cellClick() {
    if (!this.innerHTML) {
        this.innerHTML = player;
        player === "x" ? player = "o" : player = "x";
        goes.innerHTML = player;
        player === "x" ? winPlayer.innerHTML = "o" : winPlayer.innerHTML = "x";
    }

    if (cell[0].innerHTML === "x" && cell[1].innerHTML === "x" && cell[2].innerHTML === "x" ||
        cell[3].innerHTML === "x" && cell[4].innerHTML === "x" && cell[5].innerHTML === "x" ||
        cell[6].innerHTML === "x" && cell[7].innerHTML === "x" && cell[8].innerHTML === "x" ||
        cell[0].innerHTML === "x" && cell[3].innerHTML === "x" && cell[6].innerHTML === "x" ||
        cell[1].innerHTML === "x" && cell[4].innerHTML === "x" && cell[7].innerHTML === "x" ||
        cell[2].innerHTML === "x" && cell[5].innerHTML === "x" && cell[8].innerHTML === "x" ||
        cell[0].innerHTML === "x" && cell[4].innerHTML === "x" && cell[8].innerHTML === "x" ||
        cell[2].innerHTML === "x" && cell[4].innerHTML === "x" && cell[6].innerHTML === "x"
        ||
        cell[0].innerHTML === "o" && cell[1].innerHTML === "o" && cell[2].innerHTML === "o" ||
        cell[3].innerHTML === "o" && cell[4].innerHTML === "o" && cell[5].innerHTML === "o" ||
        cell[6].innerHTML === "o" && cell[7].innerHTML === "o" && cell[8].innerHTML === "o" ||
        cell[0].innerHTML === "o" && cell[3].innerHTML === "o" && cell[6].innerHTML === "o" ||
        cell[1].innerHTML === "o" && cell[4].innerHTML === "o" && cell[7].innerHTML === "o" ||
        cell[2].innerHTML === "o" && cell[5].innerHTML === "o" && cell[8].innerHTML === "o" ||
        cell[0].innerHTML === "o" && cell[4].innerHTML === "o" && cell[8].innerHTML === "o" ||
        cell[2].innerHTML === "o" && cell[4].innerHTML === "o" && cell[6].innerHTML === "o"
    ) {
        win.style.display = "flex";
        player !== "x" ? scoreX.innerHTML = players.x += 1 : scoreO.innerHTML = players.o += 1;
    };
};

button.addEventListener("click", function () {
    win.style.display = "none";
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = ''
    }
});