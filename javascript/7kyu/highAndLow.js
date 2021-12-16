// find the highest and lowest numbers

function highAndLow(numbers) {
  const nums = numbers.split(" ");
  const hi = Math.max(...nums);
  const low = Math.min(...nums);
  return `${hi} ${low}`;
}

const test = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

console.log("input:", test);
console.log("result:", highAndLow(test));

// returns "42 9"
