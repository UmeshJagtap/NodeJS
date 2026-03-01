//
// palindrome
//

function isPalindrome(str) {
  const strLen = str.length;

  let arr = [];
  let revArr = [];

  // push each character of the string into an array
  for (let i = 0; i < strLen; i++) {
    arr.push(str[i]);
  }
  // console.log(arr);

  // reverse the array
  for (let j = strLen - 1; j >= 0; j--) {
    revArr.push(str[j]);
  }
  // console.log(revArr);

  // compare the two arrays
  for (let k = 0; k < strLen; k++) {
    if (arr[k] !== revArr[k]) {
      return false;
    } else {
      return true;
    }
  }
}

const palindrome = isPalindrome('madam');
if (palindrome) {
  console.log('palindrome');
} else {
  console.log('not a palindrome');
}

//
// -------------------------------------------------------------------
//
// Plaindrome optimized prototype

// function isPalindrome(str) {
//   const strLen = str.length;
//   //   console.log(strLen);

//   for (let i = 0; i < strLen; i++) {
//     for (let j = strLen - 1; j >= 0; j--) {
//       if (str[i] !== str[j]) {
//         return false;
//       } else {
//         console.log('palindromeeee');
//       }
//     }
//   }
// }

// const palindrome = isPalindrome('madam');
// // console.log(palindrome);
