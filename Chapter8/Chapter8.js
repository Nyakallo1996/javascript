//exercise 8.1
let web = "How's%20it%20going%3F";//Output the decodeURIComponenet() for the string how's s%20it%20going%3f to the console

let web2 = "How's it going?";//Encode the string How's it going ?, output to console

let decodedComp = decodeURIComponent(web);//Add the strings as variables in the javascript code
console.log(decodedComp);//Using encodeUricomponent() and decodeuricomponent() output result on console               

let encodedComp = encodeURIComponent(web2);
console.log(encodedComp);

let uri = "http://www.basescripts.com?=Hello World";// Create a web URI with request parameters http://www.basescripts.com?=Hello World";

let encoded = encodeURI(uri);// Encode and output the web URI into the console
console.log(encoded);

//practice exercise 8.2

let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];// Create an array of names of people. Make sure you include duplicates. The exercise will remove the duplicate names.
let arr2 = arr.filter ( (value, index, array) => {//. Using the filter() method, assign the results of each item from the array as arguments within an anonymous function. Using the value, index, and array arguments, return the filtered result. You can set the return value to truetemporarily as this will build the new array with all the results in the original array.
    console.log(value,index,array.indexOf(value));//. Add a console.log call within the function that will output the index value of the current item in the array
    return array.indexOf(value) === index;
});
console.log(arr2);// Output the new, unique value array onto the console.

//exercise 8.3

let myArr = [1,4,5,6];// Create an array of numbers.

let myArr1 = myArr.map(function(ele){//sing the array map method and an anonymous function, return an updated array, multiplying all the numbers in the array by 2. Output the result into the console.
    return ele * 2;
});
console.log(myArr1);

let myArr2 = myArr.map((ele)=> ele*2);//. As an alternative method, use the arrow function format to multiply each element of the array by 2 with the array map() method in one line of code.

console.log(myArr2);// Log the result onto the console.

//exercise 8.4

let val = "thIs will be capiTalized for each word";// Create a string with several words that have letters with different cases, a mix of upper and lowercase words.

function wordsCaps(str) {// Create a function that gets a string as an argument, which will be the value that we will manipulate
    str = str.toLowerCase();// In the function first transform everything to lowercase letters.
    let tempArr = [];// Create an empty array that can hold the values of the words when we capitalize them.
    let words = str.split(" ");// Convert the phrase into words in an array using the split() method.
    words.forEach(word => {// Loop through each one of the words that are now in the new array, so you can select each one independently. You can use forEach() for this.
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
        tempArr.push(temp);
    });
    return tempArr.join(" ");
}
console.log(wordsCaps(val));

//exercise 8.5

let val = "I love JavaScript";// Create the previously specified string, and convert it to lowercase.
val = val.toLowerCase();
let vowels = ["a","e","i","o","u"];// Create an array containing the vowels: a, e, i, o, u.
vowels.forEach((letter,index) =>{// Loop through each letter you have in the array, and output the current letter into the console so that you can see which letter will be converted.
    console.log(letter);
    val = val.replaceAll(letter,index);// Within the loop, using replaceAll() update each vowel substring with the index value of the letter from the vowel array.
});
console.log(val);// Once the loop completes output the result of the new string into the console.

//practice exercise 8.6

console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));
console.log(Math.random());
console.log(Math.floor(Math.random()*11)); // 0-10
console.log(Math.floor(Math.random()*10)+1); // 1-10;
console.log(Math.floor(Math.random()*100)+1); // 1-100;
function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 100; x++) {
    console.log(ranNum(1, 100));
}

//practice exercise 8.7

let future = new Date(2025, 5, 15);
console.log(future);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month-1]} ${day} ${year}`;
console.log(myDate);

//word scrumbler

let str = "JavaScript";
        
function scramble(val) {
    let max = val.length;
    let temp = "";
    for(let i=0;i<max;i++){
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index]; 
        console.log(temp); 
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }
    return temp;
}
console.log(scramble(str));

//countdown timer

const endDate = "Sept 1 2022";

function countdown() {
    const total = Date.parse(endDate) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}

function update() {
    const temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}

update();