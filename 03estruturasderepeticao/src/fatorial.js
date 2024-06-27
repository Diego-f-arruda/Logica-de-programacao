import leia from "readline-sync"

var valor = leia.questionInt("Deseja o fatorial de qual valor? ")
var resultado = 1
var aux = valor
while(valor > 0){
    resultado = resultado * valor
    valor--
}
console.log("Fatorial de " + aux + " e: " + resultado)