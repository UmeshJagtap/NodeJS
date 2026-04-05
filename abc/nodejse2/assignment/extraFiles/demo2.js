// Name
// User Image
// Email ID
// Password

import express from 'express';
import ejs from 'ejs';

const app = express();

// const user = {
//   name: 'rohan',
//   email: 'rohan@123',
//   password: '1234',
// };

const users = [
  {
    name: 'rohan',
    email: 'rohan@123',
    password: '1234',
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
  {
    name: 'rohan2',
    email: 'rohan2@123',
    password: '1234',
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
];

let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', { people: people });
let data = {
  name: 'Akashdeep',
  hobbies: ['playing football', 'playing chess', 'cycling'],
};

app.get('/', (req, res) => {
  // The render method takes the name of the HTML
  // page to be rendered as input
  // This page should be in the views folder
  // in the root directory.

  // res.render('home');
  res.render('home', { name: 'Umesh_Jagtap', data: data });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('server running on 3000');
});
