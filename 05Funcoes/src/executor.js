import leia from 'readline-sync'
import { terco} from './tercoFinal.js';
import { valorDuplicado } from './valorDuplicado.js';
import { antiImpar } from './antiImpar.js';
import { matrizMaior } from './matriz8x8.js';
import { dado } from './dadoViciado.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02", "Exercicio 3", "Exercicio 4", "Exercicio 5"]) + 1;

switch(opcao){
    case 1: 
        terco();
        break;
    case 2: 
        valorDuplicado();
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
