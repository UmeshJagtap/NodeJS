// Node.js Serenade

// Course Intro -Node.js Serenade  -------------------------------------------------------------------
// Async programming with Promises  ------------------------------------------------------------------
// Callback heaven with async/await  -----------------------------------------------------------------

// What is Async/Await?
// Train Example
//    Normal Async Prog:- Blocking UI for CPU bound process
//    Async/Await Progm:- CPU bound and UI bound do not block each other

// Instead of using Promise.then() to resolve your promise to a value, prefixing await to promise makes your code to pause until the value is available.
// Then proceeds execution as the value were synchronous. This should be enclosed inside an async function.

// Promise Vs Async/Await
// Below example depicts the difference between promise and async/await :
// This example rewritten with async/await would look something like this -

// app.post('/messages', async (req, res) => {
//   var message = new Message(req.body)
//   var savedMessage = await message.save()

//   console.log('saved')

//   var censored = await Message.findOne({ message: 'badword' })

//   if (censored)
//     await Message.remove({ _id: censored.id })
//   else
//     io.emit('message', req.body)

//   res.sendStatus(200)
// })

// Async/Await Detailed
//    Ionic example

// async getHello() {
//   const greeting = this.hello.sayHello().then((data) => {
//     this.greeting = data;
//     console.log(this.greeting);
//     console.log("I'm only going to run AFTER sayHello is finished.");
//   })
// }

// // Not TESTED
// sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 3000);
//   })
// }

// async function getHello() {
//   const greeting = await this.hello.sayHello();
//   console.log("I'm only going to run AFTER sayHello is finished.");
// }

// Why Async/Await ?
// The reasons for growing popularity of async/await include :

// * The code written is concise and clean than that of using promises and callbacks.
// * There are better error handling capabilities.
// * The intermediate values produced by promises which are needed for nesting can be avoided making the code simple.
// * One major concern of promises error stakes can be easily pointed to the function containing them using async/await.
// * The killer advantage of async/await is its easy debugging capabilities.

// Common Async/Await Design Patterns
// Retrying Failed Requests
// Processing a MongoDB Cursor
// Multiple Requests in Parallel

// Retrying Failed Requests
// Await lets us write an asynchronous code using synchronous language constructors.
// In this, you might retry a failed HTTP request using the Superagent HTTP libraries using callbacks

//

// Retrying Failed Requests...
// Now using async/await we can write a function with a for and try/catch block
// const superagent = require('superagent');

// const NUM_RETRIES = 3;

// test();

// async function test() {
//   let i;
//   for (i = 0; i < NUM_RETRIES; ++i) {
//     try {
//       await superagent.get('http://google.com/this-throws-an-error');
//       break;
//     } catch (err) {}
//   }
//   console.log(i); // 3
// }

// await must always be in async function.

// Processing a MongoDB Cursor
// MongoDB's find() function returns a cursor. This is an object with an asynchronous next() function that gets the next document in the query result. If there are no more results, next() resolves to null.

// MongoDB cursors have several helper functions like each(), map(), toArray() and the mongoose ODM adds an additional eachAsync() function. Without using aync/await, calling next() would be similar to the retry failure example. But by using async/await, you need not use any helper functions but jst a simple for loop

// const mongodb = require('mongodb');
// import mongodb from 'mongodb';

// test();

// async function test() {
//   const db = await mongodb.MongoClient.connect(
//     'mongodb://localhost:27017/test'
//   );

//   await db.collection('Movies').drop();
//   await db
//     .collection('Movies')
//     .insertMany([
//       { name: 'Enter the Dragon' },
//       { name: 'Ip Man' },
//       { name: 'Kickboxer' },
//     ]);

//   // Don't `await`, instead get a cursor
//   const cursor = db.collection('Movies').find();
//   // Use `next()` and `await` to exhaust the cursor
//   for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
//     console.log(doc.name);
//   }
// }

// Multiple Requests in Parallel
// Now we deal with multiple asychronous tasks in parallel, say, we want to hash multiple plaintext passwords in parallel with bcrypt.
// bcrypt is nothing but a password hashing function based on Blowfish cipher.

// Let us take a look at the example below:
// import bcrypt from 'bcrypt';
// // const bcrypt = require('bcrypt');

// const NUM_SALT_ROUNDS = 8;

// test();

// async function test() {
//   const pws = ['password', 'password1', 'passw0rd'];

//   // `promises` is an array of promises, because `bcrypt.hash()` returns a
//   // promise if no callback is supplied.
//   const promises = pws.map((pw) => bcrypt.hash(pw, NUM_SALT_ROUNDS));

