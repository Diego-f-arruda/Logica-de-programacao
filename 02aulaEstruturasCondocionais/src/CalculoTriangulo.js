import leia from "readline-sync"
var L1 = leia.questionInt("informe o valor do lado 1 de seu triangulo: ")
var L2 = leia.questionInt("informe o valor do lado 2 de seu triangulo: ")
var L3 = leia.questionInt("informe o valor do lado 3 de seu triangulo: ")

if(L1 < (L2 + L3) && L2 < (L1 + L3) && L3 < (L1 + L2)){
    if(L1 === L2 && L2 === L3 && L1 === L3){
        console.log("Equilatero")
    }else if(L1 !== L2 && L2 !== L3 && L1 !== L3){
        console.log("Escaleno")
    }else{
        console.log("Isosceles")
    }

}else{
    console.log("Valores Invalidos")
}
