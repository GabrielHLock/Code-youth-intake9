let score = [10,12,45,23,34];
for(let i=0;i<score.length;i++){
    //only displaying an addition to the array elements
    console.log(score[i]+2);
    //actually adding to the array elements
    score[i] = score[i] + 2;
}
console.log(score);
