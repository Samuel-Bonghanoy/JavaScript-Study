'use strict';

/*
in classical OOP
a class is like a blueprint
a class can be used to make objects. this process is called instantiation

in Javascript there are prototypes
objects are linked to a prototype object

prototypal inheritance - all objects linked to a prototype can have access to methods and properties used by prototype
there is a big difference between objects inheriting from a prototype and a protoype inheriting from another prototype

*/

//constructor functions
//constructor functions should always start with a capital letter
//arrow functions wont work as they dont have this keyword
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //instance methods
  //never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const samuel = new Person('Samuel', 2003);
console.log(samuel);

//4 steps behind the scenes
//1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(samuel instanceof Person); //returns true or false if it inherits from constructor function

// prototypes
//every function in js has a property called prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

samuel.calcAge(); // the actual instance does not contain the method
// but it can access it because of prototypal inheritance
//this is far better for performance and managing space

console.log(samuel.__proto__);
console.log(samuel.__proto__ === Person.prototype);
// Person.prototype is not the prototype of person. It is the prototype of all the objects
// that are created with the person contstructor function

console.log(Person.prototype.isPrototypeOf(samuel));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//prototype property is basically prototypeOfLinkedObjects
console.log(samuel);
Person.prototype.species = 'Homo Sapiens';
console.log(samuel.species); //this property is not directly in this object

console.log(samuel.hasOwnProperty('firstName'));
console.log(samuel.hasOwnProperty('species'));
