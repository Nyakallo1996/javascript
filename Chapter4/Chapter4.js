//Practice exercise 4.1

const test = false;
console.log(test);
if(test){
    console.log("It's True");
}
if(!test){
    console.log("False now");
}

//Practice exercise 4.2

let age = prompt("How old are you?");
age = Number(age);
let message;
if(age >= 21){
    message = "You can enter and drink.";
}else if(age >= 19){
    message = "You can enter but not drink.";
}else{
    message = "You are not allowed in!";
}
console.log(message);

//Practice exercise 4.3

const id = true;
const message = (id) ? "Allowed In" : "Denied Entry";
console.log(message);

//Practice exercise 4.3

const randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let question = prompt("Ask me anything");
switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
        break;
    default:
        answer = "I don't know about that";
}
let output = "You asked me " + question + ". I think that " + answer;
console.log(output);

//Practice exercise 4.5

let prize = prompt("Pick a number 0-10");
prize = Number(prize);
let output = "My Selection: ";
switch (prize){
    case 0: 
        output += "Gold ";
    case 1:
        output += "Coin ";
        break;
    case 2:
        output += "Big ";
    case 3:
        output += "Box of ";
    case 4:
        output += "Silver ";
    case 5:
        output += "Bricks ";
        break;
    default:
        output += "Sorry Try Again";
}
console.log(output);

//Chapter Projects

//Evaluating a number game

let val = prompt("What number?");
val = Number(val);
let num = 100;
let message = "nothing";
if (val > num) {
    message = val + "  was greater than " + num;
} else if (val === num) {
    message = val + "  was equal to " + num;
} else {
    message = val + " is less than " + num;
}
console.log(message);
console.log(message);

//Friend checker game

let person = prompt("Enter a name");
let message;
switch (person) {
    case "John" :
    case "Larry" :
    case "Jane" :
    case "Laurence" :
    message = person + " is my friend";
    break;
    default :
    message = "I don't know " + person;
}
console.log(message);

//Rock Paper Scissors game

const myArr = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " "; 
if (player === computer) { 
    message += "it's a tie"; 
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        message += "Computer Wins"; 
    } else { 
        message += "Player Wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        message += "Player Wins"; 
    } else { 
        message += "Computer Wins"; 
    } 
} 
console.log(message);