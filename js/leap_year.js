let leapyear = (year) => {if((0==year%4)&&(0!=year%100)||(0==year%400)){return year+ ' is a leapyear';} return year + ' is not a leap year';}
year = 2023;
console.log(leapyear(year))
year = 2024;
console.log(leapyear(year))
