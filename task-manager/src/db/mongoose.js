
// Setting up Mongoose

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

// const User = mongoose.model('User', {
//     name: { type: String },
//     age: { type: Number }
// })

// const me = new User({
//     name: 'Andrew',
//     age: 27
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// \GitHub\NodeJS\task-manager\src\db> node .\mongoose.js
// { _id: 5c12...d438, name: 'Andrew', age: 27, __v: 0 }

// If we change age: 'Mike' ans re-run the file
// It will throw an validation object, letting us know what went wrong


// Creating a Mongoose model
//
// Goal: Create a model for tasks
//
// 1. Define the model with description and completed fields
// 2. Create a new instance of the models
// 3. Save the model to the database
// 4. Test your work

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: { type: String },
    completed: { type: Boolean }
})

const task = new Task({
    description: 'Learn the Mongoose Library',
    completed: flase
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error', error)
})

// Data Validation and Sanitization: Part I