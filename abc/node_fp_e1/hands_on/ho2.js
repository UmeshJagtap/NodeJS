//
// Node.js Essentials - Largest Prime Factor
//

// JavaScript code to find largest prime
// factor of number

function largestPrimeFactor(n) {
  let largestPrime = -1;

  // Check for factors of 2
  while (n % 2 === 0) {
    largestPrime = 2;
    n /= 2;
  }

  // Check for odd factors starting from 3
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      largestPrime = i;
      n /= i;
    }
  }

  // If n is still greater than 2, it is a prime number
  if (n > 2) {
    largestPrime = n;
  }

  return largestPrime;
}

let n = 15;
let res = largestPrimeFactor(n);
console.log(res);
