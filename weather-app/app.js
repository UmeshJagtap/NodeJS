console.log('Starting..');

setTimeout(() => {
  console.log('2 sec Timer');
}, 2000); // 2000 milisec = 2 sec

setTimeout(() => {
  console.log('0 sec Timer');
}, 0);

console.log('Stopping..');

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/weather-app (main)
// $ node app.js
// Starting..
// Stopping..
// 0 sec Timer
// 2 sec Timer
