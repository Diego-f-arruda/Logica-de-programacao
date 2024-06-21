import leia from "readline-sync"

    var maior = 0
    var menor = 0
for(var i = 0; i <= 4; i++){
    var num = leia.questionInt("Informe um numero: ")
    if(num > maior){
        maior = num
        console.log(maior)
        }
    if(num < maior){
        menor = num
        console.log(menor)
    }
} 

