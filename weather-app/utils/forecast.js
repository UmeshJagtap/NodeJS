//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request');

const forecast = (longitude, latitude, callback) => {
  const url =
    'https://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=' +
    longitude +
    ',' +
    latitude +
    '&units=f';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        'It is currently ' +
          response.body.current.temperature +
          ' degrees out. It feels like ' +
          response.body.current.feelslike +
          ' degrees out'
      );
    }
  });
};

module.exports = forecast;
