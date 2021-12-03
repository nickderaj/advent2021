var fs = require("fs");

var input = fs.readFileSync("inputTwo.txt").toString().split("\n");

// Question 3
const getDistance = (direction) => {
  return input
    .filter((val) => {
      return val.startsWith(direction);
    })
    .map((el) => parseInt(el.slice(-1)))
    .reduce((sum, val) => sum + val, 0);
};
const xPosition = getDistance("forward");
const yPosition = getDistance("down") - getDistance("up");
const answerThree = xPosition * yPosition;
console.log(answerThree); // 1580000

// Question 4
let hpos = 0;
let aim = 0;
let depth = 0;
input.forEach((val, i) => {
  if (val.startsWith("forward")) {
    hpos += +val.slice(-1);
    depth += aim * +val.slice(-1);
  }
  if (val.startsWith("down")) aim += +val.slice(-1);
  if (val.startsWith("up")) aim -= +val.slice(-1);
});
const answerFour = hpos * depth;
console.log(answerFour); // 1251263225
