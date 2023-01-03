//importing module
// import { addToCart, totalPrice as price, totalQuantity } from './cart.js';
//all the imported ones will be parsed first
// console.log('importing module');

// addToCart('bread', 5);
// console.log(price, totalQuantity);

import * as ShoppingCart from './cart.js'; //to import all
ShoppingCart.addToCart('bread', 5);

//blocking code
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users'); //top level await blocks entire module execution
// console.log('finish fetching')

// import add, { addToCart, totalPrice as price, totalQuantity } from './cart.js';
// add('pizza', 2);
// add('pizza', 123);
// add('pizza', 5);
// not advisable to mix named and default exports

import add, { cart } from './cart.js';
add('pizza', 2);
add('pizza', 123);
add('pizza', 5);
//the import is not just a copy. its a live connection

console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts'); //now its blocking the execution
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); //now its blocking the execution
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

//not clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

// The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

//common js modules
//export
// Export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };

//import
// const { addToCart } = require('./cart.js');

// import cloneSet from 'lodash-es/_cloneSet.js';

// const
// import toString from './node_modules/lodash-es/toString.js';
import camelCase from '../node_modules/lodash-es/camelCase.js';
//.. takes u out of folder
const a = 2;
console.log(camelCase('osama bin laden'));

// console.log(toString(2));
