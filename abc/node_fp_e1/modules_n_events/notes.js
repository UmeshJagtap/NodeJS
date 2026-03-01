//
// Modules -----------------------------------( ** )-
//

//         |-------|
//         |-------| App.js
//         |-------|
//            /|\
//           / | \
//          /  |  \
//    File1.js |  File3.js
//          File2.js

//  Large App is broken down in multiple files
//  Each individual file is called Module
//  Module == Related Code

// Code Example

// atheletics.js
function relay() {
  console.log('This is relay function');
}
function longjump() {
  console.log('This is longjump function');
}

module.exports.relay = relay;

// app.js

var atheletics = require('./atheletics');

atheletics.relay();
atheletics.longjump();

//
//
//
//
//

// Http Module -------------------------------------------
//

//
// fs module ---------------------------------------------

//
// Events -----------------------------------( ** )-
//

//
// Event Listeners ---------------------------------------
// Event listeners are similar to call back functions, but are associated with some event.
// For example, when a server listens to http request on a given port, an event will be generated and to specify http server has received and will invoke corresponding event listener.
// Basically, Event listeners are also call backs for a corresponding event.

//
// Callback_And_Events ---------------------------- HANDS ON
//

//
// Modules_And_FileSystem ------------------------- HANDS ON
//

// Events Quiz
