//
// What is Asynchronous Programming ?  ---------------------
//

// ► A programming model where tasks do not block execution.
// ► Code continues running while waiting for I/O or long operations to finish.
// ► Enables non-blocking behavior using callbacks, promises, async/await.
// ► Especially useful for I/O-heavy, network-heavy applications.

// ► Why Asynchronous Matters in Node.js
//   ► Node.js operates on a single-threaded event loop.
//   ► To handle thousands of requests concurrently, blocking operations must be avoided.
//   ► Asynchronous programming allows Node.js to stay fast and scalable.

//
// Types of Asynchronous Patterns ---------------------
//

// Types :-
// Callbacks, Promises, Async/Await, Event Emitters, Streams

// Asynchronous vs Synchronous

// > Synchronous
//   > One task at a time
//   > Blocking behaviour
//   > Slower for I/O-bound operations

// > Asynchronous
//   > Multiple tasks handled concurrently
//   > Non-blocking I/O
//   > Better performance and scalibility

// Examples :-

// > Synchronous
// const fs = require('fs');
// const data = fs.readFileSync('file.txt');
// console.log(data.toString());
// console.log("Done");

// > Asynchronous
// fs.readFile('file.txt', (err, data) => {
//   console.log(data.toString());
// });
// console.log("Done");

//
// Benefits of Asynchronous Programming ---------------------
//

// High Performance - handles thousands of concurrent requests
// Great for I/O heavy apps: API's, microservices, DB operatoins
// Better resource usage.
// Reduced latency & improved user experience.

// Real world applications :-
// ► API servers
// ► Database operations
// ► File system operations
// ► Network requests
// ► Event-driven systems
// ► Background jobs & timers

//
// Basics for non-blocking, asynchronous js program :- ----------------
//

function myDisplayer(some) {
  console.log(some + ' ');
}

myDisplayer('Start');

setTimeout(function () {
  myDisplayer('Later');
}, 1000);

myDisplayer('End');
