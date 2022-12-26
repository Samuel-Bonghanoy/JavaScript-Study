'use strict';

//Sample Objects 1 and 2
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//Sample Object 3
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    //easier syntax. no need for colon and function keyword
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    //can set default values on function parameters
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3} `
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//----------------DESTRUCTURING ARRAYS-----------------------
console.log('----------------DESTRUCTURING ARRAYS------------------');

const arr1 = [2, 3, 4];

let [x, y, z] = arr1; // creating variables to hold each value at each index
console.log(x, y, z);

const arr2 = arr1; // creating a new array copying the old array
console.log(arr2);

arr2[1] = 7; // it points to the same object in the heap as arr1 therefore it changes the value at index 1 for arr1 as well
console.log(arr1, arr2);

let [a, , b] = arr2; //use commas but do not put variable to skip that index
console.log(a, b);

[a, b] = [b, a]; // reverses the array. can be done with bigger arrays as well
console.log(a, b);

let [option1, option2, , option3] = restaurant.categories; // make array from object
console.log(option1, option2, option3);

option1 = 'Samyang'; // does not change the restaurant object as they are not the same object in the heap
console.log(restaurant.categories);

let nestedArr = [2, 4, [5, 6]];
let [i, , j] = nestedArr;
console.log(i, j); // j becomes an array of 5 and 6

let [p, q, r] = [8, 9]; // r is undefined
console.log(p, q, r);

//----------------MUTATING VARIABLES-----------------------
console.log('----------------MUTATING VARIABLES---------------------');

let num1 = 111;
let num2 = 999;
const obj1 = { num1: 23, num2: 45, num3: 12 };
console.log(num1, num2); //prints initial values

({ num1, num2 } = obj1); // need to use a parenthesis
console.log(num1, num2);
// ({ u, t } = obj1); would not work as they are not in the object. Instead do this:
const { num1: u, num2: t } = obj1;
console.log(u, t); //destructuring an object and putting it into set variables

const {
  tue: { open: o, close: c }, //destructuring openingHours object
} = openingHours;
console.log(o, c);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // initialize them as arrays so that they are not undefined

//----------------SPREAD OPERATOR-----------------------
console.log('----------------SPREAD OPERATOR---------------------');

let arr = [7, 8, 9];
let badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //long and bad way to do it
let goodNewArr = [1, 2, ...arr]; // use spread operator to turn array into individual values
console.log(goodNewArr);

console.log(...goodNewArr); //printing out each individual element in array

let newMenu = [...restaurant.mainMenu, 'Gnocci', 'Pumpkin Pie'];
// adding new elements to array using elements from restaurant.mainMenu
console.log(...newMenu);

/* ---------------------INFO ABOUT THE SPREAD OPERATOR----------------------------
The Spread Operator does not create new variables. It is mainly used for 
printing values or separating arrays. One use case is making the arguments 
of a function into individual elements rather than an array

The Spread operator can only be used on Iterables such as arrays, strings, maps, and sets


*/
let str = 'Samuel Ethan Bonghnanoy';
console.log(...str); //using spread operator on a string to get individual letters

let letters = [...str, ' ', 'Jr.']; //array of letters grouped together
console.log(letters);
console.log(...letters); //speading it all into individual letters

restaurant.orderPasta(...arr); //using a spread array in a function

//Creating a new object from restaurant with added properties using spread operator

let restaurantCopy = { foundedIn: '1998', ...restaurant, founder: 'Giuseppe' };
console.log(restaurantCopy);

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name); //Original object does not change as they point to different objects in heap

const add = function (...numbers) {
  //taking multiple values and putting into one array
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2, 1, 4);

const { sat, ...weekdays1 } = restaurant.openingHours; //destructring openingHours
console.log(weekdays1);

let [pizza, , risotto, ...otherFood] = [
  //Rest Operator
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza);
console.log(risotto);
console.log(otherFood);

//----------------MORE OPERATORS-----------------------
console.log('----------------MORE OPERATORS---------------------');
console.log('___________________AND__________________________');

console.log(0 && 'Samuel Ethan'); //returns the first falsy value or the last true value
console.log(1 && 3); //logs 3

if (restaurant.orderPizza) restaurant.orderPizza('Mushrooms');
// Alternate way of writing this is:
restaurant.orderPizza && restaurant.orderPizza('Mushrooms');

console.log('___________________OR__________________________');

console.log(1 || false || undefined); //always returns the first truthy value
console.log(0 || 2 || null);
console.log(null || undefined || 3);

let guestsNumber = 0;
guestsNumber = restaurant.numGuests || 10; //will be 10 because that property of restaurant does not exist
console.log(guestsNumber);

console.log('___________________NULLISH__________________________');

console.log(0 ?? 2 ?? null); //considers 0. Does not consider null values only
console.log(null ?? 0 ?? 'Samuel'); //returns the first non-null value
console.log(null ?? undefined ?? 0);

console.log('___________________SHORTER WAY__________________________');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

let numberGuests = (rest1.numGuests ||= 10); //since it does not exist it is 10
console.log(rest1, numberGuests);

rest2.location ??= 'Bohol';
console.log(rest2);

rest2.owner ??= 'Bohol'; //since owner exists it does not become Bohol
console.log(rest2);

rest1.owner &&= 'ANONYMOUS'; //returns the first falsy value or last truthy
rest2.owner &&= 'ANONYMOUS';
console.log(rest1);
console.log(rest2);

//----------------FOR OF LOOP, ENTRIES, KEYS, VALUES-----------------------
console.log(
  '----------------FOR OF LOOP, ENTRIES, KEYS, VALUES---------------------'
);
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

for (let [i, el] of menu2.entries()) console.log(`${i + 1}: ${el}`);

console.log(...menu2.entries()); // entries contains both the keys and values

// VALUES
const values = Object.values(openingHours); //contains the values but no keys
console.log(...values);

//KEYS
const properties = Object.keys(openingHours);
console.log(properties);

//OPTIONAL CHAINING
const users = [{ name: 'Samuel', email: 'samuelbonghanoy35@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

//if the property does not exist it will not run and will not cause any errors

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On day ${day}, we open at ${open}`);
}