//   /**
//    * Prints hashed passwords, for example:
//    * [ '$2a$08$nUmCaLsQ9rUaGHIiQgFpAOkE2QPrn1Pyx02s4s8HC2zlh7E.o9wxC',
//    *   '$2a$08$wdktZmCtsGrorU1mFWvJIOx3A0fbT7yJktRsRfNXa9HLGHOZ8GRjS',
//    *   '$2a$08$VCdMy8NSwC8r9ip8eKI1QuBd9wSxPnZoZBw8b1QskK77tL2gxrUk.' ]
//    */
//   console.log(await Promise.all(promises));
// }
//
// Multiple Requests in Parallel...
// promise.all() function takes an array of promises and returns a promise that waits for every promise in array to resolve and it resolves into array that contains the value each promise in the original array resolved to. and await Promise.all(promises) is the result of each of the bcrypt.hash() calls.

// This is not only way to handle multiple async functions in parallel,there is promise.race().

// Take a look at the example with promise.race() using async/await:
// /**
//  * Prints below:
//  * waited 250
//  * resolved to 250
//  * waited 500
//  * waited 1000
//  */

//  test();

//  async function test() {
//    const promises = [250, 500, 1000].map(ms => wait(ms));
//    console.log('resolved to', await Promise.race(promises));
//  }

//  async function wait(ms) {
//    await new Promise(resolve => setTimeout(() => resolve(), ms));
//    console.log('waited', ms);
//    return ms;
//  }

// More about Async/Await

// index.js
// var GithubApi = require('github');
// import GithubApi from 'github';

// var github = new GithubApi({
//   version: '3.0.0',
// });

// function getPentaCodeAvatar() {
//   return new Promise((resolve, reject) => {
//     github.search.users({ q: 'pentacode ' }, (err, res) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       let avatarUrl = '';
//       if (res.data && res.data.items) {
//         avatarUrl = res.data.items[0].avatar_url;
//       }
//       resolve(avatarUrl);
//     });
//   });
// }

// function GetReactAvatar() {
//   return new Promise((resolve, reject) => {
//     github.search.users({ q: 'react ' }, (err, res) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       let avatarUrl = '';
//       if (res.data && res.data.items) {
//         avatarUrl = res.data.items[0].avatar_url;
//       }
//       resolve(avatarUrl);
//     });
//   });
// }

// PROMISE BASED ===================
// getPentaCodeAvatar()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log('Error in getPentaCodeAvatarFunction (Promise Based)', e);
//   });

// Async Await ===================
// async function start() {
//   const avatarUrl = await getPentaCodeAvatar();
//   console.log(avatarUrl);
// }
// start();

// Async Await Handle Error ===================
// async function start() {
//   try {
//     const avatarUrl = await getPentaCodeAvatar();
//     console.log(avatarUrl);
//   } catch (e) {
//     console.log('Error in getPentaCodeAvatarFunction (Async Await Based)', e);
//   }
// }
// start();

// Async Await Synchronous ===================
// async function startSynchronous() {
//   try {
//     const pentaCodeAvatarUrl = await getPentaCodeAvatar();
//     const reactAvatarUrl = await GetReactAvatar();
//     const totalURL = pentaCodeAvatarUrl + reactAvatarUrl;
//     console.log(totalURL);
//   } catch (e) {
//     console.error('Error in startSynchronous (Async Await Based)', e);
//   }
// }

// Async Await Parallel ===================

// function getPentaCodeAvatar() {
//   setTimeout(() => {
//     console.log('from getPentaCodeAvatar fuction');
//   }, 3000);
// }
// function GetReactAvatar() {
//   setTimeout(() => {
//     console.log('from GetReactAvatar fuction');
//   }, 2000);
// }
// async function startParallel() {
//   try {
//     let [pentaCodeAvatarUrl, reactAvatarUrl] = await Promise.all([
//       getPentaCodeAvatar(),
//       GetReactAvatar(),
//     ]);
//     console.log(pentaCodeAvatarUrl, reactAvatarUrl);
//   } catch (e) {
//     console.error('Error in startParallel (Async Await Based)', e);
//   }
// }
// startParallel();
//

// Try out Async/await Hands-on  =============  HANDS ON  =============

// Caching in Node.js  -------------------------------------------------------------------------------
//
//  QUIZ
//

// Database with Node.js  ----------------------------------------------------------------------------

// An application would not be complete without you being able to store the data entered on the web page and retrieve when needed.
// So, how to use a database in your Node.js application? Node.js has a module for that too.

// YT Vid

// Database Migration in Node.js

// Schema 1.1    <--->   Schema 1.2

// Database Migration means transferring data from one database server/file to another database server/file.
// For example, in any database, programmers will have different environments like DEVelopment, User Acceptance Testing,
// PRODuction and may want to migrate database objects from one environment to another at various stages of development.

// DB Migration in Node.js...
// Node.js has 2 npm package for playing around with databases.
// Sequelize
// db-migrate

// These Node.js frameworks supports DB migration for database types mentioned below:
// MySQL
// PostgreSQL
// sqlite3
// Mongodb

