//find numbers that are multiples of 3 or 5
//then return the sum of those numbers
//return 0 if number is negative

function sumOfMultiples(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

const test = 10;

console.log("input:", test);
console.log("result:", sumOfMultiples(test));

// returns 23 (sum of 3, 5, 6, 9)