//--------------------------------SETS--------------------------------------
console.log('-----------------------------SETS-------------------------------');

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

console.log(ordersSet); //all duplicates are gone. Its similar to an array

console.log(new Set('Samuel Ethan Bonghanoy')); //removes all duplicates

console.log(ordersSet.size);
console.log(ordersSet.has('Bread')); // check for element in set
ordersSet.add('Garlic Bread'); // add an element to set
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto'); // delete element
console.log(ordersSet); //no indexes in a set || no way of getting values or data out of a set

// ordersSet.clear(); // used to clear a set
// console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//removing duplicate values of arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);

const staffSetUnique = [...new Set(staff)]; //making array getting the unique elements of former array by first making it a set

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Samuel Ethan Bonghanoy'));

//--------------------------------MAPS--------------------------------------
console.log('-----------------------------MAPS-------------------------------');
//used to map values to keys with key and value pairs
//in objects the keys are always strings, but in maps the keys can be any data type
const rest = new Map();
rest.set('name', 'Classico Italiano'); //add a key value pair to a map
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name')); //to access an element in map
console.log(rest.get(true)); //undefined if u make it a string
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); //returns a boolean

rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

// console.log(rest);

rest.set([1, 2], 'Test');
console.log(rest);

console.log(rest.get([1, 2])); //returns undefined because it is not the same object in the heap as the key [1,2] used for the rest
//it works if you use a variable holding an array as they now are the same object in the heap memory

rest.set(document.querySelector('h1'), 'Heading');

