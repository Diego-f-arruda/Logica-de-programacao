import leia from "readline-sync"

var nUsuario = []
var M10 = "Os Numeros listados maiores de 10 foram: "
for(var i = 0;i < 15; i++){
    nUsuario[i] = leia.questionInt("Digite um valor qualquer: ")
    if(nUsuario[i] >= 10){
        M10 = M10 + nUsuario[i] + ","
    }
}
M10 = M10.slice(0, -1)
console.log(M10)
