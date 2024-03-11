// // Simple Express Server    -----------------------------(*)

// const express = require('express');

// const app = express();

// app.get('', (req, res) => {
//   res.send('<h1>Weather</h1>');
// });
// app.get('/help', (req, res) => {
//   res.send('Help page');
// });
// app.get('/about', (req, res) => {
//   res.send('Page title');
// });
// app.listen(3000, () => {
//   console.log('Server is up on port 3000.');
// });

// // Challenges -Express      -----------------------------(*)
// const express = require('express');

// const app = express();

// // app.get('', (req, res) => {
// //   res.send('Hello express!');
// // });
// app.get('', (req, res) => {
//   res.send('<h1>Weather</h1>');
// });

// // app.get('/help', (req, res) => {
// //   res.send('Help page');
// // });
// // app.get('/help', (req, res) => {
// //   res.send({
// //     name: 'Andrew',
// //     age: 27,
// //   });
// // });
// app.get('/help', (req, res) => {
//   res.send([
//     {
//       name: 'Andrew',
//       age: 27,
//     },
//     {
//       name: 'Sarah',
//       age: 25,
//     },
//   ]);
// });

// app.com
// app.com/help
// app.com/about

// //
// // Goal: Setup two new routes   -----------------------------(*)
// //
// // 1. Setup an about route and render a page title
// // 2. Setup a weather route and render a page title
// // 3. Test your work by visiting both in browser

// app.get('/about', (req, res) => {
//   res.send('Page title');
// });

// app.get('/weather', (req, res) => {
//   res.send('Weather is cool over here.');
// });

// //
// // Goal: Update routes         -----------------------------(*)
// //
// // 1. Setup an about route and render a title with HTML
// // 2. Setup a weather route to send back JSON
// //      - Object with forecast and location strings
// // 3. Test your work by visiting both in browser

// app.get('/about1', (req, res) => {
//   res.send('<h1>About</h1>');
// });

// app.get('/weather1', (req, res) => {
//   res.send([
//     { forecast: 'Cloudy', location: 'Mumbai' },
//     { forecast: 'Rainy', location: 'Pune' },
//   ]);
// });

// app.listen(3000, () => {
//   console.log('Server is up on port 3000.');
// });

// Simple Express Server    -----------------------------(*)

const express = require('express');

console.log(__dirname);
console.log(__filename);

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>');
});
app.get('/help', (req, res) => {
  res.send('Help page');
});
app.get('/about', (req, res) => {
  res.send('<h2>Page title</h2>');
});
app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
