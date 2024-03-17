
// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    // console.log('Connected correctly');

    const db = client.db(databaseName); // creates a new db connection to specific database
    db.collection('users').insertOne({
      name: 'Andrew',
      age: 27,
    });
  }
);

// $ node mongodb.js
// We can verify data reflection on Robo 3T
// Local MongoDB Database
// > task-manager > Collections > users
// Right click > View Documents
// db.getCollection('users').find({})
// _id,   ObjectId("5c0fde865a...734d") ObjectId
// name,  Andrew  string
// age    27      Int32

// MongoDB and Promises ( Task App )
// Inserting Documents

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName); // creates a new db connection to specific database
    db.collection('users').insertOne(
      {
        name: 'Andrew',
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.map);
      }
    );
  }
);

// $ node mongodb.js
// [ { name: 'Andrew', age: 27, _id: 5c0fe66..b5}]

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName); // creates a new db connection to specific database
    // db.collection('users').insertOne(
    //   {
    //     name: 'Andrew',
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    //
    // Goal: Insert 3 tasks into a new task collection
    //
    // 1. Use insertMany to insert the documents
    //    - description (string), completed (boolean)
    // 2. Setup the callback to handle error or print ops
    // 3. Run the script
    // 4. Refresh the database in Robo 3t and view data in task collection

    db.collection('tasks').insertMany(
      [
        { name: 'Prajakt', age: 30 },
        { name: 'Nishikant', age: 31 },
        { name: 'Omkar', age: 28 },
        { description: 'Clean the house', completed: true },
        { description: 'Renew inspection', completed: flase },
        { description: 'Pot plants', completed: true },
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks');
        }
        console.log(result.ops);
      }
    );
  }
);

// $ node mongodb.js
// [{ name: 'Prajakt', age: 30, _id: 5c0fe66..f83},
//  { name: 'Nishikant', age: 31, _id: 5c0fe66..f84}.
//  { name: 'Omkar', age: 28, _id: 5c0fe66..f85},
// { description: 'Clean the house', completed: true, _id: 5c0fe66..f91 },
// { description: 'Renew inspection', completed: flase, _id: 5c0fe66..f92 },
// { description: 'Pot plants', completed: true, _id: 5c0fe66..f93 },]

// The ObjectID

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
console.log(id.id); // Buffer data
console.log(id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);
    db.collection('users').insertOne(
      {
        _id: id,
        name: 'Vikram',
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      }
    );
  }
);

// MongoDB automatically auto generates _id for us.
// In most cases we dont need to know the Object_Id value

// Querying Documents

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
console.log(id.id); // Buffer data
console.log(id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').findOne({ name: 'Jen' }, (error, result) => {
      if (error) {
        return console.log('Unable to fetch');
      }

      console.log(user);
    });

    db.collection('users')
      .find({ age: 27 })
      .toArray((error, users) => {
        console.log(users);
      }); // Returns data with individual fields

    db.collection('users')
      .find({ age: 27 })
      .count((error, count) => {
        console.log(count);
      }); // Returns data + count
  }
);

// $ node mongodb.js
// { _id: 5c0fe66..f83, name: "Jen", age: 28 }

// If db.collection('users').findOne({ name: 'Jen', age: 1 }
// >> null

// If db.collection('users').findOne({ _id: "5c11132..f9071" }
// >> null

// If db.collection('users').findOne({ _id: new ObjectID("5c11132..f9071") }
// { _id: 5c11132..f9071, name: "Vikram", age: 26 }

//
// Goal: Use find and findOne with tasks
//
// 1. USe findOne to fetch the last task by its id (print doc to console)
// 2. Use find to fetch all tasks that are not completed (print docs to console)
// 3. Test your work!

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('tasks').findOne(
      { _id: new ObjectID('5c11132..62e2f') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        // .count((
        console.log(tasks);
      }); // Returns data with individual fields
  }
);

// Updating Documents

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    const updatePromise = db.collection('users').updateOne(
      { _id: new ObjectID('5c0fe...b5') },
      {
        $set: {
          name: 'Mike',
        },
      }
    );

    updatePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

// Very Common Pattern we gonna see...as below

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users')
      .updateOne(
        { _id: new ObjectID('5c0fe...b5') },
        {
          $set: {
            name: 'Mike',
          },
          // mongodb update operators
          $inc: {
            age: 1, // age: -1
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

//
// Goal: Use updateMany to complete all tasks
//
// 1. Check the documentation for updateMany
// 2. Setup the call with the query and the updates
// 3. Use promise methods to setup the success/error handlers
// 4. Test your work!

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    // .updateOne(
    //   { _id: new ObjectID('5c0fe...b5') },
    //   {
    //     $set: {
    //       name: 'Mike',
    //     },
    //     // mongodb update operators
    //     // https://www.mongodb.com/docs/v3.6/reference/operator/update/
    //     $inc: {
    //       age: 1, // age: -1
    //     },
    //   }
    // )

    db.collection('tasks')
      .updateMany({ completed: false }, { $set: { completed: true } })
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
// $ node mongodb.js
// 2

// Deleting Documents

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('tasks')
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('users')
      .deleteMany({
        age: 27,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
// $ node mongodb.js
// deletedCount: 2 }

//
// Goal: Use deleteOne to remove a task
//
// 1. Grab the description for the task you want to remove
// 2. Setup the call with the query
// 3. Use promise methods to setup the success/error handlers
// 4. Test your work!

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteOne({ description: 'Clean the house' })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);


// -----------------------( 0 )----------------------- Mongo DB

// Mongoose
// https://mongoosejs.com/

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

// What is Mongoose?
// Mongoose is an elegant Object Data Modeling (ODM) library built for MongoDB and JavaScript.
