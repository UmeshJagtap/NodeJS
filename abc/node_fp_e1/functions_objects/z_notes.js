//-------------------------------------- Node.js

// Introduction to Node.js
// Let us get started with one of the important server-side scripting languages Node.js

// Node.js Usage
// Node.js shines in real-time web applications employing push technology over web sockets. It can be used for the following purposes:

// Web applications (especially real-time web apps)
//   Network applications
//   Distributed systems
//   General purpose applications

// Advantage of using node.js
//   Provides an easy way to build scalable network programs
//   Easy to install and run locally
//   Generally fast
//   Great concurrency
//   Asynchronous everything
//   Almost never blocks
//   Unified programming language and data type

//
// Hands-on 1: More on node.js -------------------------------- HANDS_ON
//
// Hands-on 2: More on node.js -------------------------------- HANDS_ON
//
// Global objects and timers
// This video tells you how to create global objects in Node.js and use them across different modules.

console.log(__dirname);
console.log(__filename);

//-------------------------------------- setTimeout
// function printstuff(text_to_print) {
//   condole.log(text_to_print);
// }

// const printstuff = (text_to_print) => {
//   console.log(text_to_print);
// };

// const messageMe = () => {
//   printstuff('Hello World');
// };

// setTimeout(messageMe, 2000);

// // console.log(typeof printstuff);
// // console.log(typeof messageMe);

//-------------------------------------- setInterval

// function printstuff() {
//   console.log('This is form setInterval');
// }
// setInterval(printstuff, 2000);

//
// Working with Timer   -------------------------------- HANDS_ON
//

//-------------------------------------- Callback Functions

// Callback Functions

// Callback function is used in Node.js to deal with multiple requests made to the server. If a server takes a long time to read a large file and if you don’t want a server to get engaged in reading that large file while dealing with other requests, the call back function is used. The Call back function allows the server to deal with the pending requests first and call a function when it is completed.

// Callback Functions

// Package delivery example
// Restaurent [ Customer <> Server <> Chef ]

// Example 1

// console.log('User made a request');
// console.log('Database operation takes 5 seconds');
// console.log('Data delivered to the user');

// console.log('User2 made a request');
// console.log('Database operation takes 5 seconds');
// console.log('Data delivered to the user2');

// console.log('User3 made a request');
// console.log('Database operation takes 5 seconds');
// console.log('Data delivered to the user3');

// Example 2

console.log('User made a request');
setTimeout(callback, 5000);

console.log('User2 made a request');
setTimeout(callback, 5000);

console.log('User3 made a request');
setTimeout(callback, 5000);

function callback() {
  console.log('Queried the database and delivered data in 5 seconds');
}

// So, callback function is another function that can be usually passed as an argument to another function, it is ivoked after some time of the event.

//-------------------------------------- Modules
//
// Modules
//
