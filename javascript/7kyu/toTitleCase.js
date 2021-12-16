// returns title cased phrase

function toTitleCase(phrase) {
  const phraseArray = phrase.split(" ");
  const titleCaseArray = phraseArray.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1);
    return firstLetter.concat(rest);
  });
  return titleCaseArray.join(" ");
}

const test = "How can mirrors be real if our eyes aren't real";

console.log("input:", test);
console.log("result:", toTitleCase(test));

// returns "How Can Mirrors Be Real If Our Eyes Aren't Real"
