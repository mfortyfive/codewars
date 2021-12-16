// checks to see if current number is perfect square,
// then and only then finds next perfect squre.

function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  return Number.isInteger(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1;
}

const test = 144;

console.log("input:", test);
console.log("result:", findNextSquare(test));

// returns 169
