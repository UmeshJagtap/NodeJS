// Ref :- https://www.w3schools.com/js/js_asynchronous.asp

// What You Will Learn :-
// What are Timeouts
// Why callbacks were created
// How promises represent future values.
// Why async and await are preferred.
// How to debug async code.

// Asynchronous Concepts ----------------------  ++ ( ^v^ ) ++
// JavaScript handles asynchronus programming using different core concepts.

// Concept	Description
// Synchronus	The JavaScript standard flow is executing line by line
// Timers	Allows code to run while other code is waiting
// Callbacks	Callbacks were the first solution for async JavaScript
// Events	Stores callback function waiting to be executed
// Promises	Tools to handle asynchronous operations cleanly
// Async/Await	The clean and modern way to handle async code

//  setTimeout  ----------------------  ++ ( ^v^ ) ++

// example 1
// let result;
// setTimeout(function () {
//   result = 5;
//   console.log(result);
// }, 1000);

// example 2
// function myFunction() {
//   console.log('I love You !!');
// }
// setTimeout(myFunction, 3000);

//  setInterval  ----------------------  ++ ( ^v^ ) ++

// setInterval(myFunction, 5000);

// function myFunction() {
//   let d = new Date();
//   console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
// }

//
// Basics for non-blocking, asynchronous js program :- ----------------------  ++ ( ^v^ ) ++
//

// function myDisplayer(some) {
//   console.log(some + ' ');
// }

// myDisplayer('Start');

// setTimeout(function () {
//   myDisplayer('Later');
// }, 1000);

// myDisplayer('End');

//
// JavaScript Callbacks ----------------------  ++ ( ^v^ ) ++
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback6

// "I will call back later!"
// A callback is a function that runs "later".
// A callback runs after another function finishes.
// Callbacks were the first solution for asynchronous JavaScript.

// Callbacks exist because async results are not available immediately.  <<<----- VIMP !!!!!

// The Timing Problem ----------------------  ++ ( ^v^ ) ++
// Asynchronous code finishes later.
// This means you cannot return the result right away (before they are finished).

// let result;

// setTimeout(function () {
//   result = 5;
// }, 1000);

// console.log(result);

// What is result here?
// The result is undefined.

// The async code has not finished yet.

//
// The Callback Idea ---------------------  ++ ( ^v^ ) ++
// The solution to the problem above, is to run the code when the result is ready.
// You must give JavaScript a function to call later.
// This function is called a callback.

// A callback is a function passed as an argument to another function

// function myDisplayer(some) {
//   console.log(some + ' ');
// }

// function done(value) {
//   myDisplayer(value);
// }

// setTimeout(function () {
//   done(5);
// }, 2000);

// The value is used inside the callback.
// This works because the callback runs later.

// Sequence Control ---------------------  ++ ( ^v^ ) ++
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could first call the calculator function myCalculator, and then call the display function myDisplayer:

// Example 1
// // Funtion to display something
// function myDisplayer(some) {
//   console.log(some + ' ');
// }

// // Function to calculate a sum
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// // Call the calculator
// let result = myCalculator(5, 5);

// // Call the displayer
// myDisplayer(result);

// Or, you could call the calculator function myCalculator, and let the calculator function call the display function myDisplayer:
// Example 2

// // Funtion to display something
// function myDisplayer(some) {
//   console.log(some + ' ');
// }

// // Function to calculate a sum
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// // Call the calculator
// myCalculator(5, 5);

// The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
// Now it is time to bring in a callback.

// JavaScript Callbacks ---------------------  ++ ( ^v^ ) ++
// A callback is a function passed as an argument to another function.
// A callback is a function that is passed as an argument to another function, and is intended to be executed at a later point in time, typically when a specific event occurs or an asynchronous operation completes.

// Example (Callbacks)
// function myDisplayer(some) {
//   console.log(some + ' ');
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is used as a callback function.
// It is passed to myCalculator() as an argument.

// // Example 2
// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// console.log(posNumbers);
// // document.getElementById('demo').innerHTML = posNumbers;

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// // Example 2 ( simplified )
// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// console.log(posNumbers);
// // document.getElementById('demo').innerHTML = posNumbers;

// In the example above, (x) => x >= 0 is a callback function.
// It is passed to removeNeg() as an argument.

// Callbacks In Real Async Code ---------------------  ++ ( ^v^ ) ++

// Timers use callbacks.
// Events use callbacks.

// Example:

// setTimeout(function() {
//   console.log("Runs later");
// }, 1000);

// The function runs after one second.

// Callback Error Handling ---------------------  ++ ( ^v^ ) ++

// Async code can fail.
// Callbacks often use an error-first pattern.

// Example

// function getData(callback) {
//   let ok = true;

//   if (ok) {
//     callback(null, "Data");
//   } else {
//     callback("Something failed", null);
//   }
// }

// getData(function(error, data) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });

// Note
// The first parameter is the error.
// The second parameter is the result.
// This pattern is common in older JavaScript code.

// The Problem With Many Callbacks ---------------------  ++ ( ^v^ ) ++

// Callbacks can solve solve timing problems.
// But many callbacks become hard to read and hard to maintain.

// Example
// step1(function(r1) {
//   step2(r1, function(r2) {
//     step3(r2, function(r3) {
//       console.log(r3);
//     });
//   });
// });

// Note
// The style above is often called callback hell.
// When callbacks get deep, debugging becomes difficult.
// The logic moves from left to right and becomes difficult to follow.

// Callback Alternatives ---------------------  ++ ( ^v^ ) ++

// With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.
// But, asynchronus programmes are difficult to write and difficult to debug.
// Because of this, most modern asynchronous JavaScript do not use callbacks.
// Instead, asynchronous programming is solved using Promises.

// Why Promises Were Created ---------------------  ++ ( ^v^ ) ++

// Promises were created to make async code easier to read.
// Promises also make error handling more consistent.
// Promises are the modern solution.

// When to Use a Callback? ---------------------  ++ ( ^v^ ) ++

// Callbacks are still important to understand.
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
