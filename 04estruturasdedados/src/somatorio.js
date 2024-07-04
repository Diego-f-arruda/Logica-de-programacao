import leia from "readline-sync"

var nUsuario = []
var soma = 0
for(var i = 0;i < 5; i++){
    nUsuario[i] = leia.questionInt("Digite um valor qualquer: ")
    soma = soma + nUsuario[i]
}
console.log(soma)
console.log("----------------------------------")

/*no for abaixo ja ira percorrer os indices na 
variavel nUsuario e guardar na variavel 
criada(no caso valor)
*/
for(var valor of nUsuario){
    console.log(valor)
}