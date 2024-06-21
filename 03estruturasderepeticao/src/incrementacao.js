import leia from "readline-sync"

var valor = leia.questionInt("Digite ate quanto quer contar:\n")
var i = 0
while(i <= valor){
    console.log(i)
    i++
}
console.log("------------------------------------")
i = 0
while(i <= valor){
    console.log(valor)
    valor--
}