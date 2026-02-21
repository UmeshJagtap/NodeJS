// File System in Node.js
// RestAPI & GraphQL
// Template Engine

//
// session 3 ( file system )
//

// const fs = require('fs');
import fs from 'fs/promises';

fs.writeFile('test.txt', 'hello world', (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('file created');
  }
});

async function readFileFirst() {
  try {
    const test = await fs.readFile('test.txt');
    console.log(test);
  } catch (err) {
    console.log(err);
  }
}

readFileFirst();

// -------------------------- OUTPUT
// $ node filesystem.js
// <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// -------------------------------------------------------------------------------

//
// NODE JS File System [ w3schools ]
//

// The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.
// It allows you to perform file I/O operations in both synchronous and asynchronous ways.

// ES Modules (Node.js 14+ with "type": "module" in package.json)
// import fs from 'fs';

// Promise-based API  ----------------------  ++ ( ^v^ ) ++
// Node.js provides promise-based versions of the File System API in the fs/promises namespace, which is recommended for modern applications:

// // Using promises (Node.js 10.0.0+)
// const fs = require('fs').promises;

// // Or with destructuring
// const { readFile, writeFile } = require('fs').promises;

// // Or with ES modules
// // import { readFile, writeFile } from 'fs/promises';

// Common Use Cases  ----------------------  ++ ( ^v^ ) ++
//
// File Operations
//   Read and write files
//   Create and delete files
//   Append to files
//   Rename and move files
//   Change file permissions

// Directory Operations
//   Create and remove directories
//   List directory contents
//   Watch for file changes
//   Get file/directory stats
//   Check file existence

// Advanced Features
//   File streams
//   File descriptors
//   Symbolic links
//   File watching
//   Working with file permissions

// Performance Tip:
// For large files, consider using streams (fs.createReadStream and fs.createWriteStream) to avoid high memory usage.

// Reading Files ----------------------  ++ ( ^v^ ) ++

// Node.js provides several methods to read files, including both callback-based and promise-based approaches.

// The most common method is fs.readFile().

// Note: Always handle errors when working with file operations to prevent your application from crashing.
