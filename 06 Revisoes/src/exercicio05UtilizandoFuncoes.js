const Tentativas = 1000000
var index = 0;
var verde = 0, vermelho = 0, preto = 0;

function selecionaContador(valor){
    valor === 0 ? verde++ : valor % 2 === 0 ? preto++ : vermelho++ //Utilizando operador ternario
}

while(index < Tentativas){
    var valorSort = parseInt(Math.random() * 37);
    selecionaContador(valorSort);
    index++
}
function calcPorc(qtdCaiu){
   return (qtdCaiu / Tentativas) * 100;
}


var vermPorcent = calcPorc(vermelho);
var verdPorcent = calcPorc(verde);
var pretoPorcent = calcPorc(preto);

var verdeEsperado = (1/37) *100;
var outraEsperado = (18/37) *100;

console.log("                                                                                                       ");
if(verdPorcent > (verdeEsperado * 2) || vermPorcent > (outraEsperado * 1.2) || pretoPorcent > (outraEsperado * 1.2)){
    console.log("Pode estar viciada!!")
}else{
    console.log("Não à dado viciado!!")
}
console.log(`A porcentagem de verde foi ${verdPorcent}%, de vermelho foi ${vermPorcent}% e preto ${pretoPorcent}%. `);
console.log("                                                                                                       ");
