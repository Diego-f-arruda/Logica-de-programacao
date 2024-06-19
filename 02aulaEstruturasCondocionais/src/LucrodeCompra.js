import leia from "readline-sync"

var VC = leia.questionFloat("Qual o valor da compra?\n")

var form = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

if(VC < 20){
    var ValorCorrigido = VC + (VC * 0.45)
}else{
    var ValorCorrigido = VC + (VC * 0.30)
}
console.log("O valor de compra fica " + form.format(ValorCorrigido))