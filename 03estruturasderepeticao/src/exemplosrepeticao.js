import L from "readline-sync"
/*var num = 0;

while(num < 10 ){
   
    console.log("hello word: " + num);
    num++;
}
*/
console.log("----------------------------------------------------------------------")
/*
var carregando = true; 
var porc = 0;

while(carregando){
    console.log(porc + "% CARREGANDO...")

    if(porc < 100){
        porc += 5;
    }else{
        carregando = false;
    }
}
*/
var nota = L.questionFloat("Digite a nota: ")
while(nota < 0.0 || nota > 10.0){
    console.log("Nota invalida")
    nota = L.questionFloat("Digite a nota novamente: ")
}