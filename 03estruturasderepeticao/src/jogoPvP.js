import leia from "readline-sync";
var contador = 0
var numeroMagico;
var opcaojogo = leia.keyInSelect(["Deseja PvP", "Deseja contra a maquina"]);

if(opcaojogo === 0){
    numeroMagico = leia.questionInt("Digite o Numero Magico: ", {hideEchoBack: true});

}else if(opcaojogo === 1){
    var dificuldade = leia.keyInSelect(["Facil", "Medio", "Dificil"]);
    switch(dificuldade){
        case 0:
            numeroMagico = parseInt(Math.random() * 100);
            
            break;
        case 1:
            numeroMagico = parseInt(Math.random() * 10000);
            
            break;
        case 2:
            numeroMagico = parseInt(Math.random() * 100000);
            
            break;
    }
do{
    var numero = leia.questionInt("Tenta a sorte: ")
    contador++

    if(numero < numeroMagico){
        console.log("Tente Novamente, e maior")
    }else if(numero > numeroMagico){
        console.log("Tente Novamente, e menor")
    }else{
        console.log("Boa. Esta correto")
    }
}while(numero !== numeroMagico)


}

console.log("Voce tentou: " + contador)