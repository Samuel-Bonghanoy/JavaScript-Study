"use strict"; //gives rules like C

function logger() {
  console.log(`My name is Samuel.`);
}

logger(); //works exactly like C except no return type and no argument type

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const resultJuice = fruitProcessor(5, 0);
console.log(resultJuice);

// Function Declaration - can call it before declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression - cannot call it before declaration
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Samuel"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

const dolphinScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolpins win (${avgDolphins} vs. ${avgKoalas}).`);
  } else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);
  }
};

checkWinner(dolphinScore, koalasScore);

const averageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

console.log(averageScore(44, 23, 71));

const friends = ["Michael", "Steven", "Peter"]; //like a python list with index starting at 0
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

friends[2] = "Jay"; // can change the value because arrays are not a primitive value

const firstName = "Samuel";
const samuel = [firstName, "Bonghanoy", 2037 - 1991, "student", friends];
console.log(samuel);
console.log(samuel.length);
console.log(samuel[[samuel.length - 1]]);

const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay"); // adds element at the end of the array
const newLength = friends.push("Katrina"); // returns new length of array
console.log(friends);

friends.unshift("John"); //adds element to the start of array
console.log(friends);

//removing elements
friends.pop(); //removes last element
const popped = friends.pop(); //returns removed element
console.log(popped);
console.log(friends);

friends.shift(); //removes the first element and returns what is removed
console.log(friends);

console.log(friends.indexOf("Steven")); //returns index of element
console.log(friends.indexOf("Bobby")); //returns -1

console.log(friends.includes("Steven")); //returns boolean
console.log(friends.includes("Bob"));

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const arrowCalcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

console.log(arrowCalcTip(125));

const samuelArray = [
  "Samuel",
  "Bonghanoy",
  2037 - 1991,
  "student",
  ["Alexis", "EJ"],
];

// object with 5 properties
const samuel1 = {
  firstName: "Samuel",
  lastName: "Bonghanoy",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Alexis", "EJ"],
};

console.log(samuel);
console.log(samuel.lastName); //works like python
console.log(samuel["lastName"]);

const nameKey = "Name";

console.log(samuel["first" + nameKey]);
console.log(samuel["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Samuel?");
console.log(interestedIn);
console.log(samuel.interestedIn); //returns undefined as it does not recognize it as a property

console.log(samuel[interestedIn]);

samuel.location = "Cebu";
samuel["twitter"] = "@NotSamBonghanoy";
console.log(samuel);

console.log(
  `Samuel has ${samuel.friends.length} friends, and his best friend is called ${samuel.friends[0]}`
);

const samuel = {
  firstName: "Samuel",
  lastName: "Bonghanoy",
  birthYear: 2003,
  job: "teacher",
  friends: ["Alexis", "EJ"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this); this is similar to self in python
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; //creates element samuel.age
    return this.age;
  },

  getSummary: function () {
    if (this.hasDriversLicense) {
      console.log(
        `${this.firstName} is a ${this.calcAge()}-year old ${
          this.job
        }, and he has a driver's license`
      );
    } else {
      console.log(
        `${this.firstName} is a ${this.calcAge()}-year old ${
          this.job
        }, and he does not have a driver's license`
      );
    }
  },
};

console.log(samuel.calcAge());
console.log(samuel.age);

samuel.getSummary();
// console.log(samuel["calcAge"](2003));

const markMiller = {
  mass: 78,
  height: 1.69,
  fullName: "Mark Miller",
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const johnSmith = {
  mass: 92,
  height: 1.95,
  fullName: "John Smith",
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(markMiller.bmi);

if (johnSmith.calcBMI() > markMiller.calcBMI())
  console.log(
    `John's BMI (${johnSmith.calcBMI()}) is higher than Mark's (${markMiller.calcBMI()}.)`
  );
else
  console.log(
    `Mark's BMI (${markMiller.calcBMI()}) is higher than John's (${johnSmith.calcBMI()}.)`
  );

const samuaelArray = [
  "Samuel",
  "Bonghanoy",
  2037 - 1991,
  "student",
  ["Alexis", "EJ"],
];

const types = [];
console.log(samuelArray.length);

for (let i = 0; i < samuelArray.length; i++) {
  if (typeof samuelArray[i] !== "string") continue;

  console.log(samuelArray[i], typeof samuelArray[i]);

  types.push(typeof samuelArray[i]);
}

console.log(types);
