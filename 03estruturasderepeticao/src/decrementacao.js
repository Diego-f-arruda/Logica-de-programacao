import leia from "readline-sync"

var valor = leia.questionInt("Digite apartir de quanto quer contar:\n")
var i = 0
while(i <= valor){
    console.log(valor)
    valor--
}