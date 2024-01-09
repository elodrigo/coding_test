const N = 35;
let arr = new Array(N).fill(null);

function tribo_memo(n) {
  // if (arr[n] !== null) return arr[n];
  if (n < 2) {
    arr[n] = n;
    return n;
  }
  if (n === 2) {
    arr[n] = 1;
    return 1;
  }
  // if (arr[n] !== null) return arr[n]
  // let first = null
  if (arr[n - 1] === null) {
    arr[n - 1] = tribo(n - 1);
  }

  // let second = null
  if (arr[n - 2] === null) {
    arr[n - 2] = tribo(n - 2);
  }

  // let third = null
  if (arr[n - 3] === null) {
    arr[n - 3] = tribo(n - 3);
  }

  return arr[n - 1] + arr[n - 2] + arr[n - 3];
}

function tribonacci(n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  return memo[n];
}

function tribo(n) {
  if (n < 2) return n;
  if (n === 2) return 1;
  return tribo(n - 1) + tribo(n - 2) + tribo(n - 3);
}

function solution(n) {
  const result = tribonacci(n);
  console.log(result);
}

solution(N);

// time echo 1000 | node algo_book/ch4/fibo.js
