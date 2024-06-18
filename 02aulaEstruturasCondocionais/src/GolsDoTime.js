import leia from "readline-sync"

var T1 = leia.questionInt("Informe a quantidade de Gols do Primeiro time ")
var T2 = leia.questionInt("Informe a quantidade de Gols do Segundo time ")

var QG = Math.abs(T1 - T2) //Função (Math) usa uma espressao matematica e (abs) retira o sinal de negativo caso o valor fique negativo. 

switch(QG){
    case 0:
        console.log("O jogo Empatou")
        break;
    case 1:
    case 2:
    case 3:
        console.log("Partida Normal")
        break;
    default:
        console.log("Goleada")
        break;
}