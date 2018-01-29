var canvasSpace = document.querySelector('.blankCanvas')
var body = document.querySelector('body')
var masterColor = 'white'
var colorSelection = [
  "red",
  "blue",
  "green",
  "white",
  "black",
  "yellow",
  "purple"
]

function createCanvas() {
  for (let i = 0; i < 50; i++) {
    var rowDiv = document.createElement("div")
    rowDiv.className = 'divs'
    canvasSpace.appendChild(rowDiv)
    rowDiv.className = 'rowDivs'
    for (var j = 0; j < 30; j++) {
      var blankDiv = document.createElement("div")
      blankDiv.className = 'column'
      blankDiv.addEventListener('click', changeColor)
      blankDiv.addEventListener("mouseover", changeColor)
      blankDiv.addEventListener("dragover", changeColor)
      rowDiv.appendChild(blankDiv)
      canvasSpace.style.display = 'flex'
      canvasSpace.style.flexWrap = "wrap"

    }
  }
}

function createPalette() {
  var footer = document.createElement("footer")
  body.appendChild(footer)
  for (let i = 0; i < colorSelection.length; i++) {
    let colorChoice = document.querySelector("footer")
    var div = document.createElement("div")
    div.id = colorSelection[i]
    div.className = "individualColor"
    div.addEventListener('click', changeColor)
    colorChoice.appendChild(div)
  }
}

function changeColor(event) {
  let buttonClicked = event.target.className
  if (buttonClicked == 'individualColor') {
    masterColor = event.target.id
  }
  if (event.type === "mouseover" && event.buttons === 0) {
    return
    event.target.style.backgroundColor = masterColor
  }
  if (buttonClicked == 'column') {
    event.target.style.backgroundColor = masterColor
  }
}

createCanvas()
createPalette()
