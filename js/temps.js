function randomtemp(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var x = randomtemp(-100, 100);
if (x > 9 && x < 21){
    console.log("It is warm outside at", x, "degrees celsius");
}
if (x>20 && x < 40){
    console.log("It is hot outside at", x, "degrees celsius");
}
if (x>39 && x < 61){
    console.log("It is burning outside at", x, "degrees celsius");
}
if (x>60 && x < 101){
    console.log("DANGER, it is severely hot outside at", x, "degrees celsius!");
}
if (x<10 && x>-1){
     console.log("It is mild outside at", x, "degrees celsius");
}
if (x<0 && x>-21){
    console.log("It is chilly outside at", x, "degrees celsius");
}
if (x<-20 && x>-41){
    console.log("It is freezing outside at", x, "degrees celsius");
}
if (x<-40 && x>-61){
    console.log("It is brutal outside at", x, "degrees celsius");
}
if (x<-60 && x>-101){
    console.log("DANGER, it is brutally freezing outside at", x, "degrees celsius!");
}
