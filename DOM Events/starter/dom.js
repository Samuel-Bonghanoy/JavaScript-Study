'use strict';
console.log(document.documentElement); //selecting entire document
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); //returns a node list that contains all elements with the class section
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// is not a nodelist but an htmlcollection
//meaning that any dom changes there are immediately applied here

console.log(document.getElementsByClassName('btn'));
//also gets html collection

//creating and inserting elements
// insertadjacentHTML

const message = document.createElement('div'); //creates a DOM element and stores it in variable
//it is not yet in the dom itself. it needs to be inserted
message.classList.add('cookie-message');
message.textContent =
  'We used cookies for improved functionality and analytics';
message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button> ';

// header.prepend(message); //adds it as first child of that element
header.append(message); // adds it to the end
//it is a live element so it cannot be in 2 places at a time
// header.append(message.cloneNode(true));
//creates a clone of the element

// header.before(message); // adds the element before the header
// header.after(message); // adds it after the header

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //to remove the element

    //older way
    //message.parentElement.removeChild(message); //select parent and get the child to remove it
  });

//styles
//format is element.style.propertyName
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; //always write how it should be in css

console.log(message.style.height); //will not return anything. canot be found

console.log(getComputedStyle(message).color);
// this function gets all styles

message.style.height =
  Number.parseFloat(getComputedStyle(message).accentColor.height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
// changing properties in the root
//setProperty can also be used for bgcolor and other things but its more meticulous

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //only works for default set properties
console.log(logo.src); //absolute version
console.log(logo.className);
logo.alt = 'Beatiful Minimalist Logo';

console.log(logo.getAttribute('designer')); //to get non standard attributes

logo.setAttribute('company', 'Bankist'); //creates an attribute
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.getAttribute('src')); //relative version

//data attributes
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//types of events and event handlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');

  h1.removeEventListener('mouseenter', alertH1); //removes it after
  //1 cycle of the event
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//another way and it is more oldschool
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

//event propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

//to get events during the capture phase, we can add a 3rd parameter to addeventlistener

//console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor(); //this keyword in eventhandler always points to the element
  console.log('LINK', e.target, e.currentTarget); //the target is always the same for all as it is the element that got clicked
  //current target points to the same as the this keyword

  //stop event propagation
  // e.stopPropagation(); //this is possible but bad practice
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK');
  this.style.backgroundColor = randomColor(); //parent element
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log('LINK');
    this.style.backgroundColor = randomColor(); //the bubbling phase makes it apply to all parent elements
    console.log('nav', e.target, e.currentTarget);
  },
  true
); //this one becomes the first as it listens to events as they travel down the DOM
//the rest listen when it travels back up, so this one is logged first

//event delegation
//better to use events delegation for efficiency and cleaner code

//1. Add event listener to common parent element
//2. Determine what element orginiated that element

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//DOM traversing

const h12 = document.querySelector('h1');

//going downwards: child
console.log(h1.querySelectorAll('.highlight'));
//only logs the elements with this class that are CHILDREN the h1 element
console.log(h1.childNodes);
console.log(h1.children); //only works for direct children

h1.firstElementChild.style.color = 'white'; //first child
h1.lastElementChild.style.color = 'orangered'; //last child

//going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
//it is basically the opposite of querySelector
//it finds parents no matter how far up in the dom tree while queryselector does that for children

//going sideways: siblings
//can only access direct siblings
console.log(h1.previousElementSibling); //elements
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); //nodes
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
