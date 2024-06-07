import leia from"readline-sync"
/*Escreva um algoritmo que leia o nome de dois clientes de uma loja e o valor (em reais)
que cada um desses clientes pagou por sua compra. O algoritmo deverá escrever: (a) o
valor total pago pelos dois clientes; (b) o valor médio das compras efetuadas; (c) os
nomes dos clientes que efetuaram compras superiores a 20 reais.
*/
var c1 = leia.question("Informe o Nome do cliente: ")
var v1 = leia.questionFloat("Informe o valor pago pelo cliente: ")
var c2 = leia.question("Informe o Nome do Cliente: ")
var v2 = leia.questionFloat("Informe o valor pago pelo cliente: ")
var tt = v1 + v2
var tta = parseFloat(tt.toFixed(2))
console.log("O valor total Recebido foi de: R$" + tta)
console.log("O valor medio de compra foi de: " + (tta / 2))

if(v1 > 20){
    console.log(c1 + " Gastou mais do que R$20.00")
}

if(v2 > 20){
    console.log(c2 + " Gastou mais do que R$20.00")
}

