import { obterItensVetor } from "./exemplos.js";
import { preencherVetor } from "./exemplos.js";

export function terco(){
var v1 = preencherVetor(9, 0, 100);
var v2 = preencherVetor(9, 0, 100);
var v3 = preencherVetor(9, 0, 100);
var VResultado = []

VResultado = obterItensVetor(v1, VResultado, 0, 2);
VResultado = obterItensVetor(v2, VResultado, 3, 5);
VResultado = obterItensVetor(v3, VResultado, 6, 8);

/*
for(var i= 0; i < v1.length; i++){
    if(i >= 0 && i <= 2){
        VResultado[i] = v1[i];
    }else if(i >= 3 && i <= 5){
        VResultado[i] = v2[i];
    }else if(i >= 6 && i <= 8){
        VResultado[i] = v3[i];
}
}*/

console.log(v1)
console.log(v2)
console.log(v3)
console.log(VResultado)
}