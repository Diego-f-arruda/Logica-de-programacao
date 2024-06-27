import leia from "readline-sync";

    var fib = leia.questionInt("Digite ate qual sequencia seguir: ");
    var anterior = 0;
    var atual = 1;
    var soma;
    var result = "0 - 1";
for(var i = 2;i < fib; i++){
    soma = anterior + atual;
    anterior = atual
    atual = soma
    result = result + " - " + soma;    
}
console.log(result);
