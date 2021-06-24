const statusS = document.querySelector('.status');
const reset = document.querySelector ('.reset');
const cellBOX = document.querySelectorAll('.box')


//game variables
let GameIsCurrent = true;
let xTurned = true;

//event handlers
const handleReset = (e) => {
    console.log(e);
};

const handleBoxClick = (e) => {
    console.log(e);
};
if (xTurned) {
    console.log(e.target);
}

//event listeners

reset.addEventListener("click", handleReset);

for (let i = 0; i < cellBOX.length; i++) {
    cellBOX[i].addEventListener("click", handleBoxClick);
  }
