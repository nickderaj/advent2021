var fs = require("fs");

var input = fs.readFileSync("inputOne.txt").toString().split("\n");

// Question 1
const answerOne = input.filter((_, i) => {
  return !i || input[i] > input[i - 1];
}).length;
console.log(answerOne); // 1139

// Question 2
const answerTwo = input.filter((_, i) => {
  if (!input[i + 3]) return true;
  return input[i] < input[i + 3];
}).length;
console.log(answerTwo); // 1103
