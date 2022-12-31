const grid = document.querySelector('#grid');
const gridWidth = grid.style.width;
const gridSizeRangeInput = document.querySelector('#gridSizeRangeInput');
generateSquares() // initial grid

gridSizeRangeInput.addEventListener('input', makeNewGrid)

function makeNewGrid(e){
    grid.replaceChildren(); // remove previous squares
    generateSquares()
}

function generateSquares(){
    for (let i = 0; i < gridSizeRangeInput.value * gridSizeRangeInput.value ; i++){
        const square = document.createElement('div')
        const squareSize = gridSizeRangeInput.value
        square.classList.add('square')
        grid.appendChild(square);
        grid.setAttribute('style', `grid-template-columns: repeat(${squareSize}, ${700 / squareSize}px);`)
    }
}