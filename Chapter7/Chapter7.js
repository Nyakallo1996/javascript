//Practice exercise 7.1(Class)

class Persone {                          //Create a class for Person including the constructor for firstname and lastname
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let personn = new Persone ("Nyakallo", "Mahlakametsa");//Create a variable and assign a value of the new Person object using your friend's first and lastname

let personn2 = new Persone ("Hlapi", "Mamabolo");//Now add a second variable with another friend's name using their firstname and last name

console.log("Hello " + personn.firstName,personn.lastName);  //Output both friend's into the console with greeting og hello
console.log("Hello " + personn2.firstName,personn2.lastName);

//Practice excercise 7.2(Methods)

class Person {    //Using the Person class from Practice exercise 7.1, add a method called full name
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullname() {
    return this.firstName + " " + this.lastName;
  }
}

let p = new Person("Tumisang", "Mahlakametsa"); //Create values for person1 and person2 using their first and lastname
let p2 = new Person("Lehakoe", "Mbhele");

console.log(p.fullname()); //Using the fullname method within the class, return the full name of one or both people
console.log(p2.fullname());

//Practice excercis 7.3(Properties,Getters and setters,inheritance,Prototypes)

class Animal {   //Create a method that prints a given animal and its sound
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}

Animal.prototype.eat = function () {  //Add a prototype with another action for the animal
    return this.species + " is eating";
}

let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");
cat.speak();                               //Output an entire animal object into the console
console.log(dog.eat());
console.log(dog);

//Chapter projects
//Employee tracking app

class Employee { //Create a class
  constructor (firstname, lastname, numberOfyears) {  //use firstname,lastname and number of years they have worked
    this.firstname = firstname;
    this.lastname = lastname;
    this.numberOfyears = numberOfyears
  }
 
}
Employee.prototype.service = function () { //setup a prototype
  return this.firstname + " " + this.lastname + " number of years at our company " + this.numberOfyears + " years.";
};

let e1 = new Employee ("Nikita", "Mahlakametsa", 3);
let e2 = new Employee ("James", "Khuboni", 20);
let e3 = new Employee ("Tumisan", "Mbhele", "1");

console.log(e1.service());//console the output
console.log(e2.service());
console.log(e3.service());

//Menu items price calculator

class Menu {   //Create a class that contain the prices of two menu items as private field declarations
  #offer1 = 10;
  #offer2 = 20;
  constructor(val1, val2) { //Use the constructor in the class to get the argument values(how many of each item are beimg bought)
      this.val1 = val1;
      this.val2 = val2;
  }
  calTotal(){
      return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);//Create a method to calculate and return the total cost depending on how many of each item the user selects

  }
  get total(){
      return this.calTotal(); //use a getter property to grab the value output by the calculate method
  }
}

const val1 = new Menu(2,0);//Create two or three oblects with different combinations of menu selections, and output the total cost in the console
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);

//Self-check quiz
//1. What is the keyword used to create a class?
//Class
//2. How would you set up a class for a person's first and last names that could 
//include first and last as initial properties?
//class Person {
  //constructor (fisrtname, lastname) {
  //this.firstname = firstname;
  //this.lastname = lastname;
  //}
//}
//3. What is the concept of one thing gaining the properties and behaviors of 
//another thing called?
//Inheritance
//4. Which of the following are true about the constructor method?
//• It gets executed automatically when a new object is created.
//• It should only be added afterward.
//• It has to include the constructor keyword.true
//• It is used to initialize object properties.true
//• It can be used when you have multiple values.true
//5. Troubleshoot the following code so that the prototype outputs the first and 
//last name of the Person into the console. Which is the correct syntax for the 
//Person prototype? 
//class Person {
//constructor (firstname,lastname) {
 //this.first = first;
 //this.last = last;
//}
//}
// What should go here: A, B, or C?
//const friend1 = new Person("Laurence", "Svekis");
//console.log(friend1.getName());
//A)
//Person.prototype.getName = (first,last) {
 //return this.first + " " + this.last;
//};
//B)
//Person.prototype.getName = function getName() { //b
//return this.first + " " + this.last;
//};
//C) 
//Person.prototype = function getName() {
//return this.first + " " + this.last;
//};