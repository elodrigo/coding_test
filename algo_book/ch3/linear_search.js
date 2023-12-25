const generateRandomArray = require("../../helpers");

function solution1(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) count += 1;
  }
  return count;
}

// find the second-lowest number in an array by O(N) time complexity
function solution2(arr) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

const N = 20;
// const arr = Array.from({ length: N }, (_, i) => i);
const randomArray = generateRandomArray(N);

const result = solution2(randomArray);

console.log(result);
