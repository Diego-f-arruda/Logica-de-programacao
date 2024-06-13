import leia from "readline-sync"

var SL = leia.questionFloat("Informe o Salario: ")
var LParc = SL * 0.30
var EMP = leia.questionFloat("Qual o valor de emprestimo? ") 
var Parc = leia.questionInt("Em quantas parcelas deseja Fazer? ")
var ParcF = EMP / Parc

var formatador = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

var exemploTernario = (ParcF > LParc) ? "Excede o Limite permitido:" : "O valor de seu emprestimo ficara em: " + formatador.format(ParcF) + " por mes."
console.log(exemploTernario)

//console.log((ParcF > LParc) ? "Excede o Limite permitido:" : "O valor de seu emprestimo ficara em: " + formatador.format(ParcF) + " por mes.")
//Exemplo do ternario em apenas uma linha

/*
if(ParcF > LParc){
    console.log("Excede o Limite permitido:")
}else{
    console.log("O valor de seu emprestimo ficara em: " + formatador.format(ParcF) + " por mes.")
}*/