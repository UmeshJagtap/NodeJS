// ---------------------------------------------------------------<<(+)>> (Ref Code form https://mongoosejs.com/)

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// ---------------------------------------------------------------<<(+)>>

// MONGOOSE First TRY
// Install
// task-manager$ npm i mongoose@5.3.10

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: { type: String },
  age: { type: Number },
});

const me = new User({
  name: 'Andrew',
  age: 27,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error', error);
  });

// \GitHub\NodeJS\task-manager\src\db> node .\mongoose.js
// { _id: 5c12...d438, name: 'Andrew', age: 27, __v: 0 }
