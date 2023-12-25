function getCombinations(arrN, k, start = 0, current = []) {
  const result = [];
  const stack = [];
  let i = 0;

  while (i < arrN.length || stack.length > 0) {
    if (k === 0) {
      // Combination of length k is complete
      result.push([...stack]);
      k++;
    }

    if (i < arrN.length) {
      stack.push(arrN[i]);
      i++;
      k--;
    } else {
      // Backtrack
      i = stack.pop() + 1;
      k++;
    }
  }

  return result;
}

function solution(list) {
  const n = list[0];
  const k = list[1];

  // let arrN = []
  // for (let i=0; i < n; i++) {
  //     arrN.push(i)
  // }
  const arrN = Array.from({ length: n }, (_, i) => i);

  const arrK = getCombinations(arrN, k);

  let count = 0;
  for (let i = 0; i < arrK.length; i++) {
    let sum = arrK[i].reduce((a, b) => a + b, 0);
    if (sum % n === 0) {
      count += 1;
    }
  }
  console.log(count);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  let list = input.split(" ").map((el) => parseInt(el));
  solution(list);
  process.exit();
});
