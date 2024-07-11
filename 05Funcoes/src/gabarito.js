import leia from "readline-sync"
/*Você é um professor e está criando um algoritmo para 
fazer a correção das provas de maneira automática 
para você. Primeiro, crie um vetor chamado gabarito 
com 10 posições e preencha manualmente com as 
letras das respostas. Depois, solicite, qual é
as respostas do aluno. Por fim, verifique quantas 
estão corretas e gere a nota.
*/

export function prova(){
    var gabarito = [];
    var respostaAluno = [];
    var nota = 0;


    for(var i = 0;i < 10; i++){
        gabarito[i] = leia.question("Informe a resposta para o gabarito da questao " +(i + 1) + " ");

    }
    
    console.log("Informe suas respostas: ");

    for(var i = 0;i < 10; i++){
        respostaAluno[i] = leia.question("Informe a resposta da questao: " +(i + 1) + " ");

    }
    
    for(var i = 0; i < gabarito.length; i++){
        if(gabarito[i] === respostaAluno[i]){
            nota++;
        }
    }
    
    console.table(gabarito);
    console.table(respostaAluno);
    console.log(nota)
}

prova();