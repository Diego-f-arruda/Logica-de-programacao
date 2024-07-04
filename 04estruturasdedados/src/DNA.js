
var pai = []
var mae = []
var filho = []

for(var i = 0;i < 50;i++){
    pai.push(parseInt(Math.random() * 100))
    mae.push(parseInt(Math.random() * 100))
    if(i % 2 ===0){
        filho.push(pai[i])
    }else{
        filho.push(mae[i])
    }
}
console.log("DNA Pai" + pai)
console.log("----------------------------------------------------------------------------------")
console.log("DNA filho" + filho)
console.log("----------------------------------------------------------------------------------")
console.log("DNA mae" + mae)


