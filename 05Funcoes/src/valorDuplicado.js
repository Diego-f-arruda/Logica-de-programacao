function preencherVetor(tamanhoVetor, min, max){
    var vetor = [];
    for(var i =0; i < tamanhoVetor; i++){
       do{
        var numeroGerado = parseInt(Math.random() * (max - min)) + min
        for(var j =0; j < vetor.length;j++){
            if(vetor[j] === numeroGerado){
                jaGerou = true
            }
        }
    }while(jaGerou)
       vetor[i] = numeroGerado;
    
    }

    return vetor;
}

preencherVetor(10, 50, 200)