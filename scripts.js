const display = document.getElementById("display")
const reset = document.getElementById("clear")
const suma = document.getElementById("add")
const resta = document.getElementById("subtract")
const decimal = document.getElementById("decimal")
const multiplicacion = document.getElementById("multiply")
const division = document.getElementById("divide")
const igual = document.getElementById("equals")
const uno = document.getElementById("one")
const dos = document.getElementById("two")
const tres = document.getElementById("three")
const cuatro = document.getElementById("four")
const cinco = document.getElementById("five")
const seis = document.getElementById("six")
const siete = document.getElementById("seven")
const ocho = document.getElementById("eight")
const nueve = document.getElementById("nine")
const cero = document.getElementById("zero")

cero.onclick = (e) => {
    display.innerText += "0"
}

uno.onclick = (e) => {
    display.innerText += "1"
}

dos.onclick = (e) => {
    display.innerText += "2"
}

tres.onclick = (e) => {
    display.innerText += "3"
}

cuatro.onclick = (e) => {
    display.innerText += "4"
}

cinco.onclick = (e) => {
    display.innerText += "5"
}

seis.onclick = (e) => {
    display.innerText += "6"
}

siete.onclick = (e) => {
    display.innerText += "7"
}

ocho.onclick = (e) => {
    display.innerText += "8"
}

nueve.onclick = (e) => {
    display.innerText += "9"
}

reset.onclick = (e) => {
    display.innerText = ""
}

decimal.onclick = (e) => {
    display.innerText += "."
}
