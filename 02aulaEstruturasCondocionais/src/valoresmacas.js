import leia from "readline-sync"

/*As maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou
mais cada uma custa apenas R$0,25. Crie um programa para ler o número de maçãs
que ele vai comprar e informar quanto será o total da compra.
*/

var comp = leia.questionFloat("Quantas macas deseja comprar? ")

if(comp < 12){
    var vt = comp * 0.3
    var VaAr = parseFloat(vt.toFixed(2))
    console.log("O valor fica em R$" + VaAr )
}else{
    var vt = comp * 0.25
    var VaAr = parseFloat(vt.toFixed(2))
    console.log("O Valor fica em R$" + VaAr)
}