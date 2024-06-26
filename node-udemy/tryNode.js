// // Listdown Processes  --------- ( + )
// console.log(`Hello Node.js`, process);

// // Importing ES6 module -------- ( + )
// import { sum } from './notes.js';
// console.log(sum(1, 2));
// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js
// 3

// Using chalk  ---------------- ( + )
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

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js
// Success!

// // Installation yargs --------- ( + )
// // Terminal :-
// // notes-app$ npm i yargs@12.0.2   or   npm i yargs

// // -------------------------------------- Adding title ---(*)
// Getting Input from Users

// const command = process.argv[2];
// console.log(process.argv);

// if (command === 'add') {
//   console.log('Adding note!');
// } else if (command === 'remove') {
//   console.log('Removing note!');
// }

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js add --title="ABCDE"
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\ZUK\\Documents\\GitHub\\NodeJS\\node udemy\\tryNode.js',
//   'add',
//   '--title=ABCDE'
// ]
// Adding note!

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// node tryNode.js remove --title="UVWXYZ"
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\ZUK\\Documents\\GitHub\\NodeJS\\node udemy\\tryNode.js',
//   'remove',
//   '--title=UVWXYZ'
// ]
// Removing note!

// ES6 yargs   --------- ( + )
// Yargs be a node.js library fer hearties tryin' ter parse optstrings
// import Yargs from 'yargs';
// const args = Yargs(process.argv.slice(2)).argv;
// console.log(args.arg1);

// // Command -
// // node script.js --arg1=xyz

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js --arg1="UVWXYZ"
// UVWXYZ

// import Yargs from 'yargs';
// const args = Yargs(process.argv.slice(2)).argv;
// console.log(args);
// console.log(args.arg1);

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js --arg1="UVWXYZ"
// { _: [], arg1: 'UVWXYZ', '$0': 'tryNode.js' }
// UVWXYZ

// // Customize yargs version -------- ( + )
// import yargs from 'yargs';
// yargs.version('12.0.1');
// console.log(yargs.argv);

// // OUTPUT ( Version remained the latest one )
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js
// { _: [], '$0': 'tryNode.js' }

// ----------------------- Argument Parsing with Yargs ---(*)

// // notes.js
// export const getNotes = function () {
//     return 'Your notes...';
// };

// import yargs from 'yargs'; // const yargs = require('yargs/yargs');
// import { getNotes } from './notes.js'; // const getNotes = require('./notes');

// const msg = getNotes();
// console.log(msg);

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node udemy (main)
// $ node tryNode.js
// Your notes...

// import argv from 'yargs';
// console.log(process.argv.slice(2).parse());

// process.argv.slice(2).parse();
// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!');
// } else {
//   console.log('Retreat from the xupptumblers!');
// }

// // #!/usr/bin/env node
// import yargs from 'yargs';
// // const yargs = require('yargs/yargs');
// // import hideBin from 'yargs/helpers';
// // const { hideBin } = require('yargs/helpers');
// const argv = yargs(process.argv.slice(2));
// console.log(argv);
// // process.argv.slice(2);
// if (argv.ships > 3 && argv.distance < 53.5) {
//   console.log('Plunder more riffiwobbles!');
// } else {
//   console.log('Retreat from the xupptumblers!');
// }

// $ ./plunder.js --ships=4 --distance=22
// Plunder more riffiwobbles!

// $ ./plunder.js --ships 12 --distance 98.7
// Retreat from the xupptumblers!

// const argv = process.argv.slice(2);
// console.log(argv);
// if (argv.ships > 3 && argv.distance < 53.5) {}

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --ships=4 --distance=60
// [ '--ships=4', '--distance=60' ]

// --------------------------------------- (^*^)
// YARGS - Handling parameters in NodeJS CLI Applications

// const argv = process.argv.slice(2);
// console.log(argv);

// if (argv[0] == '--build') {
//   console.log(argv[1]);
// }

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --build ASDF
// [ '--build', 'ASDF' ]
// ASDF

// const argv = process.argv.slice(2);
// console.log(argv);

// if (argv[0] == '--build') {
//   if (argv[1] === 'uat') {
//     console.log('do uat build');
//   } else {
//     console.log('other build');
//   }
// }

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --build uat
// [ '--build', 'uat' ]
// do uat build

// import yargs from 'yargs';

// const argv = yargs(process.argv.slice(2)).argv;
// console.log(argv);

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --build uat
// { _: [], build: 'uat', '$0': 'tryNode.js' }

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --server box1 --build uat
// { _: [], server: 'box1', build: 'uat', '$0': 'tryNode.js' }

import yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).argv;
console.log(argv);

if (argv.build == 'uat') {
  console.log('do uat build');
} else {
  console.log('other build');
}

// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/node-udemy (main)
// $ node tryNode.js --server box1 --build uat
// { _: [], server: 'box1', build: 'uat', '$0': 'tryNode.js' }
// do uat build

// --------------------------------------- (^*^)
