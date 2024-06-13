import leia from "readline-sync"

console.log("-----------------------------------")
console.log("--Para doar R$10 Digite 1        --")
console.log("--Para doar R$25 Digite 2        --")
console.log("--Para doar R$50 Digite 3        --")
console.log("--Para doar outro valor Digite 4 --")
console.log("-----------------------------------")
var OP = leia.questionInt("DIgite a opcao: ")

switch(OP){
    case 1:
        console.log("--------------------------------------")
        console.log("Sua doacao foi de R$10. Muito Obrigado")
        console.log("--------------------------------------")
        break;
    case 2:
        console.log("--------------------------------------")
        console.log("Sua doacao foi de R$25. Muito Obrigado")
        console.log("--------------------------------------")
        break;
    case 3:
        console.log("--------------------------------------")
        console.log("Sua doacao foi de R$50. Muito Obrigado")
        console.log("--------------------------------------")
        break;
    default:
        var formatador = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency:"BRL"
        })

        console.log("-----------------------------------------------")
        var OV = leia.questionFloat("qual o valor gostaria de doar: ")
        console.log("-----------------------------------------------")
        console.log("Sua doacao foi de: R$" + formatador.format(OV) +" Muito Obrigado")
        break;
}
