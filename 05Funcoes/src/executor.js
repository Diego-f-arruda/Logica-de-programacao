import leia from 'readline-sync'
import { terco} from './tercoFinal.js';
import { duplicado } from './valorDuplicado.js';
import { antiImpar } from './antiImpar.js';
import { matrizMaior } from './matriz8x8.js';
import { dado } from './dadoViciado.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 03", "Exercicio 04", "Exercicio 05"]) + 1;

switch(opcao){
    case 1: 
        terco();
        break;
    case 2: 
    duplicado();
        break;
    case 3:
        antiImpar();
        break;
    case 4:
        matrizMaior();
        break;
    case 5:
        dado();
        break;
    }
