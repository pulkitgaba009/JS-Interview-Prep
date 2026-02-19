// Declare a string 
const gameName =  new String("Pulkit-Gaba");

console.log(gameName[0]);
console.log(gameName.__proto__); // to see all functions

// Functions on strings
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('l'));

const gameNameNew = gameName.substring(0,4)
console.log(gameNameNew);

const another = gameName.slice(-8,5)
console.log(another);

const name = "         Pulkit      ";
console.log(name.trim())

const namef = gameName.replace("-"," ")
console.log(namef);

console.log(gameName.includes("Gaba"));

const anotherOne = "Pulkit Parv Pototo"
console.log(anotherOne.split(" "));
