//  push- insert an element at the end of an array
let arr = [10,5,20,14,65,32];
arr.push(22);
console.log("push:",arr);

//pop- remove elements from end
let delelement = arr.pop();
console.log("pop arr", arr);
console.log("deleted element", delelement);

//unshift- insert element at the beginning of an array
arr.unshift(18);
console.log("unshift:",arr);

//shift- delete element from beginning of an array
let ele = arr.shift();
console.log("shift:",arr);

//slice- select part of an array excluding last index - slice(startindex,endindex)
// let slicedArr = arr.slice(2); //take out elements starting from index 2 to end
let slicedArr = arr.slice(2,5); //take out elements from index 2 to index 4
console.log("slice",slicedArr);
console.log("original array:",arr);

//splice- insert,remove,replace array elements from any position
//splice(start_index,count_to_delete,add_ele1,add_ele2...)
//\
//splice for removing
let spliceArr = arr.splice(1,3);
console.log("splice remove", spliceArr);
console.log("original array:",arr);

//splice for adding
spliceArr = arr.splice(1,0,66,77);
console.log("splice add", arr);

//splice for replacing
spliceArr = arr.splice(1,2,-3,-5);
console.log("original array", arr);

//reverse
let revArray = arr.reverse();
console.log("reverse", revArray);

//sort
let sortArr = arr.sort();
console.log("sort",sortArr);

let arr2 = [23,34,12,5,66,61,160,53];
// sortArr = arr2.sort(function (a,b){
//     return a-b; // a=initially the first element minus the next, if it returns negative then it is sorted
// });
sortArr = arr2.sort((a,b)=> a-b)
console.log("sort",sortArr);

let arr3 = ['red','green','blue','gray','black'];
sortArr = arr3.sort();
console.log("sort",sortArr);

for(let i=0;i<arr2.length;i++){
    arr2[i] += 2;
}
console.log("arr after adding 2", arr2);

let newArr = [];
arr2.forEach((item) => newArr.push(item+2));
console.log("foreach",newArr);

// for(ele of arr2){
//     console.log(ele);
// }
// 
// map method
// let arrMap = arr2.map((item)=>item*2)
// let arrMap = arr2.map(multiply);
// function multiply(a){
//     return a*2;
// }
let arrMap = arr2.map(function(item){
    return item*2;
})
console.log("map",arrMap);

// callback function - when a function is passed as a parameter to another function
//
// Ex: find square of each element of array using map method
//
let sqnum = [10,4,20,100,56,90];
let sqmap = sqnum.map(item=>item*item) // item represents each element
console.log("square root map", sqmap);

let str = "john";
console.log("uppercase", str.toUpperCase());

//filter - select elements which satisfy a particular condition
let arrFilter = arr2.filter((ele)=>ele>20);
console.log("filtered array", arrFilter);

let arrNegative = [-40,5,8,44,-9,-74,32,10]
let negativeFilter = arrNegative.filter((ele)=>ele<0);
console.log("Negative filter",negativeFilter);

// chaining of methods
newArr = arr2.map((item)=> item/2)
    .filter((item)=> item<25)
console.log("arr before", arr2);
console.log("new array map and filter", newArr);

// reduce method
//
// sum of marks
let marks = [10,20,25,30,34];
let newAr = marks.findIndex((ele)=>ele==10)
console.log("check",newAr);
// let sum = 0;
// for(i=0;i<marks.length;i++){
//     sum += marks[i];
// }
let sum = marks.reduce((acc,current)=> acc+current, 0)
console.log(`sum: ${sum}`);

//ex: find sum of positive numbers in an array of positive and negative numbers
//ex: find the product of odd elements in an array
//
let arrPosum = [10,-10,8,93,-9,5,40];
let posum = arrPosum.filter((item)=> item>0)
    .reduce((acc,current)=> acc+current, 0)

console.log(`posum: ${posum}`);

let arrOdd = [10,10,8,93,9,5,40];
let Oddsum = arrOdd.filter((item)=> item % 3 === 0)
    .reduce((acc,current)=> acc+current, 0)
console.log(`Oddsum: ${Oddsum}`);

//join
const string=["this","is","a","Javascript","class"];
let newstr = string.join(',');
console.log(newstr);
console.log(newstr.split(','));
