// turns array of objects into plain english.

function NamesToPhrase(names) {
  let inEnglish = "";
  for (let i = 0; i < names.length; i++) {
    inEnglish +=
      i === 0
        ? names[i].name
        : i === names.length - 1
        ? ` & ${names[i].name}`
        : `, ${names[i].name}`;
  }
  return inEnglish;
}

const test = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

console.log("input:", test);
console.log("result:", NamesToPhrase(test));

// returns "Bart, Lisa & Maggie"
