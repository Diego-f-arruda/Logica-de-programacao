import leia from "readline-sync"

var Nome = leia.question("Informe o seu Nome: ")
var Salario = leia.questionFloat("Informe o salario Fixo: ")
var DEP = leia.questionInt("Informe quantos dependentes possui: ")

switch(DEP){
    case 0:
        var SalC = Salario + (Salario * 0.02)
        console.log("Seu salario ficara R$" + SalC.toFixed(2))
        break;
    case 1:
        var SalC = Salario + (Salario *  0.05)
        console.log("Seu salario ficara R$" + SalC.toFixed(2))
        break;
    case 2:
        var SalC = Salario + (Salario * 0.07)
        console.log("Seu salario ficara R$" + SalC.toFixed(2))
        break;
    case 3:
        var SalC = Salario + (Salario * 0.1)
        console.log("Seu salario ficara R$" + SalC.toFixed(2))
        break;
    default:
        var SalC = Salario + (Salario * 0.15)
        console.log("Seu salario ficara R$" + SalC.toFixed(2))
        break;
}