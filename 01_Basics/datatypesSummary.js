// JS is Dynamically typed language 

//  Premitive Datatypes : 7 types
// Uses call by value : real address of data is not passed instead coppied value is passed
// String, Number, Boolean, Null, Undefined, Symbol(to make a value unique symbol is used), BigInt
const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2); // false : as makes value unique though value is same


// Non Premetive Datatypes : 
// Uses call by reference : means real address is passed and operations have direct impact on original data stored
// Arrays, Objects, Functions



// ---------------- Memory Collection in JS ---------------------
// Stack(used by Premetive datatypes), Heep(used by Non premetive datatype)
