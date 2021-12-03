var fs = require("fs");

var input = fs.readFileSync("inputThree.txt").toString().split("\n");

// Question 5
const getHashMap = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

const getMostCommon = (arr) => {
  const hashmap = getHashMap(arr);
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
};

const gammaArr = [];

let i = 0;
while (i < input[0].length) {
  let tempArray = [];
  input.forEach((el) => {
    tempArray.push(el.slice(i, i + 1));
  });
  gammaArr.push(getMostCommon(tempArray));
  i++;
}

let oneArray = new Array(input[0].length).fill(1); // [1,1,1,1,1,1...]
let epsilonArr = gammaArr.map((_, i) => {
  return oneArray[i] - gammaArr[i];
});

const gammaRate = parseInt(gammaArr.join(""), 2);
const epsilonRate = parseInt(epsilonArr.join(""), 2);
const answerFive = gammaRate * epsilonRate;
console.log(answerFive); // 2003336

// Question 6
let getMostFrequent = (arr) => {
  const hashmap = getHashMap(arr);
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] === hashmap[b] ? 1 : hashmap[a] > hashmap[b] ? a : b
  );
};

let getLeastFrequent = (arr) => {
  const hashmap = getHashMap(arr);
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] === hashmap[b] ? 0 : hashmap[a] < hashmap[b] ? a : b
  );
};

const calculateBinary = (frequency) => {
  let filterText = "";
  let inputArray = input;
  while (inputArray.length > 1) {
    let tempArray = [];
    inputArray.forEach((el) => {
      tempArray.push(el.slice(filterText.length, filterText.length + 1));
    });
    frequency === "most"
      ? (filterText += getMostFrequent(tempArray))
      : (filterText += getLeastFrequent(tempArray));
    inputArray = inputArray.filter((el) => el.startsWith(filterText));
  }
  return parseInt(inputArray[0], 2);
};

const oxygen = calculateBinary("most");
const co2 = calculateBinary("least");

const answerSix = oxygen * co2;
console.log(answerSix); // 1877139
