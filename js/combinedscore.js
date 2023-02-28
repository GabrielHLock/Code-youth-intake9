let score1 = [10,14,13,20];
let score2 = [11,45,92,33];
let combinedscore = [];
combinedscore.push(score1,score2)
console.log(`combinedscore = ` +combinedscore)

let sc1 = [0,5,12,7,9];
let sc2 = [7,34,6,2,7];
let comsc = [];
for (i=0;i<sc1.length;i++){
    comsc[i] = sc1[i]+sc2[i];
}
console.log(comsc);

