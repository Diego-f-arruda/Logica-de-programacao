var joaozinho = 1.40
var valentina = 1.50
var cont = 0
while(joaozinho <= valentina){
    joaozinho = joaozinho + 0.03 
    valentina = valentina + 0.02 
    cont++
}

console.log("Valentina " + valentina.toFixed(2))
console.log("Joaozinho " + joaozinho.toFixed(2))
console.log("Em " + cont + " anos o Joaozinho passou a Valentina")