// DB Migration with Sequelize.js
// Sequelize is an npm package which allows you to modify, undo modification or migrate
// your database schema objects in your Node.js application.

// YT Vid

// DB Migration with db-migrate
// Now let us see how db migration can be done using db-migration module.
// As a first step, the npm package has to be installed.
//   To install db-migrate as global dependency: npm install -g db-migrate
//   To install db-migrate as a local module npm install db-migrate
// and now the module is installed in the location
// node node_modules/db-migrate/bin/db-migrate

// Syntax for using db-migrate

// db-migrate [up|down|reset|create|db] [[dbname/]migrationName|all] [options]

// up --> Normal migration. Optional.
// down --> To revert migration that is already done.
// Mandatory. Migration name is not required when using this option.

// Options:
// -e --> The environment in which the migration is to be run. default value: "dev"
// -m --> Location of the migration files. default value: "./migrations"
// -c --> Max number of migrations to be run. default value: 1
// -run --> Prints the SQL but doesn't run it. boolean
// -v --> Verbose mode. default value: false
// -config --> Location of the database.json file. default: "./database.json" etc

// Best Practices in DB Migration
// Identify data issues as early as possible and make sure cleaning, transformation are done before migrating the data.
// Identify the location and type of the database objects that you are going to migrate and also any constraints if applicable.
// Test and Validate the data once migrated.
// Principle for database refactoring is --
//   Every change you make must be backward compatible with the rest of the system

// Database Migration in Node.js
// Quiz

// Authentication Using Passport.js --------------------------------------------------------------

// What is Authentication Using Passport.js ?

// LOGIN (userone, password) >> verify strategy (X) >> !Authentication Failed
// LOGIN (userone, password) >> verify strategy (V) >> Login Successfull
//   >> User is added to backend cookie table
// User LogsOut
//   >> User is deleted from backend cookie table

// While logging into any of websites such as social networking websites or banking websites, have you ever thought How would I implement such an authentication functionality in my application?.

// For this Node.js provides an npm package called Passport.js for that.

// Passport is an authentication middleware for apps running on Node.js or Express frameworks.
// It takes out the pain of setting up manual authentication by providing different authentication mechanisms or strategies for authentication like local ( authenticate using username and password), facebook ,twitter,google and more.
// It is extremely flexible and modular in usage.

// Installing Passport
// $npm install passport

// How to Use Passport

// There are three main steps in using passport.js:
// Requiring the module and using its passport.initialize() and passport.session() middleware with express.
// Configuring passport with at least one Strategy and setting up passport's serializeUser and deserializeUser methods.
// Specifying a route which uses the passport.authenticate() middleware to actually authenticate a user.

// How to Implement Local Strategy
//
// YT Vid
//

// Passport Methods and Middleware Summary
// * passport.initialize middleware is invoked on every request. It ensures the session contains a passport.user object, which may be empty.
// * passport.session middleware is a Passport Strategy which will load the user object onto req.user if a serialised user object was found in the server.
// * passport.deserializeUser is invoked on every request by passport.session. It enables us to load additional user information on every request.
//        This user object is attached to the request as req.user making it accessible in our request handling.
// * Local Strategy is only invoked on the route which uses the passport.authenticate middleware.
// * Only during this authentication passport.serializeUser is invoked allowing us to specify what user information should be stored in the session.

// Risks in Node.js
// Buffer vulnerabilities due to built-in memory management.
// Vulnerabilities caused by Native serialisation (JS and JSON) and Type manipulation in Node.js.
// Vulnerabilities carried from dependencies or npm packages that you pull.
// Regular Expression Denial of Service (ReDoS) vulnerability was reported on HMAC package.

// Best Practices in Node.js Security

// Here are few tips to follow to ensure security in your Node.js application:
// Consider encoding and encryption wherever appropriate.
// Avoid long-running algorithms.
// Be careful with type manipulation.
// Once the application is developed, do a regression testing to find vulnerabilities.
// Fix all vulnerabilities as much as possible.
// Make sure not to add any vulnerable (npm) packages after testing.
// Respond to new vulnerabilities as early as possible.
// Use tools like nsp or snyk to ensure the security of third party packages that you use in your application.

//
// Quiz on Passport.js
//

// Socket.IO  --------------------------------------------------------------

// What is Socket.IO ?
// In a chat application like Facebook messenger or Whatsapp you are able to see the other person's status like say typing or seen message or delivered etc in a realtime manner.
// This is not achieved by the regular HTTP calls because they are very slow and limited. So if we want this real time in our application, we can achieve it using Socket.Io module of npm.
// Sockets are really fast and are capable of sending only those data packets which are needed. It enables real-time event-based communication between one or more clients and a server.
// It is often used in analytics, document collaboration, streaming and instant messaging.
