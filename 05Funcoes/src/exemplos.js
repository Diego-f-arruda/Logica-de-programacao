import leia from "readline-sync"

//PARA EXPORTAR A FUNÇÃO EM OUTRO ARQUIVO USAR A PROXIMA LINHA
//import nomeDaFuncao from exemplos.js

export default function mostrar(){
    var nome = leia.question("Digite um nome: ")
    console.log("Ola, " + nome)
}


export default function somar(num1, num2){
    var num1 = leia.questionInt("Digite o Numero: ");
    var num2 = leia.questionInt("Digite o Numero: ");
    var result = num1 + num2;
    console.log("O Resultado e: " + result);
}

export default function subtrair(num1, num2){
    var result = num1 - num2;
    console.log("O Resultado e: " + result);
}

export default function multi(num1, num2){
    var result = num1 * num2;
    return result;
}

export default function preencherVetor(tamanhoVetor, min, max){
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

preencherVetor(10, 50, 200)





somar();
subtrair(10,5)
var Resultado = multi(5,5)
console.log(Resultado)
mostrar();
