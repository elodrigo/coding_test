const generateRandomArray = require("../../helpers");

function solution(list) {
  let count = 0;
  let newList = [...list];
  for (let i = 0; i < list.length; i++) {
    newList[i] = list[i] % 2;
    count += 1;
  }
  return count;
}

const N = 100;

const randomArray = generateRandomArray(N, true);

const result = solution(randomArray);

console.log(result);
