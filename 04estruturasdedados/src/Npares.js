import leia from "readline-sync"

var nUsuario = []
var pares = "Os Numeros pares sao: "

for(var i = 0;i < 10; i++){
    nUsuario[i] = leia.questionInt("Digite um valor qualquer: ")
    if(nUsuario[i] % 2 === 0){
        pares = pares + nUsuario[i] + ","
    }
}
pares = pares.slice(0, -1)
console.log(pares)

//Outra opçao 
/*
var Pares = []

for(var i = 0; i < nUsuario.length; i++){
    if(nUsuario[i] %2 === 0){
        Pares.push(nUsuario[i])
    }
}
*/