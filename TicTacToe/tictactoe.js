const statusS = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cellBOX = document.querySelectorAll('.box');
let player1 = "X";
let player2 = "O";
let playturn = 1;
let currentplayer = player1;
let winner = document.querySelector("#win");
let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];


//event handlers
const handleReset = (e) => {
    console.log(e);
};

const handleBoxClick = (e) => {
    console.log(e);
    if (playturn % 2 == 0) {
        e.target.textContent = player1;
    }
    else if (playturn % 2 == 1) {
        e.target.textContent = player2;
    }
    playturn++;
    checkWinner();
};


const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
};

const checkWinner = () => {
    winCombos.forEach((combo) => {
        if (cellBOX[combo[0]].textContent
            && cellBOX[combo[0]] === cellBOX[combo[1]].textContent
            && cellBOX[combo[0]] === cellBOX[combo[2]].textContent) {
            winner = 'cellBOX';
            console.log("hi")
        }
    });
}

//event listeners

reset.addEventListener("click", handleReset);

for (let i = 0; i < cellBOX.length; i++) {
    cellBOX[i].addEventListener("click", handleBoxClick);
}

