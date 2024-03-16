// const greeter = (name) => {
//   console.log('Hello ' + name);
// };

// greeter('Andrew');
// greeter()

// // playground$ node 7-default-params.js
// Hello Andrew
// Hello undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const greeter = (name = 'user', age) => {
    console.log('Hello ' + name);
  };
  
  greeter('Andrew');
  greeter()
  
// playground$ node 7-default-params.js
// Hello Andrew
// Hello user
  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Default params and destructuring...
  
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}
  
transaction('order')
  
// playground$ node 7-default-params.js
// order undefined 0
  
  
// https://puzzle.mead.io/puzzle