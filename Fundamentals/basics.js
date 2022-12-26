let js = "amazing";
console.log(40 + 8 + 23 - 10);

//A value is the smallest unit of information in Javascript. It can be a word, a number, etc
console.log("Samuel");
console.log(23);
// Use camel case in JavaScript as it is the standard
let firstName = "Jonas";
console.log(firstName);

//VARAIBLE NAMES CAN ONLY CONTAIN NUMBERS, LETTERS, UNDERSCORES, OR DOLLAR SIGN
// reserved keywords can also not be used as variable names
// name is a reserved keyword but it is allowed to be used. It is just not recommended
// for now never use capital letters for 1 word variables as it is used in OOP

// constants are written like so
let PI = 3.1415;

// make sure variable names are descriptive. ex.

let myFirstJob = "Programmer";
let myCurrentJob = "Student";

console.log(myFirstJob);

let country = "Philippines";
let continent = "Asia";
let population = 50000000;

console.log(country);
console.log(continent);
console.log(population);

true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
//result of typeof operator is a string holding the name of the data type
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES";
// you do not need to declare let again to change the value
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year);
// this returns undefined and typeof year will also return a string undefined
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
// legacy bug. this should retrun null like undefined returns undefined

let age = 30;
age = 31;
// use let when you want to mutate a variable

// use const when u are making a variable that you do not want to change in the future
const birthYear = 1991;
// it cannot be changed anymore

// const variables need to be initialized or else it will cause an error

// always use const by default and use let only when u are sure that a variable is going to be mutated
// changeable variables gives way to bugs

// the var keyword should be completely avoided
// it is still needed to be known for legacy purposes
// it is the old way of delcaring variables prior to ES6

var job = "programmer";
job = "teacher";

// it works exactly like let and it can be mutated
// never use var

// some people even say you do not need to declare a variable
// but that is a terrible idea

const ageJonas = 2037 - 1991;
console.log(ageJonas);

const ageSarah = 2037 - 2018;
console.log(ageSarah);
console.log(ageJonas, ageSarah);

console.log(ageJonas - ageSarah, ageJonas / ageSarah);
console.log(ageJonas ** 3);
// exponents use **

const firstName2 = "Samuel";
const lastName = "Bonghanoy";
console.log(firstName + " " + lastName);
// works like python print function

let x = 10 + 5;
x += 10; // works like c and python
x++;
x--; // increments work like c
console.log(x);

// COMPARISON OPERATOR
console.log(ageJonas >= ageSarah); // returns a boolean

console.log(ageJonas - 1991 > ageSarah - 2018);

const firstName3 = "Samuel";
const job = "student";
const birthYear4 = 2003;
const year1 = 2022;

const Samuel =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(Samuel);

// similar to f print in python
const samuelNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(samuelNew);

// its better to just use backticks than quotations
// you can use backticks for regular strings
console.log(`Just a regular string...\n`);

// You can use backticks for multiline strings
console.log(`Multi
Line
String
Using
Backticks
`);

const age2 = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving license training`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear2 = 1895;

let century;

if (birthYear2 <= 2000) {
  let century = 20;
} else {
  let century = 21;
}

console.log(century);

const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Samuel")); //returns NaN or not a number
//typeof NaN is a number but it is an invalid number

console.log(String(23), 23);

//Booleans behave in a different way

//type coercion
console.log("I am " + 23 + " years old");
//the plus operator there automatically converts 23 to a string

console.log("23" - "10" - 3);
// the minus operator converts it to a number

console.log("23" * "21");
console.log("23" / "21");

let n = "1" + 1; //'11'
n = n - 1;
console.log(n);

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("samuel")); //any string not an empty string is truthy
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Dont spend it at all");
} else {
  console.log("You should get a job! ");
}
//executes the else statement cuz money = 0

let height;
if (height) {
  console.log("Dont spend it at all");
} else {
  console.log("You should get a job! ");
}

const yesage = "18";
if (age === 18) console.log("You just became an adult");
//this operator returns a boolean
//strict equality operator. does not do type coersion
if (age === 18) console.log("You just became an adult");
//'18' == 18 will return true while '18' === 18 returns false
//double equals operator is loose equality so it performs type coersion
// always use the strict operator

const favoriteNumber = Number(prompt("What is your favorite number?"));
//works like input in python
console.log(favoriteNumber);

if (favoriteNumber === 23) {
  console.log("Cool!");
} else if (favoriteNumber === 7) {
  console.log("Meh");
} else {
  console.log("iTS NOT 7 OR 23");
}

if (favoriteNumber !== 23) console.log("Why not 23?");
// strict inequality operator

const HasDriversLicense = true;
const hasGoodVision = false;

console.log(HasDriversLicense && hasGoodVision);
console.log(HasDriversLicense || hasGoodVision);
console.log(!HasDriversLicense);

if (shouldDrive) {
  console.log(`Sarah is able to drive ${shouldDrive}!`);
} else {
  console.log(`Sam should be the one to drive ${shouldDrive}!`);
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy!`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the trophy!`);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`nobody wins`);
}

const day = "monday";

switch (
  day // works exactly like C
) {
  case "monday":
    console.log(`Plan what to do`);
    break;
  case "tuesday":
    console.log(`Prepare for stuff`);
    break;
  case "wednesday": // runs the same thing for both wednesday and thursday cuz no break
  case "thursday": //if no break it goes down to the next case
    console.log(`live a little`);
  default:
    console.log(`Not a valid day`);
    break;
}

const famnage = 23;
age >= 18
  ? console.log(`I like to drink wine`)
  : console.log(`I like to drink water`);

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

let tip = 40;

const actualTip = tip <= 300 && tip >= 50 ? tip * 0.15 : tip * 0.2;
console.log(actualTip);
s;

tip >= 50 && tip <= 300
  ? console.log(`The total value is ${tip + tip * 0.15}`)
  : console.log(`The total value is ${tip + tip * 0.2}`);
