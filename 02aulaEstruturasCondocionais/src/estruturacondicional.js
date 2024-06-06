//IF/ELSE
import leia from "readline-sync"

/*var numero = 1;

if(numero > 0){
    console.log("Positivo")
}else if(numero < 0){
    console.log("Numero negativo")
}else{
    console.log("O numero é zero")
}*/

/*var x = 10
if(x < 100){
    console.log("Menor que cem");
}else if (x < 1000){
    console.log("Menor que mil");
}*/


/*
var n = leia.question("informe um numero de 1 a 5: ");
switch(n){
    case 1:

        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    case 5:

        break;
    
    default:

        break;
}*/

var codigoErro = leia.question("Digite o Codigo de erro");
switch(codigoErro){
    case 400:
    case 401:
    case 404:
        console.log("HTTP code error aplicação")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE ERROR APLICAÇÃO")
        break;
    default:
        console.log("NÃO É ERRO")
        break;
}