// arrays : array indexing
const myArr = [1,2,3,4,5];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[0],"\n\n");

// A shallow copy of an object is a copy whose properties share same reference (address). Change in coppy results in change in original array.
console.log(myArr);
const arr2 = myArr;
arr2[2] = 5 ;
console.log(myArr,"\n\n");

// Array Methods
const methodAray = [1,2,3,4,5];
console.log(methodAray,"\n");

// to add value at the end
methodAray.push(6);
console.log(methodAray);

// to delete at the end
console.log(methodAray.pop())

// to add value at begining
methodAray.unshift(20)
console.log(methodAray)

// to delete at begining
methodAray.shift()
console.log(methodAray);

// Question in the array method
console.log(methodAray.includes(5)); // tells is present or not
console.log(methodAray.indexOf(4)); // tells index of value in array

const newArr = methodAray.join()
console.log(typeof newArr);
console.log(typeof methodAray);

// slice , splice
console.log("A",methodAray);
const myn1 = methodAray.slice(1,3); // returns particular part of array
console.log("B",myn1);

const myn2 = methodAray.splice(1,3); // alters the original array from one point to other
console.log("C",myn2);
console.log(myn2);
