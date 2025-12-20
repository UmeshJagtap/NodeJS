const { MongoClient } = require('mongodb');
// const uri = require("./atlas_uri");

const uri = 'mongodb+srv://umeshjagtap78.....';
console.log(uri);

const client = new MongoClient(uri);
const dbname = 'bank';

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database (0)`);
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

// Run the main function
main();

// Output
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/test (main)
// $ node app.js
// Connected to the bank database (0)
