// checks to see if sudoku solution is valid.
// in each iteration, checks row and column of index.

function validSolution(board) {
  let isValid = true;
  while (isValid) {
    for (let i = 0; i < 9; i++) {
      let setIsValid = [...board[i]].sort().every(checkOrder);
      let vArray = board.map((horizontal) => {
        return horizontal[i];
      });
      if (!setIsValid || board[i].includes(0)) {
        isValid = false;
      }
      setIsValid = vArray.sort().every(checkOrder);
      if (!setIsValid || vArray.includes(0)) {
        isValid = false;
      }
    }
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let chunk = [];
        chunk.push(...board[i].slice(j, j + 3));
        chunk.push(...board[i + 1].slice(j, j + 3));
        chunk.push(...board[i + 2].slice(j, j + 3));
        let setIsValid = chunk.sort().every(checkOrder);
        if (!setIsValid) {
          isValid = false;
        }
      }
    }
    break;
  }
  return isValid;
}

function checkOrder(num, i) {
  return num - i === 1;
}

const test = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

console.log("input:", test);
console.log("result:", validSolution(test));

// returns true
