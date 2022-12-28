'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-12-23T18:49:59.371Z',
    '2022-12-24T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2022-12-23T18:49:59.371Z',
    '2022-12-24T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started
      }`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // Set time to 5 minutes
  let time = 10;
  //call the timer every 5 seconds
  tick();
  const timer = setInterval(tick, 1000); //called after 1s but needs to be done immediately
  //print remaining time to UI
  return timer;
  //when 0 seconds stop timer and log out user
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //create current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //add current date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//numbers are always written as floating point in js

console.log(23 === 23.0);
//represented in a 64 base 2 format meaning binary
console.log(0.1 + 0.2 === 0.3);

console.log(+'23');

//parsing
// console.log(Number.parseInt('30px', 10)); //takes the number from string iff the first
// //index is a number

// console.log(Number.parseFloat('3rem', 10));

// console.log(Number.isNaN('20')); //returns boolean if arg is number or not

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20')); //best way of checking if value is a number

// //MATH operations
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(25 ** (1 / 3)); //only way to get cube root

// //math.max gets highest number but it does not parse and min does opposite
// console.log(Math.PI);
// console.log(Math.PI * Number.parseFloat('10px') ** 2); //circumference

// console.log(Math.trunc(Math.random() * 6) + 1); //whole number bet 1 -6

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
// //get a random number between 0 and (max - min)
// const randomInt2 = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// //random nmber between min and max

// //math.trunc removes any decimal part
// //round round to the nearest integer
// //ceil rounds to higher integer
// //floor rounds to lower integer
// //all of these do type coercion

// console.log((2.7).toFixed(0)); // always returns a string and not a number
// console.log((2.7).toFixed(3)); // always returns a string and not a number
// console.log((2.7).toFixed(2)); // always returns a string and not a number
// console.log(+(2.7).toFixed(2)); // use + to make it a number

// //javascript also has modulo
// console.log(5 % 2);

// //numeric separators
// const diameter = 2_812_391_391;

// const price = 345_99;
// const transferFee = 15_00;

// console.log(Number('230_000')); //this cannot be parsed even with parseInt

// console.log(2 ** 53 - 1); //biggest number that js can represent
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(12312371823617283612736192832193827n); //transforms a regular number into
// //a  big int number with rpecision

// console.log(BigInt(218379182937819273891213));
// //operators work the same with big ints

// const huge = 1231231231231234123123123132n;
// const num = 23;
// console.log(huge * BigInt(num)); //wont work unless num is a big int

// //still works for comparison operators
// console.log(20n > 15);

// //dates and times

// const now2= new Date();
// console.log(now); //curretn date

// console.log(new Date('Dec 25 2022 21:43:48 '));
// console.log(new Date('December 24, 2022'));

// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0)); //date of unix

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// //dates have methods
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); //never use get year
// console.log(future.getMonth()); //gets month
// console.log(future.getDate()); //gets the day
// console.log(future.getHours()); //gets the day
// console.log(future.getMinutes()); //gets the day
// console.log(future.getSeconds()); //gets the day
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142228180000));

// console.log(Date.now()); //current date

// future.setFullYear(2040);
// console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

const num = 3884764.23;

console.log(new Intl.NumberFormat('en-US').format(num));

const options2 = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};

console.log(new Intl.NumberFormat('en-US', options2).format(num));

console.log(new Intl.NumberFormat(navigator.language, options2).format(num));

//timers

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  () => console.log('Here is your pizza'),
  3000,
  ...ingredients
);
//the 3rd and 4th arguments become the parameters of the callback func
console.log('waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
//use this to delete the timer

// set Timeout
// setInterval(function () {
//   const now = new Date();
//   const hours = now.getHours();
//   const minute = `${now.getMinutes()}`.padStart(2, 0);
//   console.log(`${hours}:${minute}`);
// }, 3000);
