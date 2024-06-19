import leia from "readline-sync"
var ano = leia.questionInt("Informe o Ano: ")
if((ano % 4 === 0 && ano % 100 !== 0 ) || (ano % 400 === 0 )){
    console.log("Ano Bissexto")
}else{
    console.log("Nao e Bissexto")
}