//Chapter 5

//Practice exercise 5.1

const maxNumber = 5;//Max number

let randomNumber = Math.floor(Math.random() * maxNumber) + 1;//Generating random number

let UserNumber = false;//Variable used for tracking user

while (!UserNumber) {
  let guess = prompt("Guess number between 1 - " + maxNumber);
  guess = Number(guess);
  if (guess === randomNumber) {
    correct = true;
    alert("You got it " + randomNumber);
  } else if (guess > randomNumber) {
    alert("Too high");
  } else {
    alert("Too low");
  }
}

//Practice exercise 5.2

let count = 0;//Set the counter to zero

let step = 3;//Create variable step

do {
  console.log(count);
  count += step;//increase count
}
while (count <= 100);

//Practice exercise 5.3

let myWork = [];//Setup mywork array

for (let i = 0; i < 10; i++) {
  let stat = i % 4 ? true : false;
  let temp = {
    name: `Lesson ${i}`, status: stat
  };
  myWork.push(temp);
}
console.log(myWork);

//Practice exercise 5.4

let myTable = [];//Create mytable empty array

let row = 5;//row variable

let colum = 10;//colum variable

let counnt = 0;//counter variable

for (let j = 0; j < row; j++) {
  let tempTable = [];
  for (let i = 0; i < colum; i++) {
    counnt++;
    tempTable.push(counnt);//table loop
  }
  myTable.push(tempTable);
}
console.table(myTable);

//Practice exercise 5.5

const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
    if (counter % 8 == 0) {
        if (row != undefined) {        
            grid.push(row);
        }
        row = [];
    }
    counter++;
    let temp = counter;
    row.push(temp);
 
}
console.table(grid);

//Practice 5.6

/let array = [];//my empty array
for (let i = 0; i < 10; i++) {
  array.push(i);//pushing i to the array
}
console.log(array);//console log array

for (let j = 0; j < array.length; j++) { //iterating the array
  console.log(array[j]);
}
for (let value of array) { //using the for of loop
  console.log(value);
}

//Practice 5.7

let myFeature = { //My three item object
  hair: "Curly",
  eyes: "Brown",
  skin: "Black"
};

for (let features in myFeature) { //Using the for in loop
  console.log(features, myFeature[features]);
}

let mySelf = ["hair", "eyes", "skin"];
for (let i = 0; i < mySelf.length; i++) {
  console.log(mySelf[i]);
}

//Practice 5.8

let output = " ";// empty string variable

let numberToSkip = 9;//Number to skip

for (let i = 0; i < 10; i++) {
  if (i === numberToSkip) {
    continue;
  }
  output += i;
}
console.log(output);

for (let i = 0; i < 10; i++) {
  if (i === numberToSkip) {
    break;
  }
  output += i;
}
console.log(output);

//ChapterfiveProject

const myTable = [];
const numm = 10;
for(let x=0; x<numm; x++){
    const temp = [];
    for(let y = 0; y<numm; y++){
        temp.push(x*y);
    }
    myTable.push(temp);
}
 
console.table(myTable); 