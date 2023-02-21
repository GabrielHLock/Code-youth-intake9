let day2 = 2;
let day3 = 3;
let day4 = 4;
let day5 = 5;
let day6 = 6;
let day7 = 7;
if (day1=1) {
    console.log("Monday");
    if(day2=2){
        console.log("Tuesday");
    }
    if(day3=3){
        console.log("Wednesday");
    }
    if(day4=4){
        console.log("Thursday");
    }
    if(day5=5){
        console.log("Friday");
    }
    if(day6=6){
        console.log("Saturday");
    }
    if(day7=7){
        console.log("Sunday");
    }
}
let totaldaysweek = 7;
let totalweeksmonth = 4;
let totaltotal = totaldaysweek*totalweeksmonth;
if(totaldaysweek = 7){
    console.log("Total days in a month:",totaltotal);
    if(totaltotal==22 || totaltotal==24 || totaltotal==26 || totaltotal==28){
        console.log("The total:",totaltotal,",is an even number");
    } 
    if(totaltotal==23 || totaltotal==25 || totaltotal==27){
        console.log("The total:",totaltotal,"is an odd number");
    } 
    else if (totaltotal>20){
        console.log("...and there are many days in a month");
    }
}
if(totaltotal % 4 === 0){
    console.log("and the total days in a month is divisible by 4");
} if(totaltotal % 3 === 0){
    console.log("and divisible by 3");
} else{
    console.log("and not divisible by 3");
}
