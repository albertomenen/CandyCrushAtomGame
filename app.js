document.addEventListener ("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid")
  const width=8
  const squares = []
  let score = 0

const candyColors = [

  "red",
  "yellow",
  "orange",
  "purple",
  "green",
  "blue"
]

// Crear la tabla

function createBoard() {
  for( let i= 0; i < width*width; i++) {
    const square = document.createElement("div")
    // Esta es la función que tenemos para hacer para que los div sean deslizables
    square.setAttribute("draggable", true)
    // en esta función le damos un id al div que estamos moviendo de 0 a 63
    square.setAttribute("id", i)
    let randomColor = Math.floor (Math.random() * candyColors.length)
    square.style.backgroundColor = candyColors[randomColor]
    grid.appendChild(square)
    squares.push(square)
  }
}
createBoard()


// como mover los dulces

let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIdBeingReplaced

squares.forEach(square => square.addEventListener("dragstart", dragStart))
squares.forEach(square => square.addEventListener("dragend", dragEnd))
squares.forEach(square => square.addEventListener("dragover", dragOver))
squares.forEach(square => square.addEventListener("dragenter", dragEnter))
squares.forEach(square => square.addEventListener("dragleave", dragLeave))
squares.forEach(square => square.addEventListener("drop", dragDrop))

function dragStart () {
  colorBeingDragged = this.style.backgroundColor
  squareIdBeingDragged = parseInt(this.ad)
  console.log(colorBeingDragged)
  console.log (this.id, "dragstart")
}



function dragOver(e) {
  e.preventDefault()
console.log (this.id, "dragover")
}

function dragEnter (e) {
  e.preventDefault()
console.log(this.id, "dragenter")
}

function dragLeave () {
console.log(this.id, "dragleave")
}

function dragDrop () {
console.log (this.id, "dragdrop")
colorBeingReplaced = this.style.backgroundColor
squareIdBeingReplaced = parseInt(this.id)
this.style.backgroundColor = colorBeingDragged
squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced;
}

function dragEnd () {
console.log (this.id, "dragend")
//Movimientos validos
let vaslidMoves = [
squareIdBeingDragged -1,
squareIdBeingDragged -width,
squareIdBeingDragged +1,
squareIdBeingDragged +width

]

let validMove = validMoves.includes(squareIdBeingReplaced)

if (squareIdBeingReplaced && validMove) {
  squareIdBeingReplaced = null
} else if ( squareIdBeingReplaced && !validMove) {
  squares [ squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
  squares [ squareIdBeingDragged].style.backgroundColor = colorBeingDragged
} else squares [squareIdBeingDragged].style.backgroundColor
}

//Checking for matches


function checkRowForThree() {
  for (i=0; i< 61; i++) {
    let rowOfThree = [i,i+1,i+2]
    let decideColor = squares[i].style.backgroundColor
    const isBlank = squares[i].style.backgroundColor === ""

    if (rowOfThree.every(index=> squares[index].style.backgroundColor === decidedColor && !isBlack)) {
      score +=3
      rowOfThree.forEach( index => {
        squares[index].style.backgroundColor = ""
      })
    }
  }
}
  checkRowForThree()






})
