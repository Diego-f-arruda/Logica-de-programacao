import leia from "readline-sync"

var n = leia.questionInt("Digite um numero inteiro: ")

if(n % 2 == 0){
    console.log("É Par.")
}else{
    console.log("É Impar")
}