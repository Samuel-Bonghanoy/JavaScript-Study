'use strict';

/*
console.log(document.querySelector('.message').textContent); //selecting text in the element

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const shadesOfRed = [
  '#000000',
  '#290005',
  '#3D0008',
  '#7A0010',
  '#A30013',
  '#FF334E',
];

const hearts = ['heart1', 'heart2', 'heart3', 'heart4', 'heart5'];

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 5;
// document.querySelector('.score').textContent = score;

let counter = -1;
let highScore = 0;

const loseHeart = function (hearts, index) {
  document.querySelector(hearts[index]).style.display = 'none';
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const hideAll = function () {
  document.querySelector('header').style.display = 'none';
  document.querySelector('main').style.display = 'none';
};

const showAll = function () {
  document.querySelector('header').style.display = 'block';
  document.querySelector('main').style.display = 'block';
};

// hideAll();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess); //this will be a string unless typecasted

  // NO INPUT
  if (!guess) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = 'No number!';
      displayMessage('No number!');
      score--;
      document.querySelector('.score').textContent = '';
      //   document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = shadesOfRed[score];
      switch (score) {
        case 4:
          document.querySelector('heart5').style.display = 'none';
          break;
        case 3:
          document.querySelector('.heart4').style.display = 'none';
          break;
        case 2:
          document.querySelector('.heart3').style.display = 'none';
          break;
        case 1:
          document.querySelector('.heart2').style.display = 'none';
          break;
        case 0:
          document.querySelector('.heart1').style.display = 'none';
          break;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      hideAll();
      document.querySelector('.lose').style.display = 'block';
    }
    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct number!');
    hideAll();
    document.querySelector('.win').style.display = 'block';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // WHEN INPUT IS MORE
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = '';
      document.querySelector('body').style.backgroundColor = shadesOfRed[score];
      switch (score) {
        case 4:
          document.querySelector('heart5').style.display = 'none';
          break;
        case 3:
          document.querySelector('.heart4').style.display = 'none';
          break;
        case 2:
          document.querySelector('.heart3').style.display = 'none';
          break;
        case 1:
          document.querySelector('.heart2').style.display = 'none';
          break;
        case 0:
          document.querySelector('.heart1').style.display = 'none';
          break;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
      hideAll();
      document.querySelector('.lose').style.display = 'block';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  //   showAll();

  //   document.querySelector('.lose').style.display = 'none';
  //   document.querySelector('.lose').style.display = 'none';
});
