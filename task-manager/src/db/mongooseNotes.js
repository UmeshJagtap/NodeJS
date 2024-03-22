// Mongoose
// https://mongoosejs.com/

// Let's face it, writing MongoDB validation, casting and business logic boilerplate is a drag. That's why we wrote Mongoose.

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// Mongoose provides a straight-forward, schema-based solution to model your application data.
// It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

// What is Mongoose?  --------------------(*)
// Mongoose is an elegant Object Data Modeling (ODM) library built for MongoDB and JavaScript.

// Setting up Mongoose

// Install
// task-manager$ npm i mongoose@5.3.10

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

// // src > db > index.js
// const express = require('express');

// const app = express();
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// // In package.json
// delete line { test: 'echo "Error: no test specified" && exit 1' };
// add "scripts": {
//   "start": "node src/index.js",
//   "dev": "nodemon src/index.js"
// },

// // Terminal
// /task-manager$ npm run dev
// [nodemon] starting `node src/index.js`
// Server is up on port 3000

// // src > db > index.js
// const express = require('express');

// const app = express();
// const port = process.env.PORT || 3000;

// app.post('/users', (req, res) => {
//   res.send('testing!');
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// POSTMAN >> Collections > []+ New Collection
// >> Name ( Task App ) >> Description ( ) >> Create

// Task App >> ... >> Add Request >> Request name >> Create user
// POST v | localhost:3000/users
// testing!

// How do we provide data necessary (email, name, password and other attrib..)
// >> Body >> raw >> Text to JSON (application/json)
// {
//   "name": "Andrew Mead",
//   "email": "andrew@example.com",
//   "password": "Red12315"
// }
// Status: 200 OK

// // To automatically parse JSON for us accessible as object for use
// // src > index.js
// const express = require('express');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object
// app.post('/users', (req, res) => {
//   console.log(req.body);
//   res.send('testing!');
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// Save, nodemon will run automatically in terminal

// POSTMAN
// POST v | localhost:3000/users   >>   [ Send ]
// >> Body >> raw >> Text to JSON (application/json)
// {
//   "name": "Andrew Mead",
//   "email": "andrew@example.com",
//   "password": "Red12315"
// }

// Terminal
// Server in up on port 3000
// { name: 'Andrew Mead',
//   email: 'andrew@example.com',
//   password: 'Red12315' }

// Now we know how to grab, incoming body data and we can actually use it to create new user,
// to get that done we have to make sure mongoose connects to database and we need to get access to our user model from inside of this file

// ----------------------------------------------- +++
// Create new Folder : src >> models >> user.js

// const mongoose = require('mongoose');
// const validator = require('validator');

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

// module.exports = User;

// ----------------------------------------------- +++
// src >> db >> mongoose.js

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewParser: true,
//   useCreateIndex: true,
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

// ----------------------------------------------- +++
// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object
// app.post('/users', (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       // res.status(400);
//       // res.send(e);
//       res.status(400).send(e);
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// Validating ...
// POSTMAN
// POST v | localhost:3000/users   >>   [ Send ]
// >> Body >> raw >> Text to JSON (application/json)
// {
//   "name": "Andrew Mead",
//   "email": "andrew@example.com",
//   "password": "Red12315"
// }

// Body >> Pretty >> JSON
// {
//   "age": 0,
//   "_id": "5c1a...f6bc",
//   "name": "Andrew Mead",
//   "email": "andrew@example.com",
//   "passowrd": "Red123!$",
//   "__v": 0
// }

// HTTP Status Codes
// https://httpstatuses.com
// https://www.webfx.com/web-development/glossary/http-status-codes/

// ---- Re iterate the video -- verify the working -- (*v*)

// https://knome.ultimatix.net/private/blogposts/1036671
// - ( Wings1 May 2024 Assessment Registrations !! )

// Resource Creation Endpoints: Part II --------------------(*)

//
// Goal: Setup the task creation endpoint
//
// 1. Create a seprate file for the task model (load it into index.js)
// 2. Create the task creation endpoint (handle success and error)
// 3. Test the endpoint from postman with good or bad data

