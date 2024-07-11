import { preencherVetor } from "./exemplos.js";

export function dado(){
    var jogadas = preencherVetor(1000, 1, 7);
    var qtdLados = [0, 0, 0, 0, 0, 0, 0];
    var porCT = [];
    
    for(var i = 0;i < jogadas.length; i++){
        qtdLados[jogadas[i]]++;
    }

    for(var i = 1;i < qtdLados.length; i++){
        porCT[i] = 100 / jogadas.length * qtdLados[i]
    }

    for(var i = 1; i < porCT.length; i++){
        if(porCT[i] > 22){
            console.log("Dado esta Viciado")
        }
    }

console.table(porCT)
}

dado();