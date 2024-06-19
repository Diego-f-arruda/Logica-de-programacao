import leia from "readline-sync"

var n1 = leia.questionFloat("Informe a primeira nota: ")
var p1 = leia.questionFloat("Qual o peso dessa Nota? ")
var n2 = leia.questionFloat("Informe a segunda nota: ")
var p2 = leia.questionFloat("Qual o peso dessa Nota? ")
var n3 = leia.questionFloat("Informe a terceira nota: ")
var p3 = leia.questionFloat("Qual o peso dessa Nota? ")

var MPon = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)

console.log("A media ponderada de sua nota é " + MPon)