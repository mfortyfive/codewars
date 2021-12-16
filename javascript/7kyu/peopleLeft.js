// with each array in array, i=0 is people getting on the bus, i=1 is people getting off the bus
// if each item in array is number of stops, how many people are left?

function peopleLeft(busStops) {
  let people = busStops
    .map((stop) => {
      return stop[0] - stop[1];
    })
    .reduce((prev, next) => {
      return prev + next;
    });
  return people;
}

const test = [
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10],
];

console.log("input:", test);
console.log("result:", peopleLeft(test));

// returns 17
