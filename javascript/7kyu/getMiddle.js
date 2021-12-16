// if word has odd number of characters, returns middle character,
// if even, return 2 middle characters.

function getMiddle(s) {
  let mid = s.length / 2;
  return mid % 1 === 0 ? s[mid - 1] + s[mid] : s[mid - 0.5];
}

const test = "test";

console.log("input:", test);
console.log("result:", getMiddle(test));

// returns 'es'
