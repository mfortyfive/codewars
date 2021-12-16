// if a word in phrase is 5 or more characters long,
// returns that word in reverse order.

function spinWords(string) {
  let words = string.split(" ");
  let spunWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      spunWords.push(words[i].split("").reverse().join(""));
    } else {
      spunWords.push(words[i]);
    }
  }
  return spunWords.join(" ");
}

const test = "Just kidding there is still one more";

console.log("input:", test);
console.log("result:", spinWords(test));

// returns "Just gniddik ereht is llits one more"
