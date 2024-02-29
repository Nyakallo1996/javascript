//Practice exercise 3.1

let shoppingList = ["Milk", "Bread", "Apples"];//Create an array to uses as your shopping list with 3 items: "Milk", "Bread", "Apples"

let listlenght = shoppingList.length;//Check ypur list length in the console

shoppingList[1] = "Bananas";//Update "Bread to "Bananas"
console.log(listlenght);

console.log(shoppingList);//Output your entire list to the console


//Practice exercise 3.2

let shopList = [];//Create an empty array to use as a shopping list

shopList = ["Milk", "Bread", "Apples"];//Add Milk,Bread and Apples to your list

shopList.splice(1, 1 , "Bananas", "Eggs");//Update "Bread" with Bananas and Eggs

let = removeList = shopList.pop();//Remove the last item from the array and output it into the console
console.log(removeList);

shopList.sort();//Sort the list alphabetically

console.log(shopList.indexOf("Milk"));//Find and output the index value of Milk

shopList.push("Carrots", "Lettuce");//After Bananas , add Carrots and Lettuce

let newList = ["Juice", "Pop"];//Create a new list containing Juice and Pop

let combinedList = shopList.concat(newList, newList);//Combine both list, adding the new list twice to the end of the first list

let juice = combinedList.lastIndexOf("Pop");//Get the last index value of Pop and output it to the console
console.log(juice);

console.log(combinedList);//final list

//Practice exercise 3.3

let number = [1, 2, 3];//Create an array containing three values: 1, 2, 3.

let nums = [number, number, number];//Nest the original array into a new array three times

console.log(nums[0][1]);//Outout the value 2 from one of the arrays into the console

//Practice exercise 3.4

let myCar = {
    make: "Toyota",
    model: "Corolla",
    engine: 1.3,
    color: "blue",
    year: 2012
};//Create a new myCar object for a car

let colour = myCar["color"] = "red";//Create a variable that can hold the string color,the change color to new color

myCar["forSale"] = myCar["forSale"] = "available for purchase";
console.log(myCar);//Use that same variable and assign a new property string value to it

console.log(myCar.make,myCar.model);//Output make and model into the console

console.log(myCar.forSale);//Output the value of Forsale into the console

//Practice excercise 3.5

let people = {
    friends: [],
}//Create an object named people that contains an empty array that is called Friends

let tumi = {                   //Create three variables, each containing an object, the
    name: "Tumisang",
    lastname: "Mahlakametsa",
    ID: 125122
}

let tshepo = {
    name: "Tshepang",
    lastname: "China",
    ID: 225544
}

let vusi = {
    name: "vusayo",
    lastname: "THHH",
    ID: 7585252
}

people.friends.unshift(vusi);
people.friends.unshift(tshepo);//Adding my objects to my array
people.friends.unshift(tumi);

console.log(people);//console my array

//chapter 4 project
//Manipulating an array

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];//my array

theList.shift();//removing my first array item

theList.pop();//removing my last array item

theList.unshift("FIRST");//adding an item to the start of my array

theList[2] = "MIDDLE";//change item on my array

theList.splice(4 , 5);//deleting items on my array

theList[3] = "hello World";//changing item on my array

theList.push("LAST");//adding last item to my array at the end of it


console.log(theList);

//Company product catalog

let inventory = [];//empty array

let len = {
    name: "Lenovo",
    model: "Yoga",
    cost: 200000,
    quantity: 16
};
    
let intel = {
    name: "HP",
    model: "Pivillion",
    cost: 10000,
    quantity: 50
};

let del = {
    name: "Dell",
    model: "XPS",
    cost: 30000,
    quantity: 5
};    

inventory.push(len);
inventory.push(intel);//pushing my array
inventory.push(del);

console.log(inventory);

console.log(inventory[2]["quantity"]);