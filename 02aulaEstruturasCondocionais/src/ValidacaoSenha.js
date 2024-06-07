import leia from "readline-sync"

const senha = 1234
var SUsu = leia.questionInt("Informe sua Senha de 4 Digitos: ")
if(SUsu === senha){
    console.log("Acesso Permitido")
}else{
    console.log("Acesso Negado")
}