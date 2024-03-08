//Practice exercise 6.1

function add (num1, num2) {
    return (num1 + num2);    //Create a function that takes two parameters, adds the parameters together and returns the result
}

let number1 = 20;  //Setup up two different variables with two different values
let number2 = 40;

console.log(add(number1, number2));//Use your function on the two variables and output the results using console.log

console.log(add(10, 5));//Create a second call to the function using two more numbers as arguments sent to the function

//Practice exercise 6.2

let descriptiveWords = ["kindly", "sincerely", "terribly", "happy", "pleasing", "tremendously"];//Create an array of drscriptive words

function myWords () {//Creat a function that contains a prompt asking the user for a name
    let UserName = prompt("Please enter name").toLowerCase();//Create a function that contain a prompt aking the user for a name
    let randowWord = descriptiveWords[Math.floor(Math.random() * descriptiveWords.length)];//Select a random value from the array using Math.random
    console.log(UserName + " " + randowWord);//Output into the console the prompt value and the randomly selected array value
}

myWords();//Invoke the function

//Practice exercise 6.3

let digitOne = 50;//variables containing numbers
let digitTwo = 10;
let operator = "-";//Setup up a variable to hold an operator

function calculate (a, b, c) { //my function
    if (b == "-") {
        console.log(a - c);
    } else {
        console.log(a + c);
    }
}

calculate(digitOne, operator, digitTwo);//console my function*/

//Practice exercise 6.4

let values = [];

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Practice exercise 6.5

let numberString = "1000";//Create a variable value with let and assgn a string value of 1000

(function (){     //Create an IIFE function and within this function scope assign a new value to the variable of the same name
  let numberString = 200;
  console.log(numberString);// print in the console 
})();

console.log(numberString);// print in the console 

let result = (function () { //anonymous function with a let variable
    let car = "Corolla";
    return car; //returning the variable
})();
console.log(result);//prinng the result in the console
console.log(car);

(function (car) {
    console.log(`the car i drive is a ${car}`);//invoking the function
})("Corolla");