// Name
// User Image
// Email ID
// Password

import express from 'express';
import ejs from 'ejs';

const app = express();

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
    password: '5678',
    image:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
];

let data = {
  name: 'Akashdeep',
  hobbies: ['playing football', 'playing chess', 'cycling'],
};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { name: 'Umesh_Jagtap', data: data });
});

app.get('/users', (req, res) => {
  res.render('users', { name: 'Umesh_Jagtap', users: users });
  // res.json(users);
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('server running on 3000');
});
