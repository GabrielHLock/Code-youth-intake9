let user = {
    id:1,
    name:'Bob',
    // display: function(){return "Hello ob"}
    display: function(){console.log("Hello", this.name)},
    displayName: function(name){console.log(name)}
}
console.log(user.id, user.name);
user.display();
user.displayName('Alex');
user.gender="male";
// console.log(`user${user}`)
