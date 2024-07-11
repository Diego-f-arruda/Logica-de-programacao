
export function matrizMaior(){
var matrizMaior = [[]]
var maiorDeDez = []
for(var i = 0;i < 8; i++){
    matrizMaior[i] = []
    for(var j = 0;j < 8; j++){
        matrizMaior[i][j] = parseInt(Math.random() * 100)
        if(matrizMaior[i][j] > 10){
            maiorDeDez.push(matrizMaior[i][j])
        }
    }
}

console.table(matrizMaior)
console.log("Sao maiores de dez os valores: " + maiorDeDez)

}
matrizMaior()