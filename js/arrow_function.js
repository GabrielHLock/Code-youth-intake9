// function display(){
//     console.log("Hi Bob");
// }
// function displayName(name){
//     console.log(`Hello ${name}`);
// }
// function add(a,b){
//     let c = a + b;
//     console.log("sum is", c);
// }
//
// //arrow functions syntax- alternative for definining functions in a concise way
// let function_name = (arg1,arg2...) => {
//     //statements
// }

//curly brackets only required when there are multiple lines of code
let display = () => { console.log("Alex");}
let displayName = (name) => console.log(`hi ${name}`);
display();
displayName('John');

let add = (a,b) => { return a+b; }
let sub = (a,b) => a-b; 
let cube = (a) => {return a*a*a;}
let greater = (a,b) => { if(a>b){ return a;}  return b }
console.log(add(4,5));
console.log(sub(10,4));
console.log(cube(5));
console.log(greater(5,10));
