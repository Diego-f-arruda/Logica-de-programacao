import leia from "readline-sync"



var numerosUsuario = []
var multiplicados = []

for(var i = 0;i < 10; i++){
    numerosUsuario[i] = leia.questionInt("Digite um valor qualquer: ")
    //numerosUsuario[i] = parseInt(Math.randon() * 10)
    multiplicados.push(numerosUsuario[i] * 5)
}
/*

for(var i = 0;i < numerosUsuario.length; i++){
    multiplicados[i] = numerosUsuario[i] * 5
    
}
*/


console.log(numerosUsuario)
console.log("------------------------------------")
console.log(multiplicados)
