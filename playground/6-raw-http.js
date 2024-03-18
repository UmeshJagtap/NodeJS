const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=8cf78b463a4dccfca6ef49cda44bf3a0&query=45,-75&units=f';

const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
    // console.log(data);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});
request.end();

// Ref :- https://nodejs.org/docs/latest/api/http.html#httprequestoptions-callback

// OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)
// $ node 6-raw-http.js
// {
//   success: false,
//   error: {
//     code: 101,
//     type: 'invalid_access_key',
//     info: 'You have not supplied a valid API Access Key. [Technical Support: support@apilayer.com]'
//   }
// }
