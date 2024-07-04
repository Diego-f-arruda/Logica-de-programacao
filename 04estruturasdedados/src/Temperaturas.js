
var Tmin = [];
var Tmax = [];
var tmax;
for(var i = 1;i <= 30; i++){
    var tmin = parseInt(Math.random() * 23) + 12;
    do{
        tmax = parseInt(Math.random() * 23) + 12;
    }while(tmax === tmin)
    if(tmin < tmax){
        Tmin.push(tmin);
        Tmax.push(tmax);
    }else{
        Tmax.push(tmin);
        Tmin.push(tmax);
    }
};
for(var i = 1; i <= 30; i++){
    console.log("DIA " + i + ": Maxima: " + Tmax[i] + " Minima: " + Tmin[i]);
}

/*
console.log(Tmin)
console.log("------------------------------------------------------")
console.log(Tmax)*/