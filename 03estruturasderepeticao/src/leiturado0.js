import leia from "readline-sync"


var cont = 0
do{
    var num = leia.questionInt("Digite um numero: ")
    if(num > 100 && num < 200){
        cont++
    }
}while(num !== 0)

console.log("Foram digitados " + cont + " entre 100 e 200")