// // models >> task.js

// const mongoose = require('mongoose');

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

// module.exports = Task;

// // src >> db >> mongoose.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://27.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       // res.status(400);
//       // res.send(e);
//       res.status(400).send(e);
//     });
// });

// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// Resource Reading Endpoints: Part I --------------------(*)

// // src >> index.js
// app.get('/users', (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {});
// });

// POSTMAN
// Collections >> Task App >> Add a request >> Request name >> Read users
// GET v | localhost:3000/users   >>   [ Send ]
// >> Body >> raw >> Text to JSON (application/json)
// [
//   {
//     "age": 0,
//     "_id": "5c13e1...beac1",
//     "name": "Andrew",
//     "email": "myemail@mead.io",
//     "__v": 0
//   },
//   {
//     "age": 0,
//     "_id": "5c13e1...be6bc",
//     "name": "Andrew Maed",
//     "email": "myemail@mead.io",
//     "__v": 0
//   },
// ]
// Click [ Save ] for each request..

// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       // res.status(400);
//       // res.send(e);
//       res.status(400).send(e);
//     });
// });

// app.get('/users', (req, res) => {
//   // Reading all users
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/users/:id', (req, res) => {
//   // Route parameters
//   // console.log(req.params);
//   const _id = req.params.id;
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// For console.log(req.params);
// POSTMAN
// Collections >> Task App >> Add a request >> Request name >> Read user
// GET v | localhost:3000/users/08712340982        [ Send ] [Save]
// Loading...

// Terminal
// Server is up on port 3000
// { id: '08712340982' }

// For app.get('/users/:id', (req, res) => {}
// POSTMAN
// Collections >> Task App >> Add a request >> Request name >> Read user
// GET v | localhost:3000/users/08712340982        [ Send ] [Save]
// Blank

// Take a valid id from previous -Read users- request
// GET v | localhost:3000/users/5c13e1...eac1      [ Send ] [Save]
// Status: 200 OK
//   {
//     "age": 0,
//     "_id": "5c13e1...beac1",
//     "name": "Andrew",
//     "email": "myemail@mead.io",
//     "__v": 0
//   },

// Resource Reading Endpoints: Part II --------------------(*)

//
// Goal: Setup the task reading endpoint
//
// 1. Create an endpoint for fetching all tasks
// 2. Create an endpoint for fetching a task by its id
// 3. Setup new requests in Postman and test your work

// app.get('/tasks', (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// app.get('/tasks:id', (req, res) => {
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }

//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// For app.get('/tasks', (req, res) => {}
// POSTMAN
// Collections >> Task App >> Add a request >> Request name >> Read tasks
// GET v | localhost:3000/tasks       [ Send ] [Save]
// [
//   {
//     completed: false,
//     _id: '5c3cc...74cee',
//     description: 'Learn the Mongoose library',
//     __v: 0,
//   },
//   {
//     completed: false,
//     _id: '5c13e...2f40',
//     description: 'Eat Lunch',
//     __v: 0,
//   },
//   {
//     completed: false,
//     _id: '5c1a...d4661',
//     description: 'Finish Node.js course',
//     __v: 0,
//   },
//   {
//     completed: false,
//     _id: '5c1a6...5ab28',
//     description: 'Finish Node.js course',
//     __v: 0,
//   },
// ];

// For app.get('/tasks:id', (req, res) => {}
// POSTMAN
// Collections >> Task App >> Add a request >> Request name >> Read task
// GET v | localhost:3000/tasks/5c13e...2f40       [ Send ] [Save]
// {
//   completed: false,
//   _id: '5c13e...2f40',
//   description: 'Eat Lunch',
//   __v: 0,
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ TILL NOW
// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       // res.status(400);
//       // res.send(e);
//       res.status(400).send(e);
//     });
// });

