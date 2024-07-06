const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
  // Function now returns Promise rather than a value..as it is Asyn fun now.

  const user = new User(req.body);

  try {
    await user.save();
  } catch (e) {
    res.status(400).send(e);
  }

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
});

router.get('/users', async (req, res) => {
  // Reading all users

  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
  //   User.find({})
  //     .then((users) => {
  //       res.send(users);
  //     })
  //     .catch((e) => {
  //       res.status(500).send();
  //     });
});

router.get('/users/:id', async (req, res) => {
  // Route parameters
  // console.log(req.params);
  const _id = req.params.id;
  try {
    const user = User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }

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
});

// To restrict invalid addition of properties
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    // https://mongoosejs.com/docs/queries.html
    // Model.findByIdAndUpdate()
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(201).send(e);
  }
});

// https://mongoosejs.com/docs/queries.html
// Model.findByIdAndDelete()

router.delete('/user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

module.express = router;
