// Hello Express
// https://expressjs.com/

// npm init -y
// npm i express

// $ node app.js

// localhost:3000

// ** IMP NOTE  **
// After any changes in express code are done,
// server needs to be restarted to reflect the changes...

// http://localhost:3000/
// http://localhost:3000/help
// http://localhost:3000/about

// Simple Express Server    -----------------------------(*)

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

// // Serving ->> Static Assets  ---------------------------------(*)

// const path = require('path');
// const express = require('express');

// const app = express();
// const publicDirectoryPath = path.join(__dirname, '../public');

// app.use(express.static(publicDirectoryPath));

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'It is snowing',
//     location: 'Pune',
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is up on port 3000.');
// });

// // Serving up CSS, JS, Images and More     ---------------------(*)

// Have added css file as web-server >> public >> css >> styles.css   and updated the link tag
// And Image as web-server >> public >> img >> robo.jpg   and updated the img tag

// // Dynamic Pages with Templating   -----------------------------(*)

// npm handlebars  --templating tool (low level lib)
// npm hbs

// // Dynamic Pages with Templating

// npm handlebars  --templating tool (low level lib)
// npm hbs

// // app.js
// const path = require('path');
// const express = require('express');

// const app = express();
// const publicDirectoryPath = path.join(__dirname, '../public');

// app.set('view engine', 'hbs');
// app.use(express.static(publicDirectoryPath));

// app.get('', (req, res) => {
//   res.render('index', {
//     title: 'Weather App',
//     name: 'Andrew Mead',
//   });
// });

// app.get('/about', (req, res) => {
//   res.render('about', {
//     title: 'About Me',
//     name: 'Andrew',
//   });
// });

// //
// // Goal: Create a template for help page
// //
// // 1. Setup a help template to render a help message to the screen
// // 2. Setup the help route and render the template with an example message
// // 3. Visit the route in browser and see your help message print

// app.get('/help', (req, res) => {
//   res.render('help', {
//     example: 'Help Me',
//     helpText: 'This is some helpful text.',
//   });
// });

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'It is snowing',
//     location: 'Pune',
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is up on port 3000.');
// });

// web-server >> src >> views >> help.hbs
{
  /* <html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Document</title>
    <link rel='stylesheet' href='/css/styles.css' />
  </head>
  <body>
    <h1>Help</h1>
    <p>{{example}}</p>
    <p>{{helpText}}</p>

  </body>
</html> */
}