// app.get('/users', (req, res) => {
//   // Reading all users
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/users/:id', (req, res) => {
//   // Route parameters
//   // console.log(req.params);
//   const _id = req.params.id;
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/tasks', (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// app.get('/tasks:id', (req, res) => {
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }

//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promise Chaining  --------------------(*)

// // task-manager >> playground >> promise-chaining.js

// require('../src/db/mongoose');
// const User = require('../src/models/user');

// // https://mongoosejs.com/docs/queries.html
// // Model.findByIdAndUpdate()

// User.findByIdAndUpdate('5c13e...beac1', { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // TERMINAL
// // task-manager$ node playground/promise-chaining.js
// // { age: 0,
// // _id: 5c13e...beac1,
// // name: 'Andrew',
// // email: 'myemail@mead.io',
// // __v: 0 }
// // 1

// // Running again with User.findByIdAndUpdate('5c1a5...8f6bc', { age: 1 })
// // task-manager$ node playground/promise-chaining.js
// // { age: 0,
// // _id: 5c1a5...8f6bc,
// // name: 'Andrew',
// // email: 'myemail@mead.io',
// // __v: 0 }
// // 2

// task-manager >> src >> db >> mongoose.js
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://27.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,   // w=Wil  remove deprecation warnings
// });

// Promise Chaining Challenge --------------------(*)
//
// Goal: Mess around with promise chaining
//
// 1. Create promise-chaining-2.js
// 2. Load in mongoose and task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete tasks
// 5. Test your work!

// // task-manager >> playground >> promise-chaining-2.js
// require('../src/db/mongoose');
// const Task = require('../src/models/task');

// // // https://mongoosejs.com/docs/queries.html
// // // Model.findByIdAndDelete()

// Task.findByIdAndDelete('5c13ed...112f40')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: flase });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // TERMINAL

// // For Task.findByIdAndDelete('5c13ed...112f40')
// // task-manager$ node playground/promise-chaining-2.js
// // { completed: false,
// // _id: 5c13ed...112f40,
// // description: "Eat lunch",
// // __v: 0 }
// // 3

// // For Task.findByIdAndDelete('5c13ed...5ab28')
// // task-manager$ node playground/promise-chaining-2.js
// // { completed: false,
// // _id: 5c13ed...5ab28,
// // description: "Finish Node.js course",
// // __v: 0 }
// // 2

// Async/Await --------------------(*)

// // NODE-COURSE >> playground >> 9-async-await.js

// const doWork = () => {};
// console.log(doWork());
// // node-course/playground$ node 9-async-await.js
// // undefined

// const doWork = async () => {};
// console.log(doWork());
// // node-course/playground$ node 9-async-await.js
// // Promise { undefined }

// const doWork = async () => {
//   return 'Andrew';
// };
// console.log(doWork());
// // node-course/playground$ node 9-async-await.js
// // Promise { 'Andrew' }

