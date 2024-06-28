import leia from "readline-sync";

var maiorAltura = 0;
var menorAltura = 0;
var mediaAlturaMulheres = 0;
var mediaAlturaPopulacao = 0;
var porcHomens = 0;

for(var i = 0; i < 5; i++){
    var controle = leia.keyInSelect(["Masculino", "Feminino"])
    var altura = leia.questionFloat("Informe a sua Altura: ")
    if(controle === 0){
        mediaAlturaPopulacao = mediaAlturaPopulacao + altura
        porcHomens++
    }else{
        mediaAlturaMulheres = mediaAlturaMulheres + altura
        mediaAlturaPopulacao = mediaAlturaPopulacao + altura
    }

    if(maiorAltura < altura){
        maiorAltura = altura
    }

    if(menorAltura > altura){
        menorAltura = altura
    }

}

console.log("A Media de altura das mulheres é " + (mediaAlturaMulheres / 10))
console.log("A Media de altura da Populacao é " + (mediaAlturaPopulacao / 10))
console.log("A Maior altura indicada foi " + maiorAltura)
console.log("A Menor altura indicada foi " + menorAltura)
console.log("A porcentagem de Homens na pesquisa foi de: " + (porcHomens / 100))
