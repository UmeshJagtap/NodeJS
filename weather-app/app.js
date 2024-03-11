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

// const request = require('request');
// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json?access_token=pk.eyJ1joI.....&limit=1';
// // ('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1joI.....&limit=1');
// request({ url: geocodeURL, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   console.log(latitude, longitude);
// });

// // Handling Errors                                ---------------------------(*)
// Suppose if we are not connected to Internet

// ** weatherstack_API **

// const request = require('request');
// const url =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=37.8267,122.4233&units=f';
// const brokenurl =
//   'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=&units=f';
// request({ url: brokenurl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degrees out. It feels like ' +
//         response.body.current.feelslike +
//         ' degrees out'
//     );
//   }
// });

// To break out weatherstack api, we have to remove both longitude and latitude.

// ** geoCode_API **

// const request = require('request');
// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1joI.....&limit=1';
// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to geolocation service!');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search.');
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

// The Callback Function  // Callback Abstraction       ---------------------------(*)

// geocode.js
// const geocode = (address, callback) => {
//   // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1joI.....&limit=1';
//   const url =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
//     encodeURIComponent(address) +
//     '.json?access_token=pk.eyJ1joI.....&limit=1'; // ? becomes %3F

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback('Unable to connect to location services!', undefined);
//     } else if (response.body.features.length === 0) {
//       callback('Unable to find location. Try another search.', undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[1],
//         longitude: response.body.features[0].center[0],
//         location: response.body.features[0].place_name,
//       });
//     }
//   });
// };

// geocode('Philadelphia New York', (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });

// Callback Abstraction
// app.js
// const geocode = require('./utils/geocode');
// geocode('Boston', (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });

// The Callback Function  // Callback Abstraction     ---------------------------(*)

// forecast.js
// const request = require('request');

// const forecast = (longitude, latitude, callback) => {
//   const url =
//     'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=' +
//     longitude +
//     ',' +
//     latitude +
//     '&units=f';

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback('Unable to connect to weather service!', undefined);
//     } else if (response.body.error) {
//       callback('Unable to find location', undefined);
//     } else {
//       callback(
//         undefined,
//         'It is currently ' +
//           response.body.current.temperature +
//           ' degrees out. It feels like ' +
//           response.body.current.feelslike +
//           ' degrees out'
//       );
//     }
//   });
// };

// module.exports = forecast;

// // Callback Abstraction    ---------------------------(*)v(*)
// // app.js
// const forecast = require('./utils/forecast');
// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });

// // Callback Chaining      ----------------------------(*)v(*)
// // app.js;
// const geocode = require('./utils/geocode');
// const forecast = require('./utils/forecast');

// geocode('Boston', (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log(data.location);
//     console.log(forecastData);
//   });
// });

// //
// // Goal: Accept location via command line argument
// //
// // 1. Access the command line argument without yargs
// // 2. Use the string value as the input for gecode
// // 3. Only geocode if a location was provided
// // 4. Test your work with a couple locations

// const geocode = require('./utils/geocode');
// const forecast = require('./utils/forecast');

// const address = process.argv[2];

// // console.log(process.argv);

// if (!address) {
//   console.log('Please provide an address');
// } else {
//   // geocode('Boston', (error, data) => {
//   geocode(address, (error, data) => {
//     // Calling geocode API
//     if (error) {
//       return console.log(error);
//     }
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//       // Calling forecast API
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(forecastData);
//     });
//   });
// }

//
// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forecast.js, and geocode.js
// 2. Use property shorthand in forecast.s and geocode.js
// 3. Test your work and ensure app still works

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

// console.log(process.argv);

if (!address) {
  console.log('Please provide an address');
} else {
  // geocode('Boston', (error, data) => {
  // geocode(address, (error, data) => {
  geocode(address, (error, { latitude, longitude, location }) => {
    // OR
    // geocode(address, (error, { latitude, longitude, location } = {} ) => {
    // Calling geocode API
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      // Calling forecast API
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
