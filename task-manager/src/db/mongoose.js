// Mongoose
// https://mongoosejs.com/

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// What is Mongoose?  --------------------(*)
// Mongoose is an elegant Object Data Modeling (ODM) library built for MongoDB and JavaScript.

// Setting up Mongoose

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const User = mongoose.model('User', {
//     name: { type: String },
//     age: { type: Number }
// })

// const me = new User({
//     name: 'Andrew',
//     age: 27
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// \GitHub\NodeJS\task-manager\src\db> node .\mongoose.js
// { _id: 5c12...d438, name: 'Andrew', age: 27, __v: 0 }

// If we change age: 'Mike' ans re-run the file
// It will throw an validation object, letting us know what went wrong

// Creating a Mongoose model  --------------------(*)
//
// Goal: Create a model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance of the models
// 3. Save the model to the database
// 4. Test your work

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task = new Task({
//   description: 'Learn the Mongoose library',
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   });

// $ node src/db/mongoose.js
// { _id: 5c13..cee, description: '', completed: false __v:0 }

// // Data Validation and Sanitization: Part I --------------------(*)

// // https://mongoosejs.com/docs/guide.html -( difficult to understand )

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//   },
// });

// const me = new User({});

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // $ node src/db/mongoose.js
// // Error! { ValidationError: User validation failed: name: Path 'name' is required.  .... }

// // Providing name as below  ----------()
// const User = mongoose.model('User', {
//     name: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//     },
//   });

//   const me = new User({
//     name: 'Mike',
//   });

//   me.save()
//     .then(() => {
//       console.log(me);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   // $ node src/db/mongoose.js
//   // { _id: 5c13..fea, name: 'Mike', __v:0 }

//   // Custom validator
//   const User = mongoose.model('User', {
//     name: {
//       type: String,
//       required: true,
//     },
//     age: {
//       type: Number,
//       validate(value) {
//         if (value < 0) {
//           throw new Error('Age must be a positive number')
//         }
//       }
//     },
//   });

//   const me = new User({
//     name: 'Mike',
//     age = -1
//   });

//   me.save()
//     .then(() => {
//       console.log(me);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   // $ node src/db/mongoose.js
//   // properties: { message: 'Age must be a positive number',..}

//   // !!!! When validating more complex things like Emails, Phone Numbers, Social Security Numbers and others ..it is typically best to use well tested library, that already handles that for you..

//   // There is already an library for this "npm validator"
//   // https://www.npmjs.com/package/validator

//   // Install validator
//   // $ npm i validator@10.9.0

// // Validator  ----------()
// const mongoose = require('mongoose');
// const validator = require('validator');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewParser: true,
//   useCreateIndex: true,
// });

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number');
//       }
//     },
//   },
// });

// const me = new User({
//   name: 'Mike',
//   email: 'mike@',
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // $ node src/db/mongoose.js
// // properties: { message: 'Email is invalid', ..}

// // Trim  ----------()

// const mongoose = require('mongoose');
// const validator = require('validator');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewParser: true,
//   useCreateIndex: true,
// });

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number');
//       }
//     },
//   },
// });

// const me = new User({
//   name: '    Andrew   ',
//   email: 'MYEMAIL@MEAD.IO    ',
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // $ node src/db/mongoose.js
// // { _id: 5c13..ac1, name: 'Andrew', email: 'myemail@mead.io', __v:0 }

// Data Validation and Sanitization: Part II--------------------(*)

// //
// // Goal: Add a password field to User
// //
// // 1. Setup the field as a required string
// // 2. Ensure the length is greater than 6
// // 3. Trip the password
// // 4. Ensure that password doesn't contain "password"
// // 5. Test your work!

// const mongoose = require('mongoose');
// const validator = require('validator');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewParser: true,
//   useCreateIndex: true,
// });

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Email is invalid');
//       }
//     },
//   },
//   passowrd: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('Passowrd cannot contain "password"');
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number');
//       }
//     },
//   },
// });

// const me = new User({
//   name: '    Andrew   ',
//   email: 'MYEMAIL@MEAD.IO    ',
//   // passowrd: '    re32   ',
//   // passowrd: 'Password123',
//   passowrd: 'phone@98!',
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // For passowrd: '    re32   ',
// // $ node src/db/mongoose.js
// // properties: { validator: [Function], message: 'Path `pasword` (`re32`) is shorter than the minimum allowed length (7).', ..}

// // For passowrd: 'Password123',
// // $ node src/db/mongoose.js
// // properties: { message: 'Password cannot contain password', ..}

// // For passowrd: 'phone@98!',
// // $ node src/db/mongoose.js
// // { age: 0, _id: 5c13..5b5, name: 'Andrew', email: 'myemail@mead.io', __v:0, password: 'phone@98!' __v: 0 }

//
// Goal: Add validation and sanitization to task
//
// 1. Trim the description and make it required
// 2. Make completed optional and default it to false
// 3. Test your work with and without errors

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   // description: 'Learn the Mongoose library',
//   description: '  Eat lunch',
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   });

// // For const task = new Task({}); i.e. empty description
// // $ node src/db/mongoose.js
// // properties: { validator: [Function], message: 'Path `description` is required.', ..}

// // For description: '  Eat lunch',
// // $ node src/db/mongoose.js
// // { completed: false, _id: 5c13..f40, description: 'Eat lunch',  __v:0 }

// Structuring a REST API --------------------(*)
// THE REST API
// Representational State Transfer -Application Programming Interface (REST API or RESTful API)

// API provides tools and helps us to build software applications
// REST API is stateless -each request contains everything needed
// for server to process that request, includes operations we need to perform, data and authentication.

// Client   --- GET /tasks/a7eaa -->   Server
//             << 200 - JSON response

// To post data ( I'm Andrew and I need to create a todo )
// Client   --- POST /tasks - JSON request  --->  Server
// Identity confirmed Task created
//              << 201 - SON response
// Time to render the data

// THE TASK RESOURCE

// Create POST /tasks

// Read   GET /tasks
// Read   GET /tasks/:id

// Update   PATCH  /tasks/:id

// Delete   DELETE /tasks/:id

// Request
// POST /tasks HTTP/1.1
// Accept: application/json
// Connection: Keep-Alive
// Authorization: Bearer eyJhbG...QiOiI...
// {"description": "Order new drill bits"}

// Response
// HTTP/1.1 201 Created
// Date: Sun, 28 Jul 2019 15:37:37 GMT
// Server: Express
// Content-Type: application/json
// {"_id": "5c13ec...e5b5", "description": "Order new drill bits", "completed": false}

// Installing POSTMAN
// https://www.postman.com/downloads/
// https://web.postman.co/workspace/My-Workspace~4a5cdb5b-9b0a-459c-8d9d-546245b8e7c6/request/create?requestId=d3274914-3aba-4da7-b72d-2b3b4edd03da

// GET v | https://mead-weather-application.herokuapp.com/weather?address=boston  ( There's nothing here, yet.)
// {
//     "forecast": "Mostly cloudy until afternoon. It is currently 28.66 degrees out. The hing today is 30.81 with low of 23.44, There is a 0% chance of rain.",
//     "location": "Boston, Massachusetts, United States",
//     "address": "boston"
// }
// Status: 200 OK   Time: 605 ms    Size: 470 B

// Resource Creation Endpoints: Part I --------------------(*)
// task-manager$ npm i nodemon@1.18.9 --save-dev
// task-manager$ npm i express@4.16.4
