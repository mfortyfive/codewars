// Score the dice game, Greed, according to the criteria below:
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 points

function score(dice) {
  let dices = [];
  let score = 0;
  for (let i = 0; i < 6; i++) {
    dices.push(dice.filter((num) => num == i + 1));
  }
  for (let i = 0; i < dices.length; i++) {
    if (dices[i].length >= 3) {
      if (dices[i][0] === 1) {
        score += 1000 + (dices[i].length - 3) * 100;
      } else if (dices[i][0] === 5) {
        score += 500 + (dices[i].length - 3) * 50;
      } else {
        score += (i + 1) * 100;
      }
    } else if (dices[i].length < 3 && dices[i][0] === 1) {
      score += dices[i].length * 100;
    } else if (dices[i].length < 3 && dices[i][0] === 5) {
      score += dices[i].length * 50;
    }
  }
  return score;
}

const test = [1, 4, 4, 6, 4];

console.log("input:", test);
console.log("result:", score(test));

//returns 600
