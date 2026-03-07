// Name
// User Image
// Email ID
// Password

import express from 'express';

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

// Create task
// app.post('/user', (req, res) => {
//   const [title, status = 'pending'] = req.body || {};
//   if (!title || typeof title !== 'string') {
//     return res
//       .status(400)
//       .json({ error: 'BadRequest', messge: 'Title is required (string)' });
//   }
//   if (!['pending', 'in-progress', 'done'].includes(status)) {
//     return res
//       .status(400)
//       .json({ error: 'BadRequest', message: 'Invalid status' });
//   }
//   const task = {
//     id: nextId++,
//     title,
//     status,
//     createdAt: new Date().toDateString(),
//   };
//   tasks.push(task);
//   res.status(201).json(task);
// });

// Create user
app.post('/user', (req, res) => {
  const { name, email, password, image } = req.body || {};
  if (!name || typeof name !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Name is required (string)' });
  }
  if (!email || typeof email !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Email is required' });
  }
  if (!password || typeof password !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Password is required' });
  }
  const user = {
    id: nextId++,
    name,
    email,
    password,
    image,
  };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('server running on 3000');
});
