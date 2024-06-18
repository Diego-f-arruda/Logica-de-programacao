import leia from "readline-sync"

var idade = leia.questionInt("Informe sua idade ")

if(idade <18){
    var Permissao = leia.question("Seus Pais permitiram a viagem? \n 1 - SIM\n 2 - Nao ")
    if(Permissao ==="1"){
        var nome = leia.question("Informe seu nome ")
        console.log("Voce pode viajar tranquilo " + nome)
    }else if (Permissao === "2"){
        console.log("Nao tem permissao para viajar")
    }else{
        console.log("Opcao Invalida")
    }
}else {
    var nome = leia.question("Informe seu Nome ")
    console.log("Voce pode viajar tranquilo " + nome)
}