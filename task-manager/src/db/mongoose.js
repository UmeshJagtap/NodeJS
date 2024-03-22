const mongoose = require('mongoose');

mongoose.connect('mongodb://27.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
