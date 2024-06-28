import leia from "readline-sync";

var resto;
var binario = ""
var decimal = leia.questionInt("Informe o Numero Decimal: ");

while(decimal >= 1){
    var result = parseInt(decimal / 2);
    resto = decimal % 2;
    decimal = result;
   if(resto === 0){
        binario = "0" + binario
    }else{
        binario = "1" + binario
    }
    
    
}
console.log(binario);