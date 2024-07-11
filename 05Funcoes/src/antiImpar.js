import leia from "readline-sync"

export function antiImpar(){
var solicitados = []

for(var i = 0;i < 4; i++){
    var nUsuario = leia.questionInt("Informe um Numero Par: ")
    while(nUsuario % 2 !== 0){
        console.log("Valor Nao Aceitavel. Informe novamente: ")
        nUsuario = leia.questionInt("Informe um Numero Par: ")
    }
        solicitados[i] = nUsuario
    }

console.log("-----------------------------------")
console.log(solicitados)
console.log("-----------------------------------")

}
antiImpar()