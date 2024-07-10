import leia from "readline-sync"

var solicitados = []

for(var i = 0;i < 4; i++){
    var nUsuario = leia.questionInt("Informe um Numero Par: ")
    if(nUsuario % 2 !== 0){
        console.log("Valor Nao Aceitavel. Informe novamente: ")
    }else{
        solicitados[i] = nUsuario
    }
}


console.log("-----------------------------------")
console.log(solicitados)
console.log("-----------------------------------")