// const doWork = async () => {
//   return 'Andrew';
// };
// doWork()
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((e) => {
//     console.log('e', e);
//   });
// // node-course/playground$ node 9-async-await.js
// // Promise { 'Andrew' }

// const doWork = async () => {
//   throw new Error('Something went wrong');
//   return 'Andrew';
// };
// doWork()
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((e) => {
//     console.log('e', e);
//   });
// // node-course/playground$ node 9-async-await.js
// // Error: Someething went wrong

// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a < 0 || b < 0) {
//         return reject('Numbers must be non-negative');
//       }
//       resolve(a + b);
//     }, 2000);
//   });
// };
// const doWork = async () => {
//   const sum = await add(1, 99);
//   const sum2 = await add(sum, 50);
//   const sum3 = await add(sum2, 3);
//   return sum3;
// };
// doWork()
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((e) => {
//     console.log('e', e);
//   });

// // For const sum3 = await add(sum2, 3);
// // node-course/playground$ node 9-async-await.js
// // result 153

// // For const sum3 = await add(sum2, -3);
// // node-course/playground$ node 9-async-await.js
// // e Numbers must be non-negative

// Async/Await: Part II   --------------------(*)

// // task-manager >> playground >> promise-chaining.js

// require('../src/db/mongoose');
// const User = require('../src/models/user');

// // User.findByIdAndUpdate('5c13e...beac1', { age: 1 })
// //   .then((user) => {
// //     console.log(user);
// //     return User.countDocuments({ age: 1 });
// //   })
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return count;
// };

// updateAgeAndCount('5c13e...beac1', 2)
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // TERMINAL
// // task-manager$ node playground/promise-chaining.js
// // 1

//
// Goal: Use async/await    --------------(+)
//
// 1. Create deleteTaskAndCount as an async function
//    - Accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach/catch to log results
// 5. Test your work!

// // task-manager >> playground >> promise-chaining-2.js
// require('../src/db/mongoose');
// const Task = require('../src/models/task');

// // // https://mongoosejs.com/docs/queries.html
// // // Model.findByIdAndDelete()

// // Task.findByIdAndDelete('5c13ed...112f40')
// //   .then((task) => {
// //     console.log(task);
// //     return Task.countDocuments({ completed: flase });
// //   })
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });

// const deleteTaskAndCount = async (id) => {
//   const task = await Task.findByIdAndDelete(id);
//   const count = await Task.countDocuments({ completed: false });
//   return count;
// };

// deleteTaskAndCount('5c1a6...d4661')
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // TERMINAL
// // For deleteTaskAndCount('5c1a6...d4661')
// // task-manager$ node playground/promise-chaining-2.js
// // 1

// Integrating Async/Await   --------------------(*)

// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', async (req, res) => {
//   // Function now returns Promise rather than a value..as it is Asyn fun now.

//   const user = new User(req.body);

//   try {
//     await user.save();
//   } catch (e) {
//     res.status(400).send(e);
//   }

//   //   user
//   //     .save()
//   //     .then(() => {
//   //       res.send(user);
//   //     })
//   //     .catch((e) => {
//   //       // res.status(400);
//   //       // res.send(e);
//   //       res.status(400).send(e);
//   //     });
// });

// app.get('/users', async (req, res) => {
//   // Reading all users

//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
//   //   User.find({})
//   //     .then((users) => {
//   //       res.send(users);
//   //     })
//   //     .catch((e) => {
//   //       res.status(500).send();
//   //     });
// });

// app.get('/users/:id', async (req, res) => {
//   // Route parameters
//   // console.log(req.params);
//   const _id = req.params.id;
//   try {
//     const user = User.findById(_id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }

//   //   User.findById(_id)
//   //     .then((user) => {
//   //       if (!user) {
//   //         return res.status(404).send();
//   //       }

//   //       res.send(user);
//   //     })
//   //     .catch((e) => {
//   //       res.status(500).send();
//   //     });
// });

// //
// // Goal: Refactor task routes to use async/await
// //
// // 1. Refactor task routes to use async/await
// // 2. Test all routes in Postman

// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.get('/tasks:id', async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findById(_id);

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.post('/tasks', async (req, res) => {
//   const task = new Task(req.body);

//   try {
//     await task.save();
//     res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// // Resource Updating Endpoints: Part I   --------------------(*)

// // https://mongoosejs.com/docs/queries.html
// // Model.findByIdAndUpdate()

// app.patch('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// // For app.patch('/users/:id', async (req, res) => {}
// // POSTMAN
// // Collections >> Task App >> Add a request >> Request name >> Update user

// // Take a valid id from previous -Read users- request
// // PATCH v | localhost:3000/users/5c13e1...eac1    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "name": "Andrew Mead"
// // }

// // Status: 200 OK
// //   {
// //     "age": 1,
// //     "_id": "5c13e1...beac1",
// //     "name": "Andrew Mead",
// //     "email": "myemail@mead.io",
// //     "__v": 0
// //   }

// // Take a In-Valid id from previous -Read users- request (5c13e1...eac2 )
// // PATCH v | localhost:3000/users/5c13e1...eac1    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "name": "Andrew Mead"
// // }
// // Status: 404 Not Found

// // Take a valid id from previous -Read users- request (5c13e1...eac1 )
// // PATCH v | localhost:3000/users/5c13e1...eac1    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "name": ""
// // }
// // Status: 400 Bad Request
// // {
// //   "errors": {
// //       "name": {
// //         "message": "Path `name` is required",
// //         "name": "ValidatorError",
// //       }
// //   }
// // }

// // Take a valid id from previous -Read users- request (5c13e1...eac1)
// // PATCH v | localhost:3000/users/5c13e1...eac1    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "height": 72
// // }

// // Any of the New property which do not exist on the user, will be completed ignored,
// // We are going to see our Object but not our height property.
// // Status: 200 OK
// //   {
// //     "age": 1,
// //     "_id": "5c13e1...beac1",
// //     "name": "Andrew Mead",
// //     "email": "myemail@mead.io",
// //     "__v": 0
// //   }

// // To restrict invalid addition of properties
// app.patch('/users/:id', async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['name', 'email', 'password', 'age'];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }

//   try {
//     // https://mongoosejs.com/docs/queries.html
//     // Model.findByIdAndUpdate()
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(201).send(e);
//   }
// });

// // Take a valid id from previous -Read users- request (5c13e1...eac1)
// // PATCH v | localhost:3000/users/5c13e1...eac1    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "height": 72
// // }

// // Any of the New property which do not exist on the user, will be throw "Invalid updates" now
// // Status: 400 Bad Request
// //   {
// //     "error": "Invalid updates!",
// //   }

// Resource Updating Endpoints: Part II   --------------------(*)

//
// Goal : Allow for task updates
//
// 1. Setup the riute handler
// 2. Send error if unknown updates
// 3. Attempt to update the task
//    - Handle task not found
//    - Handle validation errors
// 4. Test your work!

app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// // For app.patch('/tasks/:id', async (req, res) => {}
// // POSTMAN
// // Collections >> Task App >> Add a request >> Request name >> Update task

// // Take a valid id from previous -Read tasks- request
// // PATCH v | localhost:3000/tasks/5c13cc...74cee    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "completed": true
// // }

// // Status: 200 OK
// //   {
// //     "completed": true,
// //     "_id": "5c13cc...74cee",
// //     "description": "Learn the Mongoose library",
// //     "__v": 0
// //   }

// // Take a valid id from previous -Read tasks- request (5c13cc...74cee)
// // PATCH v | localhost:3000/tasks/5c13cc...74cee    [ Send ] [Save]
// // Body >> raw >> Text --> jSON
// // {
// //   "completedd": true
// // }

// // Any of the New property which do not exist on the user, will be throw "Invalid updates" now
// // Status: 400 Bad Request
// //   {
// //     "error": "Invalid updates!",
// //   }

// Resource Deleting Endpoints   --------------------(*)

// https://mongoosejs.com/docs/queries.html
// Model.findByIdAndDelete()

app.delete('/user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

// // For app.delete('/user/:id', async (req, res) => {}
// // POSTMAN
// // Collections >> Task App >> Add a request >> Request name >> Delete user
// // Take a valid id from previous -Read users- request (5c13cc...7e5b5)
// // DELETE v | localhost:3000/users/5c13cc...7e5b5    [ Send ] [Save]
// // Save >> Send

// // Status: 200 OK
// //   {
// //     "age": 0,
// //     "_id": "5c13cc...7e5b5",
// //     "name": "Andrew",
// //     "email": "myemail@mead.io",
// //     "passowrd": "phone098!",
// //     "__v": 0
// //   }

// // Firing the same request with same id
// // DELETE v | localhost:3000/users/5c13cc...7e5b5    [ Send ] [Save]
// // Status: 404 Not Found

//
// Goal : Allow for removal of tasks
//
// 1. Setup the riute handler
// 2. Send error if unknown updates
// 3. Attempt to update the task
//    - Handle task not found
//    - Handle validation errors
// 4. Test your work!

app.delete('./tasks/:id');
