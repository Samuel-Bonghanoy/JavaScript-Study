'use strict';

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

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    //easier synax no need for colon and function keyword
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
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

/*

// a map is a data structure that we can use to map values to keys. Map keys can have any data type unlike in objects

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
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

/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

console.log(ordersSet); //all duplicates are gone. Its similar to an array

console.log(new Set('Samuel'));

console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet); //no indexes in a set || no way of getting values or data out of a set

// ordersSet.clear();
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
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`${player} - Goal ${i + 1}`);

let average = 0;
for (const value of Object.values(game.odds)) average += value;
average /= Object.values(game.odds).length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

scorers['Dextrosity'] = 10;
console.log(scorers);
/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We open on ${properties.length} days:`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open); //a property exists if its not null and its not undefined
console.log(restaurant.openingHours?.mon?.open); //prevents bugs by not opening them if they dont exist

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On day ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//ARRAYS
const users = [{ name: 'Samuel', email: 'samuelbonghanoy35@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');
/*

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  //get the index and item
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()) {
  //get the index and item
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...playerNames) {
    const names = [...playerNames];
    for (let i = 0; i < names.length; i++) console.log(names[i]);
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...others] = players1;
console.log(gk, ...others);
const [gk2, ...others2] = players2;

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Theago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// let team1 = 0;
// let team2 = 0;
// let draw = 0;

// ({ team1, x: draw, team2 } = game.odds);

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

const printTheGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored`);
  for (let i = 0; i < playerNames.length; i++) console.log(playerNames[i]);
};

printTheGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 1 is more likely to win`);

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
//rest1.numGuests = rest1.numGuests ? rest1.numGuests : 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS'; //returns the first cuz its truthy
rest1.owner = rest1.owner && '<ANONYMOUS'; //returns undefined cuz its first falsy

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10; //this will work if initalized as 0
console.log(guests2);

const guestsCorrect = restaurant.numGuests ?? 10; //works with everything except nullish values instead of considering them falsy
console.log(guestsCorrect); //considers null values as true
/*
//They can use any data type, return any data type, can short circuit
console.log(3 || 'Samuel');
console.log('' || 'Samuel');
console.log(true || 0);
console.log(undefined || null);

//OR always returns the first truthy value
console.log(undefined || 0 || '' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; //this will work if initalized as 0
console.log(guests2);
console.log('-----------AND--------------');

console.log(0 && 'Samuel'); //always returns first falsy value
console.log(7 && 'Samuel'); //prints second since it evaluates it last

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms'); //will call the function



//AND
//DESTRUCTURING

//rest operator does the opposite of spread operator
/*
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others); //a and b become 1 and 2 and others becomes a new array of unused values

const [pizza, , risotto, ...otherFood] = [
  //rest operator must always be the last
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza);
console.log(risotto);
console.log(otherFood); //does not include the skipped elements

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS
const add = function (...numbers) {
  //taking multiple values and putting into one array
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'yes', 'pineapples', 'peperoni');
restaurant.orderPizza('mushrooms');

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //SPREAD OPERATOR
console.log(newArr);

console.log(...newArr); //printing (1,2,7,8,9)

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //expanding the array by adding a new element
console.log(newMenu);
//THE SPREAD OPERATOR DOES NOT CREATE NEW VARIABLES. CAN ONLY USE IT WHERE WE PRINT VALUES SEPARATED BY COMMA

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS

const str = 'Samuel';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...letters);

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Let's make pasta! Ingredient 2?`),
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: '1998', ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//SPREAD OPERATOR ARE ONLY EXPECTED FOR FUNCTION ARGUMENTS OR MAKING ARRAYS

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(resturantName, hours, tags);

//DEFAULT VALUES

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //need to use a parenthesis
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

//ARRAYS

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// const arr2 = arr;
// console.log(arr2);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p, q, r] = [8, 9];
// console.log(p, q, r);
