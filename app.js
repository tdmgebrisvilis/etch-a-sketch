const { log, dir } = console
const grid = document.querySelector('#grid');
const gridWidth = grid.clientWidth;
const gridSizeRangeInput = document.querySelector('#gridSizeRangeInput');
const gridSizeIndex = document.querySelector('.gridSizeIndex');
const squareColorInput = document.querySelector('#squareColorInput')
const eraser = document.querySelector("#eraser");
const clearButton = document.querySelector("#clearButton")
let color = document.querySelector('#squareColorInput').value
let colorBeforeErasing = document.querySelector('#squareColorInput').value
let squares = grid.childNodes

makeNewGrid(); // make initial grid

// Settings:
gridSizeRangeInput.addEventListener('input', makeNewGrid, ); // change grid size
squareColorInput.addEventListener('input', () => {
    color = squareColorInput.value
    colorBeforeErasing = color;
}) 
eraser.addEventListener('click', changeToEraserColor)
squareColorInput.addEventListener('click', () => color = colorBeforeErasing)


function makeNewGrid(){
    grid.replaceChildren(); // remove previous squares
    for (let i = 0; i < gridSizeRangeInput.value * gridSizeRangeInput.value ; i++){
        const square = document.createElement('div');
        const squareSize = gridSizeRangeInput.value;
        gridSizeIndex.innerText = `${squareSize}x${squareSize}`;
        square.classList.add('square', 'nonDrag');
        grid.appendChild(square);
        grid.setAttribute('style', `grid-template-columns: repeat(${squareSize}, ${gridWidth / squareSize}px);`);
    }
    gridSizeIndex.innerText = `${gridSizeRangeInput.value}x${gridSizeRangeInput.value}`; // display current grid size
    squares = grid.childNodes
    squares.forEach(square => square.addEventListener('mousedown', draw)) // outside this function this wont work properly 
}

function draw(e){
    changeSquareColor(e)
    squares.forEach(square => square.addEventListener('mouseenter', changeSquareColor))
    window.addEventListener('mouseup', () => {
        squares.forEach(square => square.removeEventListener('mouseenter', changeSquareColor))
    })
}

function changeSquareColor (e) {
    e.target.style.background = color
}

function changeToEraserColor () {
    color = '#ffedd8'
}
