// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ( Normal Function )

// const greeter = (name) => {
//   console.log('Hello ' + name);
// };

// greeter('Andrew');
// greeter()

// // playground$ node 7-default-params.js
// Hello Andrew
// Hello undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ( Default Parameters )

const greeter = (name = 'user', age) => {
  console.log('Hello ' + name);
};

greeter('Andrew');
greeter();

// playground$ node 7-default-params.js
// Hello Andrew
// Hello user

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ( Default params and destructuring... )

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction('order');

// playground$ node 7-default-params.js
// order undefined 0

// https://puzzle.mead.io/puzzle

// OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)
// $ node 7-default-params.js
// Hello Andrew
// Hello user
// order undefined 0
