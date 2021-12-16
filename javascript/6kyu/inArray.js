// Given two arrays of strings return a sorted array
// in lexicographical order of the strings which
// are substrings of strings of a2.

function inArray(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].split(array1[i]).length > 1) {
        array3.push(array1[i]);
        break;
      }
    }
  }
  return array3.sort();
}

const test1 = ["arp", "live", "strong", "test"];
const test2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log("input:", test1, test2);
console.log("result:", inArray(test1, test2));

// returns ['arp', 'live', 'strong']
