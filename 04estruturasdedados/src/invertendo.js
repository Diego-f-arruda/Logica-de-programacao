var valor = []
var inv = []

for(var i = 0; i < 10; i++){
    valor.push(parseInt(Math.random() * 100))
}

for(var i = 9; i >= 0; i--){
    inv.push(valor[i]) 
}
console.log(valor)
valor = inv
console.log("---------------------------------------")
console.log(valor)



/*
console.log(valor)

console.log(inv)
*/

// MODO CORRETO

/*
for(var i = 0; i < 10; i++){
    valor.push(parseInt(Math.random() * 100))
}
console.log(valor)

var inicio = 0
var fim = valor.length -1
while(inicio < fim){
    var aux = valor[inicio]
    valor[inicio] = valor[fim]
    valor[fim] = aux
    inicio ++
    fim--
}
console.log(valor)*/