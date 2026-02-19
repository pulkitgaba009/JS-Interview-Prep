// // Boolean → Number
// let isActive = false;          // boolean value
// let numBool = Number(isActive); // type casting boolean to number
// console.log("Boolean to Number:", numBool);        // 0
// console.log(typeof numBool);                       // number

// // String → Number
// let score = "92";              // string value
// let numScore = Number(score);  // type casting string to number
// console.log("String to Number:", numScore);        // 92
// console.log(typeof numScore);  // number

// // "33" => 33
// // "33abc" => NaN
// // true => 1; false => 0

// // 1 = true
// // "" = false
// // "pulkit" => true

// // Invalid String → Number
// let text = "92abc";            // invalid numeric string
// let numText = Number(text);    // conversion fails
// console.log("Invalid String to Number:", numText); // NaN
// console.log(typeof numText);                       // number

// // Null → Number
// let empty = null;              // null value
// let numNull = Number(empty);   // type casting null to number
// console.log("Null to Number:", numNull);           // 0
// console.log(typeof numNull);                       // number

// // Undefined → Number
// let notDefined = undefined;    // undefined value
// let numUndefined = Number(notDefined); // conversion fails
// console.log("Undefined to Number:", numUndefined); // NaN
// console.log(typeof numUndefined);                   // number



// // *************** Operations ***************
// let value = 3;
// let negValue = -value;

// console.log("Negetive Value : ",negValue);

// // joining strings
// let str1 = "hello";
// let str2 = " Pulkit";
// let str3 = str1 + str2;
// console.log(str3);

// // String to Numaric Type conversion
// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");

// trickey conevrsions
console.log("Trickey conversions");
console.log(+true);
console.log(+"");

let num1 , num2 , num3
num1 = num2 = num3 = 2+2

console.log(num1," ",num2," "," ",num3);
