// console.log('Starting..');

// setTimeout(() => {
//   console.log('2 sec Timer');
// }, 2000); // 2000 milisec = 2 sec

// setTimeout(() => {
//   console.log('0 sec Timer');
// }, 0);

// console.log('Stopping..');

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/weather-app (main)
// $ node app.js
// Starting..
// Stopping..
// 0 sec Timer
// 2 sec Timer

// Call Stack ( main >> setTimeout(..., 2000) >> setTimeout(..., 0) >> console.log('Fin...')
//                   >> Callback (0 sec) >> console.log('Zero sec...') >> Callback (2 sec) >> console.log('Two...'))
//              Node APIs ( setTimeout (2 sec) >> setTimeout (0 sec) )
//                          Event Loop / Callback Queue ( Callback (0 sec) >> Callback (2 sec) )

// JavaScript is SingleThreaded programming language
// Non blocking nature of Code

// Callback Queue -maintain a list of the callback functions that are ready to get executed
// Event Loop - Looks at the call stack  and  call back queue,
//                 if call stack is empty, its going to run items from the call back queue

// Making HTTP Requests
// https://darksky.net/forecast/40.727    --taken over by apple
// https://weatherstack.com  >> SignUp for Free tier >> API Key
// BASE URL --> https://api.weatherstack.com
// BASE URL --> https://api.weatherstack.com/current?key=value&name=andrew
// BASE URL --> https://api.weatherstack.com/current?access_key=value&query=37.8267,122.4233
// BASE URL --> https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233

// https://www.npmjs.com/package/request
// npm i request
// https://www.npmjs.com/package/postman-request

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233';

// request({ url: url }, (error, response) => {
//   // console.log(response);
//   const data = JSON.parse(response.body);
//   console.log(data.current);
// });

// Customizing HTTP Requests
