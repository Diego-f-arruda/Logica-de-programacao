import leia from"readline-sync"


/*Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de
um cofrinho que contenha:
a) N moedas de 1 real;
b) N moedas de 50 centavos;
c) N moedas de 25 centavos;
d) N moedas de 10 centavos;
e) N moedas de 5 centavos;
O programa deverá verificar se o total de reais que contém no cofrinho é o bastante
para compra o produto X.
*/
var v1 = leia.questionFloat("quantas moedas de R$1.00 tem? ")
var V1 = v1
var v2 = leia.questionFloat("quantas moedas de R$0.50 tem? ")
var V2 = v2 * 0.5
var v3 = leia.questionFloat("quantas moedas de R$0.25 tem? ")
var V3 = v3 * 0.25
var v4 = leia.questionFloat("quantas moedas de R$0.10 tem? ")
var V4 = v4 * 0.10
var v5 = leia.questionFloat("quantas moedas de R$0.05 tem? ")
var V5 = v5 * 0.05
var VTT = V1 + V2 + V3 + V4 + V5

var valorP = leia.questionFloat("Qual o valor do produto desejado? ")
var FLT = valorP - VTT
if(valorP > VTT){
        console.log("ainda faltam R$" + FLT + " para conseguir!")
}