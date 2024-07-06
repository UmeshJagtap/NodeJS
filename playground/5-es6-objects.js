// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadelphia',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// // const { label, stock } = product;
// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating); // undefined

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);

// OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)
// $ node 5-es6-objects.js
// { name: 'Andrew', age: 27, location: 'Philadelphia' }
// order Red notebook 201
