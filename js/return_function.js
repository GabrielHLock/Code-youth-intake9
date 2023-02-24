//=== 5*5

function square(num){
    let res = num*num;
    console.log("cube of a number:" +res);
    if(res % 2 === 0){
         return true ;
    }
//else not required since the prior return will stop the function
    return false
}

console.log(square (5));
