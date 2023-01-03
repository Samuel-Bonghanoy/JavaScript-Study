//exporting module
console.log('exporting module');

const shippingCost = 10; //can only be used here
export const cart = [];

//exports need to happen in top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
};

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

//default exports are used when u want to export one thing per module

export default function (product, quantity) {
  //export a value without name
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}`);
}
