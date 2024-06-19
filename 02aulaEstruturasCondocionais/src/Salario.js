import leia from "readline-sync"
console.log("----------------------------------------------")
var QH = leia.questionFloat("Quantas horas foram trabalhadas? ")
var VH = leia.questionFloat("Qual o valor da hora de trabalho? ")
var pd = leia.questionFloat("Qual o Percentual de desconto a ser aplicado? ")
console.log("----------------------------------------------")

var PD = pd/100
var TB = QH * VH  
var VD = TB * PD
var VL = TB - VD

var form = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

console.log("----------------------------------------------")
console.log("O Salario bruto é: " + form.format(TB))
console.log("O Desconto total fica: " + form.format(VD))
console.log("O Salario Liquido fica: " + form.format(VL))