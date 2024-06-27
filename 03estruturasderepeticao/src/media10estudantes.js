import leia from "readline-sync"
var estudante;
var media = 0;

for(var i = 0;i < 3; i++){
    estudante = leia.question("Digite o nome do estudante: ");
    var aux = 0;
    for(var j = 1;j <= 3; j++){
        var nota = leia.questionFloat("Digite o valor da nota: ");
        aux = nota + aux;
        var media1 = aux / 3;    
        if(media1 > media){
            var melhorestudante = estudante
            media = media1
            
        }
    }
}

console.log("O melhor estudante foi " + estudante + " com a nota media de " + media)