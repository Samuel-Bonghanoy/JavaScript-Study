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

Person.hey = function () {
  console.log('HEYYYY GURLLLL');
  console.log(this);
};
Person.hey(); //static method. wont be included in prototype of children

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

console.log(samuel.__proto__.__proto__);

console.log((samuel.__proto__.__proto__.__proto__ ??= 'not null'));

console.log(Person.prototype.constructor); //points to Person

const arr = [1, 2, 3, 4, 5, 5, 5, 5, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.dir(x => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('nissan', 15);
const car2 = new Car('ford', 25);

car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

//ES6 CLASSES

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } //needed

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //setting a property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('name is not full');
  }

  get fullName() {
    return this._fullName;
  }

  //to add a static metho, add static keyword
  static hey() {
    console.log('HEYYY GURLL');
  }
}

const walter = new PersonCl('Walter White', 1955);
console.log(walter);

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge;

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
console.log(jessica.age);

//Classes are not hoisted so they must be declared first
//Classes are first class citizens meaning they can be returned and passed into functions
//Classes are always executed in strict mode

//Setters and Getters
const account = {
  owner: 'jonas',
  movements: [200, 500, 300, 200, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  }, //use something as a property but do calculations first

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); //creates an object linked to prototype passed in
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('nissan', 15);
// const car2 = new Car('ford', 25);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    //making property
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    //making method to call which sets a property
    this.speed = speed * 16;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log('My name is mike');
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Object);

console.log(mike instanceof Person);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge 
in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, 
with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 
HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = Car;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla X', 25, 40);
console.log(tesla.charge);
tesla.chargeBattery(79);
console.log(tesla.charge);
console.log(tesla.speed);
tesla.brake();
tesla.accelerate();
console.log(tesla.speed);

EV.prototype.accelerate = function () {
  this.speed += 20;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

console.log(tesla.speed);
tesla.accelerate();
tesla.brake();

//inheritance with ES6 classes
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  } //needed

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //setting a property that already exists

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('name is not full');
  }

  get fullName() {
    return this._fullName;
  }

  //to add a static metho, add static keyword
  static hey() {
    console.log('HEYYY GURLL');
  }
}

//this extends keyword makes the class inherit
class Student2 extends PersonCl2 {
  constructor(fullName, birthYear, course) {
    //super should always happen first as it is responsible for assigning this keyword
    super(fullName, birthYear); //does what the constructor function does basically
    this.course = course;
    //if the constructor has the same parameters as parent then there is no need to call super
    //it automatically calls with parameters in constructor
  }

  introduce() {
    console.log('My name is mike');
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old`);
  }
}

const martha = new Student2('Martha Thompson', 2003, 'Computer Science');
martha.introduce();
martha.calcAge();

const stevenLava = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log('Hey gurlllll');
};

const jay = Object.create(StudentProto);
jay.introduce();
jay.calcAge();

//properties are usually called fields in ES6
//Public fields
//private fields
//public methods
//private methods
// there is also the static version

class Account {
  // public fields
  locale = navigator.language;

  // private fields
  //properties are not accessible from outside function
  #movements = [];
  #pin; //basically creating an empty variab;e

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    //still accessible but this convention will make people know that it should not be touched
    //from outside
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public methods
  //public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  //only works in the class and not on instances
  static helper() {
    console.log('Helper');
  }

  //Private methods
  //no browser supports this yet
  // #approveLoan(val) {
  //   return true;
  // }

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
console.log(acc1.getMovements());

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(450);
//use return this on all these methods to allow chaining
