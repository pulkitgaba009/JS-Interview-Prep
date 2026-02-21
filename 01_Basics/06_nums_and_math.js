const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(typeof(balance.toString()));

console.log(balance.toFixed(2));    // to tell kitne number of points chahiye 

const otherNUmber = 23.8966
console.log(otherNUmber.toPrecision(2)); // kitni values chahiye uske according roundoff

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // to format a value according to particular standard




// ********************** DSA Prospective ******************************
// study - [Number] object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MIN_VALUE < 0);


// ************************** MATHS LIB Comes b y default ******************
console.log(Math);
console.log(Math.abs);     // returns possitive values only
console.log(Math.round(99.5));   // returns round of value
console.log(Math.ceil(4.2));  // if more then the number +1
console.log(Math.floor(4.9)); // always take lower value
console.log(Math.sqrt(2));
console.log(Math.min(4,3,6,7));
console.log(Math.max(4,3,6,7));

console.log(Math.floor(Math.random()*6+1));




