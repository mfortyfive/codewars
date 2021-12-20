// given an array of integers, return an array, when contiguously summed,
// returns the maximum possible sum.

function maxSequence(arr) {
  let testSequence = [...arr];
  let solutions = [];
  if (arr.length === 0 || arr.every((num) => num < 0)) {
    solutions.push(0);
  } else {
    for (let i = 0; i < arr.length; i++) {
      let sumArray = [];
      let startNum = testSequence.splice(0, 1)[0];
      sumArray.push(startNum);
      for (let j = 0; j < testSequence.length; j++) {
        startNum += testSequence[j];
        sumArray.push(startNum);
      }
      solutions.push(Math.max(...sumArray));
    }
  }
  return Math.max(...solutions);
}

const test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log("input:", test);
console.log("result:", maxSequence(test));

// returns "Just gniddik ereht is llits one more"
