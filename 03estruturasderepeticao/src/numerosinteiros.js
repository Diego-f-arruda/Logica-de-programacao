import leia from "readline-sync"

    var maior 
    var menor 
for(var i = 0; i < 15; i++){
    var num = leia.questionInt("Informe um numero: ")
    if(i === 0){
        maior = num
        menor = num
    }
    
    if(num > maior){
        maior = num
        }
    if(num < menor){
        menor = num

    }
} 
console.log("O maior valor é " + maior)
console.log("O menor valor é " + menor)
