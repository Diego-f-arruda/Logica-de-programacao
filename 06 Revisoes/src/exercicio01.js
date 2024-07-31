import leia from "readline-sync";

var numero = [];
for(var i = 0; i < 3; i++){
    numero[i] = leia.questionInt(`Informe um numero ` + (i + 1) + ": ");
}

var numeroOrdenado = numero.sort(); //numero.sort() faz a ordenação evitando muitos if else, tanto para numeros quanto String

console.log(numeroOrdenado);

/*var num1 = leia.questionInt(`Informe o numero 1: `);
var num2 = leia.questionInt(`Informe o numero 2: `);
var num3 = leia.questionInt(`Informe o numero 3: `);

if(num1 < num2 && num2 < num3){
    console.log(num1, num2, num3);
}else if(num1 < num3 && num3 < num2){
    console.log(num1, num3, num2);
}else if(num2 < num1 && num1 < num3){
    console.log(num2, num1, num3);
}else if(num2 < num3 && num3 < num1){
    console.log(num2, num3, num1);
}else if(num3 < num1 && num1 < num2){
    console.log(num3, num1, num2);
}else {
    console.log(num3, num2, num1);
}*/

// outra forma
/*
var aux;
if(num1 > num2){
    aux = num1;
    num1 = num2; 
    num2 = aux;
}
if(num2 > num3){
    aux = num2;
    num2 = num3; 
    num3 = aux;
}
if(num3 > num1){
    aux = num3;
    num3 = num1; 
    num1 = aux;
}*/