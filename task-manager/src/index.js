// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       // res.status(400);
//       // res.send(e);
//       res.status(400).send(e);
//     });
// });

// app.get('/users', (req, res) => {
//   // Reading all users
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/users/:id', (req, res) => {
//   // Route parameters
//   // console.log(req.params);
//   const _id = req.params.id;
//   User.findById(_id)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send();
//       }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get('/tasks', (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// app.get('/tasks:id', (req, res) => {
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }

//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send(e);
//     });
// });

// app.post('/tasks', (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

// // Integrating Async/Await     ----------------------------------- (*)

// // src >> index.js
// const express = require('express');
// require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); // automatically parse incoming json to an object

// app.post('/users', async (req, res) => {
//   // Function now returns Promise rather than a value..as it is Asyn fun now.

//   const user = new User(req.body);

//   try {
//     await user.save();
//   } catch (e) {
//     res.status(400).send(e);
//   }

//   //   user
//   //     .save()
//   //     .then(() => {
//   //       res.send(user);
//   //     })
//   //     .catch((e) => {
//   //       // res.status(400);
//   //       // res.send(e);
//   //       res.status(400).send(e);
//   //     });
// });

// app.get('/users', async (req, res) => {
//   // Reading all users

//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
//   //   User.find({})
//   //     .then((users) => {
//   //       res.send(users);
//   //     })
//   //     .catch((e) => {
//   //       res.status(500).send();
//   //     });
// });

// app.get('/users/:id', async (req, res) => {
//   // Route parameters
//   // console.log(req.params);
//   const _id = req.params.id;
//   try {
//     const user = User.findById(_id);

//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }

//   //   User.findById(_id)
//   //     .then((user) => {
//   //       if (!user) {
//   //         return res.status(404).send();
//   //       }

//   //       res.send(user);
//   //     })
//   //     .catch((e) => {
//   //       res.status(500).send();
//   //     });
// });

// //
// // Goal: Refactor task routes to use async/await
// //
// // 1. Refactor task routes to use async/await
// // 2. Test all routes in Postman

// app.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.send(tasks);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.get('/tasks:id', async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const task = await Task.findById(_id);

//     if (!task) {
//       return res.status(404).send();
//     }

//     res.send(task);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// app.post('/tasks', async (req, res) => {
//   const task = new Task(req.body);

//   try {
//     await task.save();
//     res.status(201).send(task); //  ( The request succeeded, and a new resource was created as a result. )
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// app.listen(port, () => {
//   console.log('Server is up on port ' + port);
// });

//     -------------------------

// task-manager >> index.js
const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// app.post('/users'. async (req, res) => {}) ..... Moved over to routers/user.js and routers/task.js

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
