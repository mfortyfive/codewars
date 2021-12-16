function findNextSquare(cc) {
  let maskedCc = cc;
  if (cc.length > 4) {
    maskedCc = cc.slice(cc.length - 4);
    for (i = 0; i < cc.length - 4; i++) {
      maskedCc = "#" + maskedCc;
    }
  }
  return maskedCc;
}

const test = "4556364607935616";

console.log("input:", test);
console.log("result:", findNextSquare(test));
