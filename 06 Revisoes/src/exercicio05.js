const Tentativas = 1000000
var index = 0;
var verde = 0, vermelho = 0, preto = 0;

while(index < Tentativas){
    var valorSort = parseInt(Math.random() * 37);
    if(valorSort === 0){
        verde++
    }else if(valorSort % 2 == 0){
        preto++
    }else{
        vermelho++
    }
    index++
}
var vermPorcent = (vermelho / Tentativas) * 100;
var verdPorcent = (verde / Tentativas) * 100;
var pretoPorcent = (preto / Tentativas) * 100;
console.log("------------------------------------------------------------------------------------------------------")
if(verdPorcent > 40 || vermPorcent > 40 || pretoPorcent > 40){
    console.log("Pode estar viciada!!")
}else{
    console.log("Não à dado viciado!!")
}
console.log(`A porcentagem de verde foi ${verdPorcent}%, de vermelho foi ${vermPorcent}% e preto ${pretoPorcent}%. `)
console.log("------------------------------------------------------------------------------------------------------")
