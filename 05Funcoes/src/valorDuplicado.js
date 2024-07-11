import { preencherVetor } from "./exemplos.js";
import { verificaDuplicidade } from "./exemplos.js";

export function duplicado(){
    var vetor = preencherVetor(10, 0, 50);

    var temDuplicidade = verificaDuplicidade(vetor);
    console.log(vetor)
    if(temDuplicidade){
        console.log("Tem Duplicado")
    }else {
        console.log("Não tem Duplicado")
    }
}