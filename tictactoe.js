const statusS = document.querySelector('.status');
const reset = document.querySelector ('.reset');
const cellBOX = document.querySelectorAll('.box');
let boardArray = ['', '', '', '', '', '', '', '', ''];
let player1 = "X";
let player2 = "O";
let currentplayer = player1;
let winner = document.querySelector("#win");
let winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];


winCombos.forEach((combo) =>{
    if (boardArray[combo[0]]
    && boardArray[combo[0]] === boardArray[combo[1]]
    && boardArray[combo[0]] === boardArray[combo[2]]) {
    winner = 'current';
    }
    });


//event handlers
const handleReset = (e) => {
    console.log(e);
};

const handleBoxClick = (e) => {
    console.log(e);
    e.target.textContent = "X"
};

const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };


//event listeners

reset.addEventListener("click", handleReset);

for (let i = 0; i < cellBOX.length; i++) {
    cellBOX[i].addEventListener("click", handleBoxClick);
}

