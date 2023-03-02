let student = {
    id:"xxxxx",
    name:"Terry",
    address:{
        city:"Toronto",
        country:"Canada",
        pincode:"xxxxxx",
    },
    email:"TerryD@something.com",
    phone:53534354,
    marks:[100,10,40,90],
    course:"Literature",
    hobbies:['Basketball', 'Weightlifting', 'Coding']
};

// console.log(`Student Information: ID: ${student.id}, NAME: ${student.name}, ADDRESS: ${student.address.city}, EMAIL: ${student.email}, PHONE NUMBER: ${student.phone}, MARKS: ${student.marks[0]}, COURSE: ${student.course}, HOBBIES: ${student.hobbies[0]}`);

// for(let key in student){
//     console.log(key,student[key]);
// }

let count = 0;
for(let key in student){
    count++;
}
console.log(`Number of properties: ${count}`);
