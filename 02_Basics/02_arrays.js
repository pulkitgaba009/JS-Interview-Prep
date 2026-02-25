const marvel_heros = ["thor","ironman","captain america","spiderman"];
const dc = ["superman","batman","flash","jocker"];

const allHeroes=marvel_heros.concat(dc); // concat always throws an new array
console.log(allHeroes);

// spread operator
const output = [...marvel_heros, ...dc]
console.log(output)

// to get single line array
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherArr.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Pulkit"));
console.log(Array.from("Pulkit"));
console.log(Array.from({name:"Pulkit"}));


let score1 = 100
let score2 = 300 
let score3 = 400
console.log(Array.of(score1,score2,score3));