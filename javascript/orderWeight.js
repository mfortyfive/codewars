// sorting by weight (adding of every digit of numbers)
// if weight is the same, sort by string value.
// assumes no stable sorting

function orderWeight(string) {
  let numbers = string.split(" ").sort();
  let weight = string.split(" ").sort((x, y) => {
    let xsum = 0;
    let ysum = 0;
    for (let i = 0; i < x.length; i++) {
      xsum += parseInt(x[i]);
    }
    for (let i = 0; i < y.length; i++) {
      ysum += parseInt(y[i]);
    }
    return xsum === ysum ? numbers.indexOf(x) - numbers.indexOf(y) : xsum - ysum;
  });
  return weight.join(" ");
}

const test = "2000 10003 1234000 44444444 9999 11 11 22 123";

console.log("input:", test);
console.log("result:", orderWeight(test));
