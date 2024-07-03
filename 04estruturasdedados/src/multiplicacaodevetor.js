import leia from "readline-sync"

var numerosUsuario = []

var i = 0

while(i < 10){
    numerosUsuario[i] = leia.question("Digite um valor qualquer: ")
    
    //multiplicados.push(numerosUsuario * 5)
    
    /*for(var j = 0;j < 10; j++){
        multiplicados[j] = numerosUsuario[i] * 5
        i++
    }*/

    i++
}
var multiplicados = []

for(var j = 0;j < 10; j++){
    multiplicados[j] = numerosUsuario[i] * 5
    
}

console.log(numerosUsuario)
console.log("------------------------------------")
console.log(multiplicados)
