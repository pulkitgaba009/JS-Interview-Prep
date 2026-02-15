// Boolean → Number
let isActive = false;          // boolean value
let numBool = Number(isActive); // type casting boolean to number
console.log("Boolean to Number:", numBool);        // 0
console.log(typeof numBool);                       // number

// String → Number
let score = "92";              // string value
let numScore = Number(score);  // type casting string to number
console.log("String to Number:", numScore);        // 92
console.log(typeof numScore);                       // number

// Invalid String → Number
let text = "92abc";            // invalid numeric string
let numText = Number(text);    // conversion fails
console.log("Invalid String to Number:", numText); // NaN
console.log(typeof numText);                       // number

// Null → Number
let empty = null;              // null value
let numNull = Number(empty);   // type casting null to number
console.log("Null to Number:", numNull);           // 0
console.log(typeof numNull);                       // number

// Undefined → Number
let notDefined = undefined;    // undefined value
let numUndefined = Number(notDefined); // conversion fails
console.log("Undefined to Number:", numUndefined); // NaN
console.log(typeof numUndefined);                   // number
