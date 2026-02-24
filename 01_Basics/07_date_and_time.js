// Dates
let myDate = new Date();
console.log(myDate.toString()); // Tue Feb 24 2026 21:27:02 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString()); // 24/2/2026
console.log(myDate.toDateString()); // Tue Feb 24 2026

console.log(typeof myDate); // object

let myCreatedDate =  new Date(2023,0,23) ;
let myCreatedDate2 =  new Date("2023-01-14") ;

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());

// This will give time in miliseconds
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round (Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());