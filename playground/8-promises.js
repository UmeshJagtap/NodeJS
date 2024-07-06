// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([7, 4, 1]);
//     reject('Things went wrong');
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log('Success', result);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

//
//                              fulfilled
//                            /
// Promise     -- pending -->
//                            \
//                              rejected
//

// OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)$ node 8-promises.js
// Success [ 7, 4, 1 ]

// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // Asynchronous tasks
// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)$ node 8-promises.js
// 3
// 8

// NOTE : The more Asynchronous tasks we try to perform, the more nested and complex our code gets
// For eg, we are doing two async taskss  so we are nested two levels deep nested

// Promise chaining

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });

// // OUTPUT
// ZUK@DESKTOP-0M6F0IP MINGW64 ~/Documents/GitHub/NodeJS/playground (main)$ node 8-promises.js
// 2
// 6
