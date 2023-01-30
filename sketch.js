let button
let operador1 = 0
let operador2 = 0
let operacion = " "
let resultado = 0
let longitud = 0
let imagen

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}


function setup() {
    imagen = loadImage("shrek.jpg")
  createCanvas(400, 400)
  button = createButton("make a calculation")
  button.position(19, 19)
  button.mousePressed(mouseClick)
}

function mouseClick() {
  background(imagen)

  operador1 = prompt("Operador 1")
  longitud = operador1.length
  operador2 = prompt("Operador 2")
  if (operador2.length > longitud) longitud = operador2.length
  operacion = prompt("Operacion + - * /")

  stroke(255, 255, 255)
  fill(255, 255, 255)
  textSize(32)
  text(operador1, 50, 100)
  text(operador2, 50, 150)
  text(operacion, 20, 125)
  text(longitud, 20, 300)
  if (operacion === "+") resultado = float(operador1) + float(operador2)
  if (operacion === "-") resultado = float(operador1) - float(operador2)
  if (operacion === "*") resultado = float(operador1) * float(operador2)
  if (operacion === "/") resultado = float(operador1) / float(operador2)

  if (str(resultado).length > longitud) longitud = str(resultado).length

  text(resultado, 50, 200)
  text(longitud, 20, 300)

  line(50, 165, 50 + longitud * 20, 165)
}