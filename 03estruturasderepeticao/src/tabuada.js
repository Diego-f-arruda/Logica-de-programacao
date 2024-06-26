import leia from "readline-sync"

var op = leia.questionInt("Informe o valor que deseja sua tabuada: ")

for(var i = 1;i <= 10;i++){
    console.log(i + " X " + op + " = " + i * op)
    
}