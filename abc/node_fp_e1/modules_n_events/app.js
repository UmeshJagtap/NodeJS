// app.js

// var atheletics = require('./atheletics');

// atheletics.relay();
// atheletics.longjump();

// // http server
// var http = require('http');

// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('Hello World!');
//     response.end();
//   })
//   .listen(8888);

// http://localhost:8888/
// Hello World!

// // fs module
// var fs = require('fs');

// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('Async data is : ', data.toString());
//   }
// });

// var data = fs.readFileSync('input.txt');
// console.log('Sync data is : ', data.toString());
// console.log('This is the end of the file');

// Output
// Sync data is :  this is a input file.
// This is the end of the file
// Async data is :  this is a input file.

// Events
var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function () {
  console.log('Ring Ring Ring');
  eventEmitter.emit('bellrings', 'Welcome');
};

eventEmitter.on('doorOpen', ringbell);
eventEmitter.on('bellrings', function (message) {
  console.log(message);
});
eventEmitter.emit('doorOpen');
