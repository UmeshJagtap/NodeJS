//
// normal function ststement

function sayHi() {
  console.log('hi');
}

sayHi();

//
// function expression

var sayBye = function () {
  console.log('bye');
};

sayBye();

//
// function callback

function callFunction(fun) {
  fun();
}

callFunction(sayHi);
callFunction(sayBye);
