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

// Making HTTP Requests                               ---------------------------(*)
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

// Customizing HTTP Requests                           ---------------------------(*)

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233';

// request({ url: url, json: true }, (error, response) => {
//   console.log(response.body.current);
// });

// To work with JSON, we can add "JSON Formatter" extension on Chrome

//
// Goal: Print a small forecast to the user            ---------------------------(*)
//
// 1. Print: "It is currently 9 degress out. It flles like 5 degrees out."
// 2. Test your work!

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233';

// request({ url: url, json: true }, (error, response) => {
//   //   console.log(response.body);
//   //   console.log(response.body.current);
//   console.log(
//     'It is currently ' +
//       response.body.current.temperature +
//       ' degrees out. It feels like ' +
//       response.body.current.feelslike +
//       ' degrees out'
//   );
// });

// // To change the units (like *C to *F)  (&units=f)  ---------------------------(*)

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   //   console.log(response.body);
//   //   console.log(response.body.current);
//   console.log(
//     'It is currently ' +
//       response.body.current.temperature +
//       ' degrees out. It feels like ' +
//       response.body.current.feelslike +
//       ' degrees out'
//   );
// });

// // To add WeatherDescription                        ---------------------------(*)

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   //   console.log(response.body);
//   //   console.log(response.body.current);
//   console.log(
//     response.body.current.weather_descriptions[0] +
//       '. It is currently ' +
//       response.body.current.temperature +
//       ' degrees out. It feels like ' +
//       response.body.current.feelslike +
//       ' degrees out'
//   );
// });

// // HTTP request Challenge                          ---------------------------(*)
// Geocoding
// Address -> Lat/Long -> Weather
// mapbox.com
// https://docs.mapbox.com/api/search
// https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json
// https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json?access_token=pk.eyJ1joI.....&limit=1

// {
//     "type": "FC",
//     "query": {},
//     "features": [],
//     "attribution": ""
// }

// features :- place_name >> LA, US
//             center >> longitude, latitude

//
// Goal: Print the lat/long for Los Angeles    -------------(*)
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

// const request = require('request');

// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233&units=f';
// const urlmp =
//   'https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json?access_token=pk.eyJ1joI.....&limit=1';
// // ('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1joI.....&limit=1');

// request({ url: urlmp, json: true }, (error, response) => {
//   //   console.log(response.body);
//   //   console.log(response.body.current);
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   //   console.log('Latitude : ' + latitude + '\n' + 'Longitude : ' + longitude);
//   console.log(latitude, longitude);
// });

// // Handling Errors                                ---------------------------(*)
// Suppose if we are not connected to Internet
