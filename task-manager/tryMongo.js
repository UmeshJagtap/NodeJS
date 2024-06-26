const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly');

    // const db = client.db(databaseName); // creates a new db connection to specific database
    // db.collection('users').insertOne({
    //   name: 'Andrew',
    //   age: 27,
    // });
  }
);
