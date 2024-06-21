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
console.log("----------------------------------------------------------------------")
/*
var nota = L.questionFloat("Digite a nota: ")
while(nota < 0.0 || nota > 10.0){
    console.log("Nota invalida")
    nota = L.questionFloat("Digite a nota novamente: ")
}
console.log("Nota valida:")*/

//TABUADA
/*
var num = L.questionInt("Digite um numero")

var multi = 0 
while(multi <= 10){
    console.log(multi + " X " + num + " = " + (multi * num))
    multi++
}
*/

//ACRESCENTANDO UM NUMERO

/*
var j = 0;
while(j < 10){
    console.log("Valor de J = " + j);
    j++;
}


for(var i = 0; i < 10; i++){
    console.log("Valor de I = " + i);

}*/

// TABUADA COM FOR
/*
var num = L.questionInt("Digite um numero")
for(vari i = 0; i <= 10; i++){
    var resultado = i * Numberconsole.log(num + " X " + + " = " + resultado)
}*/


/*
var j = 0
do{
    console.log(j)
    j++
}while(j < 10)*/

//CONTAGEM DE PASSOS
var N1 = L.questionInt("digite o primeiro numero")
var N2 = L.questionInt("digite o segundo numero")
var passo = L.questionInt("Numero de passos")

for(var i = N1; i <= N2; i += passo){
    console.log(i)
}

/*
while(N1 <= N2){
    console.log(N1)
    N1 += passo
}*/
