import leia from "readline-sync"

var mes = leia.questionInt("Informe o mes, sendo Janeiro(1) a Dezembro(12): ")

if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log("O mes informado tem 31 Dias.")
}else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
    console.log("O mes informado tem 30 Dias.")
}else if(mes == 2){
    console.log("O mes informado tem 28/29 Dias.")
}else{
    console.log("Mes Invalido")
}
