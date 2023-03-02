let user1 = ['Bob', 200, 25, 'Toronto'];
let userName='Bob', marks = 200, age =25, city ='Toronto';
let user = {
    name:'Bob',
    marks:[200,50,40,28],
    age:25,
    city:'Toronto',
    married:false,
    address: { //nested object
        city:'Toronto',
        country:"Canada",
        pincode:"xxxxx"
    }
};
user1[0]
user.marks[0] //user["marks"][0]
// user.phone = 1234556789;
// user.email'erasqwer'
console.log("user info",user.name,user.marks,user["name"],user.address.city); //user["address"]["city"]

console.log(user);
delete user.address.pincode;
console.log(user);
// datatype objectname = {key1:value1,key2:value2,key3:value3...}

// two ways for accessing object properties:
// 1. dot notation 
// 2. square bracket notation
//
let movie = {};
movie.name="Avatar";
movie.year=2022;

console.log(movie);
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));
for(let key in user){
    console.log(key, user[key]);
}
