import leia from "readline-sync"

var Nota = leia.questionFloat("Informe a nota final do aluno.\n")

if(Nota < 0.0 || Nota > 10.0){
        console.log("Valor de nota invalido")
    }else if(Nota >= 9.0){
        console.log("Voce tirou um A")
    }else if(Nota >= 8.0){
        console.log("Voce tirou um B")
    }else if(Nota >= 7.0){
        console.log("Voce tirou um C")
    }else if(Nota >= 6.0){
        console.log("Voce tirou um D")
    }else {
        console.log("Voce tirou um F")
}