// If making using constructor (Singleton) - apne tarike ak eak hi object
// Object.create()

// Onject Literals

const mySym = Symbol("key1")

const user = {
    id : mySym,
    name:"Pulkit",
    age:"21",
    location:"Rudrapur",
    email:"pulkitgaba009@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday","Wednesday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(typeof user.id);

user.name = "raju";

console.log(user);
// Object.freeze(user); // no changes possible after using this 

user.greetings = function (){
    console.log("hi");
}

// this keyword is used to access function2
user.function2 = function (){
    console.log(`Hi, ${this.name}`);
}

console.log(user.greetings)
console.log(user.function2())

