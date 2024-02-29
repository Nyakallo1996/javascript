
//Practice excercise 2.1

let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);//string
console.log(typeof str2);//string
console.log(typeof val1);//undifined
console.log(typeof val2);//object
console.log(typeof myNum);//number

//Practice exercise 2.2
let name = prompt("what is your Name?");
let age = prompt("whats your age?");
let code = confirm("can you code in Javascript or not");

console.log(`Hello, my name is ${name}, I'm ${age} years old and I can code Javascript: ${code}`);

//Practice excercise 2.3

let adjacent = prompt("What is you adjacent number?");
let opposite = prompt("What is you opposite number?");
let hypotenuse = prompt("What is your hypoyenus number?");

let adjacentAndOppositeHypotenuse = Math.sqrt((adjacent ** 2 + opposite ** 2) - hypotenuse ** 2);

console.log(adjacentAndOppositeHypotenuse);

//Practice excercise 2.4

let a = 10;
let b = 4;
let c = 8;

a = a + b;
a = a / c;
c = c % b;

console.log(a);
console.log(b);
console.log(c);

let miles = prompt("please enter your distance?");
const number =  1.609344;

let milesToKiloMeters = miles * number;

console.log(`the distance of ${milesToKiloMeters} kms is equal to ${miles} miles`);

//BMI Calculator

let height = prompt("What is your height?");
let weight = prompt("what is your weight?");

let heightInch = height * 2.54;
let weightKilos = weight /  2.2046;

let results = weightKilos / heightInch;


console.log(`BMI: ${results}`);
