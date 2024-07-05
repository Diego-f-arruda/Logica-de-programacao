import leia from "readline-sync"

function mostrar(){
    var nome = leia.question("Digite um nome: ")
    console.log("Ola, " + nome)
}


function somar(num1, num2){
    var num1 = leia.questionInt("Digite o Numero: ");
    var num2 = leia.questionInt("Digite o Numero: ");
    var result = num1 + num2;
    console.log("O Resultado e: " + result);
}

function subtrair(num1, num2){
    var result = num1 - num2;
    console.log("O Resultado e: " + result);
}

function multi(num1, num2){
    var result = num1 * num2;
    return result;
}


somar();
subtrair(10,5)
var Resultado = multi(5,5)
console.log(Resultado)
mostrar();
