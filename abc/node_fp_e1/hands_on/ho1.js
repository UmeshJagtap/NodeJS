// run `node index.js` in the terminal
console.log(`Hello Node.js v${process.versions.node}!`);

//---------------------------------------------------------  ( palindrome )

// working one

process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});

process.stdin.on('end', function () {
  function isPalindrome(input) {
    // const givenString = str.replace(/[\W_]/g, '').toLowerCase();
    const givenString = input.trim().toLowerCase();
    const reverseString = givenString.split('').reverse().join('');

    // return givenString === reverseString;
    console.log(givenString === reverseString);
  }

  isPalindrome(input);
});

// palindrome with Grep & internalFunctions  --<<

function isPalindrome(str) {
  // const givenString = str.replace(/[\W_]/g, '').toLowerCase();
  const givenString = str.trim().toLowerCase();
  const reverseString = givenString.split('').reverse().join('');

  return givenString === reverseString;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('madaam'));

// palindrome with array  ---------------------<<

// function isPalindrome(str) {
//   // Write your code here
//   const strLen = str.length;

//   let arr = [];
//   let revArr = [];

//   // push to array
//   for (let i = 0; i < strLen; i++) {
//     arr.push(str[i]);
//   }
//   console.log(arr);

//   // reverse the array
//   for (let j = strLen - 1; j >= 0; j--) {
//     revArr.push(str[j]);
//   }
//   console.log(revArr);

//   // compare the arrays
//   for (let k = 0; k < strLen; k++) {
//     if (arr[k] !== revArr[k]) {
//       return false;
//     }
//     return true;
//   }
// }

// const palindrome = isPalindrome('malayalam');
// if (palindrome) {
//   console.log('palindrome');
// } else {
//   console.log('not a palindrome');
// }

//--------------------------------------------------------- ( fizzBuzz )
/*
 * Complete the 'fizzBuzz' function below.
 */

// function fizzBuzz(n) {
//   // Write your code here
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// function main() {
//   // const n = parseInt(readLine().trim(), 10);
//   const n = 15;
//   fizzBuzz(n);
// }

// main();
