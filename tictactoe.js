document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.block')
    console.log(squares)

        
        for(let i = 0; i<squares.length; i++){
            squares[i].addEventListener('click', clickOn)
        }

    function clickOn() {
        alert("hello");
    }
})