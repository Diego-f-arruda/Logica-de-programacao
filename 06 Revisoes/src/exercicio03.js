import leia from "readline-sync";
console.log("Informe de qual para qual unidade de medida deseja converter.");
var opcao = leia.keyInSelect(["Celsius => Fahrenheit", "Fahrenheit => Celsius", " Celsius => Kelvin", "Kelvin => Celsius", "Fahrenheit => Kelvin", "Kelvin => Fahrenheit" ]) + 1;
var uMedida2;

function opcaoTemperatura(){
    var uMedida1 = leia.questionFloat("Informe a temperatura: ");
       return uMedida1
}
switch(opcao){
    case 1:
        uMedida2 = (opcaoTemperatura() * 1.8) + 32;
        console.log(uMedida2);
    break;
    case 2:
         uMedida2 = (opcaoTemperatura() - 32) * (5/9);
         console.log(uMedida2);
    break;
    case 3:
        uMedida2 = opcaoTemperatura() + 273.15;
        console.log(uMedida2);
    break;
    case 4:
        uMedida2 = opcaoTemperatura() - 273.15;
        console.log(uMedida2);
    break;
    case 5:
        uMedida2 = (opcaoTemperatura() - 32) * (5/9) + 273.15;
        console.log(uMedida2);
    break;
    case 6:
        uMedida2 = (opcaoTemperatura() - 273.15) * 1.8 + 32;
        console.log(uMedida2);
    break;
    
}