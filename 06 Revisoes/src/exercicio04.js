import leia from "readline-sync";

var palavra = leia.question("Digite a palavra ou o texto");
var palavraInvertida = [];
for(var i = palavra.length -1; i >= 0; i--){
    palavraInvertida.push(palavra[i])

}
palavraInvertida.join().replaceAll(",", "")