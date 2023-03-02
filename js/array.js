let marks1 = 20, marks2 = 30, marks3 = 25, marks4 = 23, marks5 = 10;
let marks = [20,30,25,23,10]
// function - marks()
// array - marks[]
// array always starts at 0,1,2,3,4....
marks[0] //20
marks[4] //10


// array literal method
let data = ['john', 20, 'toronto', true]

let arr = [];
arr[0] = 10;
arr[1] = 20;
arr[4] = 40;
console.log(arr);


// array constructor method
let arr1 = new Array(10,20,30,40,50);
console.log(arr1);

// array size: marks.length
console.log("data array size",data.length);
// last element
data[data.length-1]

// colors 
// display 1st Element 
// 4th Element 
// last Element 
// array size 
// complete array 

let colors = ['red','green','blue','orange','purple','white']
console.log("First element",colors[0],"-","Fourth element:",colors[3]);
console.log("colors array size",colors.length);
console.log("last element", colors[colors.length-1])
console.log("All array elements are:", colors);

// traversing array elements
// 1. simple for loop
for(let j=0;j<colors.length;j++){
    console.log(colors[j]);
}

// for loop using of
for(let ele of colors){
    console.log(ele);
}

// forEach
colors.forEach((item)=>console.log("foreach",item))