const question = new Map([
  ['question', 'What is the best programming language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(3));
console.log(question.get(question.get(answer) === question.get(3)));

//convert map to array
console.log(...question); //maps also have entries keys and values
console.log(...question.keys());
console.log(...question.values());

// ------------------------Coding Challenge #3--------------------------

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const gameEventsSet = new Set([...gameEvents.values()]);
// const gameEventsArr = gameEventsSet;

const gameEventsArr = [...new Set(gameEvents.values())];

gameEvents.delete(64);

let ctr = 0;
for (let gameEvent of gameEvents.keys()) ctr++;

console.log(`An event happened, on average, every ${90 / ctr} minutes`);
//easier way

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (let gameEvent of gameEvents.keys()) {
  gameEvent < 45
    ? console.log(`${gameEvents.get(gameEvent)} - First Half`)
    : console.log(`${gameEvents.get(gameEvent)} - Second Half`);
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF: ${min}: ${event}`);
}

//--------------------------------STRINGS--------------------------------------
console.log(
  '-----------------------------STRINGS-------------------------------'
);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.length);

console.log(airline.indexOf('r')); // finds index in string of argumentand returns first occurence
console.log(airline.lastIndexOf('r')); // finds last occurence
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4)); //creates a substring of everything after the argument index
console.log(airline.slice(4, 7)); // same thing but with an endpoint now

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); //starts from the end
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
  else console.log(`You got lucky`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('samuel')); //becomes an object

console.log(airline.toLowerCase()); //lowercase and uppercase
console.log(airline.toUpperCase());

const passenger = 'sAmUEl';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email
const email = 'hello@samuel.io';
const loginEmail = '   Hello@sAmuEL.Io\n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //removes all spaces and \n
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); // there is also trim start and end to specify where to remove whitespace
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '28,897PHP';
const priceUS = priceGB.replace('PHP', '$'); //replaces first string arg with 2nd in the string
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23!';

console.log(announcement.replace('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); //to replace all occurences of first arg

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb')); //if it starts with
console.log(plane2.startsWith('A')); //if it starts with

if (plane2.startsWith('Airbus') && plane2.endsWith('neo'))
  console.log('Part of the new Airbus family');

//practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else console.log('You are welcome on board');
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('I have some snacks, some food and a gun');
checkBaggage('I have socks and a camera');

console.log('a+very+nice+string'.split('+')); //splits it into array separated by argument string
console.log('Samuel Bonghanoy'.split(' '));

const [firstName, lastName] = 'Samuel Bonghanoy'.split(' ');

const newName = ['Mr. ', firstName, lastName.toUpperCase()].join(' '); //joins them together with arg string
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

const passenger2 = 'jessica ann smith davis';
capitalizeName(passenger2);

// padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); //basically string formatting in C
console.log(message.padEnd(25, '+')); //basically string formatting in C

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123123412312414));
maskCreditCard(1231123123123123123);

//Repeat
const message2 = 'Bad weather... All departures delayed';
console.log(message2.repeat(5)); // repeats string

const planesInLine = function (n) {
  console.log(`There are ${n} planes in the ${'port'.repeat(n)}`);
};

planesInLine(12);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let ctr2 = 1;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value.toLowerCase();
  const variableNames = text.split('\n');
  const checkBox = '✅';
  for (const row of variableNames) {
    // let strLen = n.length;
    // let placement = n.indexOf('_');
    // let nCamel = n.replace(n[placement + 1], n[placement + 1].toUpperCase());
    // console.log(placement);
    // console.log(
    //   nCamel.replace('_', '').trim() +
    //     checkBox.repeat(ctr2).padStart(25 - strLen, ' ') +
    //     '\n'
    // );
    // ctr2++;
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output.padEnd(20, ' ') + checkBox.repeat(ctr2++)); //could use i + 1 instead of ctr
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '*' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} ${time.replace(':', 'h')}`.padStart(36);
  console.log(output);
}
