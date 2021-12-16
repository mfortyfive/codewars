// multiply the digits of number to get a new number
// if the new number has more than 1 digit, repeat
// the process until only 1 number exists.
// count the number of the times this process repeats.

function persistence(num) {
  let nums = num.toString().split("");
  let count = 0;
  while (nums.length > 1) {
    let product = nums.reduce((prev, next) => {
      return prev * next;
    });
    nums = product.toString().split("");
    count++;
  }
  return count;
}

const test = 39;

console.log("input:", test);
console.log("result:", persistence(test));

//returns 3 (3x9 = 27 -> 2x7 = 14 -> 1x4 = 4)
