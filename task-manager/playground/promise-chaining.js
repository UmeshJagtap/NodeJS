require('../src/db/mongoose');
const User = require('../src/models/user');

// https://mongoosejs.com/docs/queries.html
// Model.findByIdAndUpdate()

User.findByIdAndUpdate('5c13e...beac1', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

// TERMINAL
// task-manager$ node playground/promise-chaining.js
// { age: 0,
// _id: 5c13e...beac1,
// name: 'Andrew',
// email: 'myemail@mead.io',
// __v: 0 }
// 1

// Running again with User.findByIdAndUpdate('5c1a5...8f6bc', { age: 1 })
// task-manager$ node playground/promise-chaining.js
// { age: 0,
// _id: 5c1a5...8f6bc,
// name: 'Andrew',
// email: 'myemail@mead.io',
// __v: 0 }
// 2

// task-manager >> src >> db >> mongoose.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://27.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,   // w=Wil  remove deprecation warnings
// });
