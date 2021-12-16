// using seed, adds 3 numbers of the previous sequence
// to get new number. then repeats until n-th term

function tribonacci(signature, n) {
  let tribonacci = [...signature];
  for (let i = 0; i < n - 3; i++) {
    tribonacci.push(tribonacci[i] + tribonacci[i + 1] + tribonacci[i + 2]);
  }
  return tribonacci.slice(0, n);
}

const test = [1, 1, 1];
const n = 10;

console.log("input:", test, n);
console.log("result:", tribonacci(test, n));

// returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
