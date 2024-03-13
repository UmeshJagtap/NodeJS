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

// // Serving up static Assets    -----------------------------(*)

// const path = require('path');
// const express = require('express');

// // console.log(__dirname);
// // console.log(__filename);
// // // console.log(path.join(__dirname, '..'));
// // // console.log(path.join(__dirname, '../..'));
// // console.log(path.join(__dirname, '../public'));

// const app = express();
// const publicDirectoryPath = path.join(__dirname, '../public');

// app.use(express.static(publicDirectoryPath));

// app.listen(3000, () => {
//   console.log('Server is up on port 3000.');
// });

// //
// // Goal: Create two more HTML files    -----------------------------(*)
// //
// // 1. Create a html page for about with "About" title
// // 2. Create a html page for help with "Help" title
// // 3. Remove the old route handlers for both
// // 4. Visit both in the browser to test your work

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

// // Serving up CSS, JS, Images and More    -----------------------------(*)
// Have added css file as web-server >> public >> css >> styles.css   and updated the link tag
// And Image as web-server >> public >> img >> robo.jpg   and updated the img tag

// // // Dynamic Pages with Templating

// // npm handlebars  --templating tool (low level lib)
// // npm hbs

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

// // Customizing the views directory    -----------------------------(*)

const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
// app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Andrew Mead',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Andrew',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    example: 'Help Me',
    helpText: 'This is some helpful text.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Pune',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});

// // Advanced Templating    -----------------------------(*)
// // 404 Pages    -----------------------------(*)
// // Accessing API from Browser    -----------------------------(*)
