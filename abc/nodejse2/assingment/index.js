import express from 'express';

const app = express();

const users = [
  {
    name: 'umesh',
    email: 'umesh321@gmail.com',
    password: 'umesh56$78',
    imageurl:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    role: 'SuperAdmin',
  },
  {
    name: 'rohan',
    email: 'rohan123@gmail.com',
    password: 'rohan@4523',
    imageurl:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    role: 'EditAdmin',
  },
];

app.set('view engine', 'ejs');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Route TEST
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

// *v* Login
app.get('/', (req, res) => {
  res.render('login');
});

// 1. GET /api/users
app.get('/api/user-list', (req, res) => {
  res.render('user-list', { name: 'Umesh_Jagtap', users: users });
  // res.json(users);
});

// 2. GET /api/users/:id
app.get('/user', (req, res) => {
  res.render('user', { name: 'Umesh_Jagtap', users: users });
  // res.json(users);
});

app.get('/user-form', (req, res) => {
  res.render('user-form'); // Renders views/userForm.ejs
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

// Loin
app.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  console.log('Login Data received : ', email, password);
});
// Create user

app.post('/create-user', (req, res) => {
  // res.set('Content-Type', 'text/plain'); // Set a single header
  // res.set({
  //   'Cache-Control': 'no-cache', // Set multiple headers using an object
  //   'X-Custom-Header': 'my-value',
  // });

  const { name, email, password, imageurl } = req.body || {};
  console.log('Data received : ', name, email, password, imageurl);
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
  // const id = 0;
  const user = {
    // id: id++,
    name,
    email,
    password,
    imageurl,
  };
  console.log('USERDATA to be POSTED to USERS', user);

  async function createUser(user) {
    try {
      users.push(user);
      console.log('User created Successfully .. ');
      res.status(201).json(user);
    } catch (error) {
      throw error;
    }
  }

  createUser(user);
});

// 3. POST /api/users
// 4. PUT /api/users/:id
// 5. DELETE /api/users/:id

app.listen(3000, () => {
  console.log('server running on 3000');
});

// Sample Data to POST
// http://localhost:3000/create-user
// {
//   "name":"Umesh",
//   "email":"Umesh123@mail.com",
//   "password":"Umesh123",
//   "image": "http://abc.img.com"
// }

// GET http://localhost:3000/api/users
// GET http://localhost:3000/api/users/:id

// 1. GET /api/users
// 2. GET /api/users/:id
// 3. POST /api/users
// 4. PUT /api/users/:id
// 5. DELETE /api/users/:id

// My Endpoints
// http://localhost:3000/user-form

// http://localhost:3000/api/user-list
