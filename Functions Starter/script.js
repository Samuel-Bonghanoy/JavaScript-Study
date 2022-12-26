'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers //only works for parameters before this one
) {
  //   numPassengers = numPassengers || 1; ES5 WAY
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

//PASSING BY PRIMITIVE VS PASSING BY OBJECT

const flight = 'LH234';
const samuel = {
  name: 'Samuel Bonghanoy',
  passport: 24739479284,
};

const checkIN = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  //   if (passenger.passport === 24739479284) {
  //     alert('checked in');
  //   } else {
  //     alert('Wrong passport!');
  //   }
};

checkIN(flight, samuel);
console.log(flight); //does not change
console.log(samuel); //changes because it is passed by reference
// passing an object to a function is basically like passing by address in C

const newPassport = function (person) {
  person.passport = Math.random() * 100000;
};

newPassport(samuel);
checkIN(flight, samuel);

// FIRST CLASS FUNCTIONS AND HIGHER ORDER FUNCTIONS

/*
    FIRST CLASS FUNCTIONS ARE TREATED AS FIRST CLASS CITIZENS, MEANING
    THAT FUNCTIONS ARE SIMPLY VALUES
    THEY ARE JUST ANOTHER TYPE OF OBJECT

    Can be stored in variables and object properties
    Can be stored as parameters to other functions
    Can return a function from another function
    Functions are objects and also have methods


    HIGHER ORDER FUNCTIONS

    these are either functions that receive another function as
    an argument or that return a new function or both. This is only
    possible because of first class function

    functions that are passed as arguments are called callback
    functions because they will be called later by the higher order
    function

*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by:  ${fn.name}`); //name of function
};

transformer('JavaScript is the best!', upperFirstWord); //callback fucntions
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('HIII');
};

//JS uses callbacks all the time
document.body.addEventListener('click', high5); //example of a higher order func

['Jonas', 'Martha', 'Adam'].forEach(high5);

//callback functions allow us to create abstraction
/* 
ABSTRACTION is to hide some details of a code implementation 
because we are not concerned with that detail
*/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
//This works because of something called closure

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Samuel');

greet('Hello')('Samuel'); //this also works

//arrow function way of doing it but is more confusing
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hey')('Jake');

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Samuel Bonghanoy');
lufthansa.book(212, 'John Smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //this is possible due to first class functions

// book(23, 'Samule');
//how to tell js what the this keyword should be

//call method
book.call(eurowings, 23, 'Sarah Williams');
// the call method for functions sets the this keyword to the first arg
//manually sets the this keyword
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iatacode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Kat Donaldson');
console.log(swiss);

//apply method
//it does the same thing, but it takes an array of arguments and passes it to function
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //takes this keyword as first arg and array as 2nd
console.log(swiss);

// the same can be done with this. Might be better to stick to just call
book.call(swiss, ...flightData);

//bind does not immediately call the function but instead returns
//a function where the this keyword is what we pass into bind

const bookEW = book.bind(eurowings); //this keyword is eurowings
bookEW(23, 'Steven Williams'); // can call it normally now
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23); // can also bind other parameters
//this is called partial application

bookEW23('Jonas Shcmedtmann');
bookEW23('Martha Cooper');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPLane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPLane.bind(lufthansa));
//inside of this function the this keyword points to the button

//Partial application
const addTax = (rate, value) => value + value * rate; // the order matters
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//do this if you are not concerned with this keyword

console.log(addVAT(100));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `What is your favorite programming language? \n${this.options.join('\n')}`
    );
    this.answers[answer]++;
    console.log(this.answers);

    this.displayResults();
  },

  displayResults() {
    const type = prompt('How would you like the results to be shown?');

    if (type === 'string') {
      console.log(`The results are ${String(this.answers)}`);
    } else console.log(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//Immediately invoked function expresions
//only executed once and never again

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again!');
  const isPrivate = 23; // cannot be accessed in global scope
})(); // wrap it in a parentheses and it will be considered as an expression
//call it by adding the parentheses at the end

(() => console.log('This will ALSO never run again'))(); //for arrow functions

//closures

const secureBooking = function () {
  //closures happen automatically and we need to recnognize when
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

//closure makes it so that a function remembers variables declared within
//its function declaration
console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a + 2);
  };
};

g();
f(); //it is able to access the a variable because it was declared in
//the same function as f

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

//example 2
const boardPassengers2 = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} members`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers2(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
