import leia from "readline-sync"

var Salario = leia.questionFloat("Informe o salario Fixo: ")
var DEP = leia.questionInt("Informe quantos dependentes possui: ")

switch(DEP){
    case 0:
        var SalC = Salario + 0.02
        console.log("Seu salario ficara R$" + SalC)
        break;
    case 1:
        var SalC = Salario + 0.05
        console.log("Seu salario ficara R$" + SalC)
        break;
    case 2:
        var SalC = Salario + 0.07
        console.log("Seu salario ficara R$" + SalC)
        break;
    case 3:
        var SalC = Salario + 0.1
        console.log("Seu salario ficara R$" + SalC)
        break;
    default:
        var SalC = Salario + 0.15
        console.log("Seu salario ficara R$" + SalC)
        break;
}