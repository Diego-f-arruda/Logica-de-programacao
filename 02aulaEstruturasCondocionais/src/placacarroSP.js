import leia from "readline-sync"
/*Faça um algoritmo que leia o último número da placa do carro e mostre o dia em que ele
não pode rodar pela cidade de São Paulo.
a) Final 0 e 1: não pode rodar na segunda-feira;
b) Final 2 e 3: não pode rodar na terça-feira;
c) Final 4 e 5: não pode rodar na quarta-feira;
d) Final 6 e 7: não pode rodar na quinta-feira;
e) Final 8 e 9: não pode rodar na sexta-feira;*/

var placa = leia.question("Informe a placa do carro: ")
var UD = placa.charAt(placa.length - 1)

if(UD === 0 || 1){
    console.log("Não pode rodar na Segunda-Feira")
}else if(UD === 2 || 3){
    console.log("Não pode rodar na Terça-Feira")
}else if(UD === 4 || 5){
    console.log("Não pode rodar na Quarta-Feira")
}else if(UD === 6 || 7){
    console.log("Não pode rodar na Quinta-Feira")
}else{
    console.log("Não pode rodar na Sexta-Feira")
}
