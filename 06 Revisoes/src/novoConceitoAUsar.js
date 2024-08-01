import leia from "readline-sync";
/*var pessoa = {
    nome: "Diego",
    Idade: 36,
    CPF: "000.000.000-00"
}

var pessoa2 = {
    nome: "Joaozinho",
    Idade: 20,
    CPF: "000.000.000-01"
}
*/

/*
var pessoas = [];

for(var i = 0; i < 3; i++){
    var nome = leia.question("Informe o nome: ");
    var idade = leia.questionInt("Informe a idade: ");

    var obj = {
        nome: nome,
        idade: idade
    }
    pessoas.push(obj);
}
console.log(pessoas);*/
var turma = []
var nota = []

for(let index = 0; index < 3; index++ ){
    nota[index] = leia.questionFloat("Digite a nota: ")
}

turma.push({
    nome: nome,
    notas: nota
});

turma.push(aluno);

turma[0].notas.push(5)

console.log(turma[0].notas[1])