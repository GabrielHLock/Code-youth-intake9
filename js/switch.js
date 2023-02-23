let day=4;
// if(day==1){
//     console.log("Monday");
// }
// if(day==2){
//     console.log("Tuesday");
// }
// if(day==3){
//     console.log("Wednesday");
// }
// if(day==4){
//     console.log("Thursday");
// }
// if(day==5){
//     console.log("Friday");
// }
// if(day==6){
//     console.log("Saturday");
// }
// if(day==7){
//     console.log("Sunday");
// }
let op = '-'
switch(day){
    case 1: text = "Monday";
        break;
    case 2: text = "Tuesday";
        break;
    case 3: text = "Wednesday";
        break;
    case 4: text = "Thursday";
        break;
    case 5: text = "Friday";
        break;
    case 6: text = "Saturday";
        break;
    case 7: text = "Sunday";
        break;
    default: text = "Tuesday";
}
console.log("Today is",text);
