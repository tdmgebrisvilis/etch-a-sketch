const grid = document.querySelector('#grid');
const gridWidth = grid.clientWidth;
const gridSizeRangeInput = document.querySelector('#gridSizeRangeInput');
const gridSizeIndex = document.querySelector('.gridSizeIndex');
gridSizeIndex.innerText = `${gridSizeRangeInput.value}x${gridSizeRangeInput.value}`; // display current (default) grid size
const squareColorInput = document.querySelector('#squareColorInput')
let color = document.querySelector('#squareColorInput').value

generateSquares(); // make initial grid
const squares = document.querySelectorAll('.square');

// Settings:
gridSizeRangeInput.addEventListener('input', makeNewGrid); // change grid size
squareColorInput.addEventListener('input', () => color = squareColorInput.value) // change color

// Drawing:
squares.forEach(square => square.addEventListener('mousedown', changeSquareColor))


function changeSquareColor(e){
    e.target.style.background = color
    squares.forEach(square => square.addEventListener('mouseover', (e) => e.target.style.background = color))
}

function makeNewGrid(){
    grid.replaceChildren(); // remove previous squares
    generateSquares();
}

function generateSquares(){
    for (let i = 0; i < gridSizeRangeInput.value * gridSizeRangeInput.value ; i++){
        const square = document.createElement('div');
        const squareSize = gridSizeRangeInput.value;
        gridSizeIndex.innerText = `${squareSize}x${squareSize}`;
        square.classList.add('square');
        grid.appendChild(square);
        grid.setAttribute('style', `grid-template-columns: repeat(${squareSize}, ${gridWidth / squareSize}px);`);
    }
}