import leia from "readline-sync";
var time = []; //vetor para usar Orientação a Objeto
var melhorJogador;
var melhorPontuacao;

for (var i = 0; i < 11; i++) {
    var nomeJogador = leia.question("Qual o nome do jogador? ");
    var qtdGols = leia.questionInt("Informe a quantidade de gols: ");
    var qtdPasseCert = leia.questionInt("Informe a quantidade de passes certos: ");
    var qtdPasseErrados = leia.questionInt("Informe a quantidade de passes Errados: ");

    var pontos = (qtdGols * 50) + (qtdPasseCert * 10) + (qtdPasseErrados * -5);

    //Abaixo tem a utilização da orienção a objeto para salvar a informação do time inteiro
    var obj = ({
        nome: nomeJogador,
        Gols: qtdGols,
        PassesCertos: qtdPasseCert,
        PassesErrados: qtdPasseErrados,
        Pontos: pontos
    })
    time.push(obj);


    if (pontos < 50) {
        console.log(`${nomeJogador} Fez uma pessima partida`);
    } else if (pontos >= 50 && pontos < 100) {
        console.log(`${nomeJogador} Fez uma partida ruim`);
    } else if (pontos >= 100 && pontos < 150) {
        console.log(`${nomeJogador} Fez o basico`);
    } else if (pontos >= 150 && pontos < 200) {
        console.log(`${nomeJogador} Fez uma boa partida`);
    } else {
        console.log(`${nomeJogador} Jogou demais`);
    }

    if (!melhorPontuacao || pontos > melhorPontuacao) {
        melhorJogador = nomeJogador;
        melhorPontuacao = pontos;
    }
}
console.log(time);
console.log(`${melhorJogador} foi o melhor jogador com ${melhorPontuacao} pontos`);