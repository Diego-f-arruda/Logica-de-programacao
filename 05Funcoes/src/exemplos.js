import leia from "readline-sync"

//PARA EXPORTAR A FUNÇÃO EM OUTRO ARQUIVO USAR A PROXIMA LINHA
//import nomeDaFuncao from exemplos.js

export default function mostrar(){
    var nome = leia.question("Digite um nome: ")
    console.log("Ola, " + nome)
}


export function somar(num1, num2){
    var num1 = leia.questionInt("Digite o Numero: ");
    var num2 = leia.questionInt("Digite o Numero: ");
    var result = num1 + num2;
    console.log("O Resultado e: " + result);
}

export function subtrair(num1, num2){
    var result = num1 - num2;
    console.log("O Resultado e: " + result);
}

export function multi(num1, num2){
    var result = num1 * num2;
    return result;
}

export function preVetSemRepetir(tamanhoVetor, min, max){
    var vetor = [];
    for(var i =0; i < tamanhoVetor; i++){
       do{
        var numeroGerado = parseInt(Math.random() * (max - min)) + min
        for(var j =0; j < vetor.length;j++){
            if(vetor[j] === numeroGerado){
                jaGerou = true
            }
        }
    }while(jaGerou)
       vetor[i] = numeroGerado;
    
    }

    return vetor;
}


export function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min;;
    }

    return vetor;
}


export function obterItensVetor(vetor, VResultado, min, max){
    for(var i = min; i <= max; i++){
        VResultado[i] = vetor[i];
    }
    return VResultado;
}

export function verificaDuplicidade(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        for (var j = i; j < vetor.length; j++) {
            if (j !== i && vetor[i] === vetor[i]) {
                return true;
            }
        }
    }
    return false;
}