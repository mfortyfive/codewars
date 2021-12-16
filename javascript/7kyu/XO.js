// if the number of x's and o's are equal, return true
// otherwise false. ignores caps in original string.

function XO(string) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") {
      x++;
    }
    if (string[i].toLowerCase() === "o") {
      o++;
    }
  }
  return x === o;
}

const test = "xoXhno";

console.log("input:", test);
console.log("result:", XO(test));

// returns true
