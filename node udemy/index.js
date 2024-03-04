// Commands:
// run `node index.js` in the terminal
// npm install
// npm i chalk@2.4.1   or   npm i chalk
// node index.js

// // Listdown Processes  --------- ( + )
// console.log(`Hello Node.js`, process);

// // Importing ES6 module -------- ( + )
// import { sum } from './notes.js';
// console.log(sum(1, 2));

// // Using chalk  ---------------- ( + )
// import chalk from 'chalk'; // const chalk = require('chalk'); (CommanJS)

// const string = 'Success!';
// // console.log(chalk.green(string));
// // console.log(chalk.green.bold(string));
// console.log(chalk.green.bold.inverse(string));

// // console.log(chalk.red.bold(string));
// // console.log(chalk.blue.bold('Hello world!'));
// // console.log(chalk.yellow.bold('DEMO'));

// // console.log(chalk.bgRed.bold('Error'));
// // console.log(chalk.bgGreen.bold('Success'));
// // console.log(chalk.bgYellowBright.bold('Warning'));

// // Installation yargs --------- ( + )
// // Terminal :-
// // notes-app$ npm i yargs@12.0.2   or   npm i yargs

// // -------------------------------------- Adding title ---(*)

// const command = process.argv[2];
// console.log(process.argv);

// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Removing note!');
// }

// // > node index.js add --title="ABCDEFG"
// // [
// //   '/usr/local/bin/node',
// //   '/home/projects/node-czi2yw/index.js',
// //   'add',
// //   '--title=ABCDEFG'
// // ]
// // Adding note!

// // ES6 yargs   --------- ( + )
// import Yargs from 'yargs';
// const args = Yargs(process.argv.slice(2)).argv;
// console.log(args.arg1);

// // Command -
// // node script.js --arg1=xyz

// // Customize yargs version -------- ( + )
// yargs.version('12.0.1');
// console.log(yargs.argv);

// ----------------------- Argument Parsing with Yargs ---(*)
// const yargs = require('yargs');

// import yargs from 'yargs'; // const yargs = require('yargs/yargs');

// import { getNotes } from './notes.js'; // const getNotes = require('./notes');

// const msg = getNotes();
// console.log(msg);

var argv = require('yargs/yargs')(process.argv.slice(2)).parse();
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!');
} else {
  console.log('Retreat from the xupptumblers!');
}
