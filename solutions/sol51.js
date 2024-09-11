function combinationsWithRepetition(arr, n) {
  if (n === 1) {
    // console.log(arr.map((e) => [e]));
    return arr.map((e) => [e]);
  }
  const results = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx);
    const combis = combinationsWithRepetition(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    results.push(...combine);
  });
  return results;
}

// console.log(a[100], a[101])
function solution(n, info) {
  const a = combinationsWithRepetition([...Array(11).keys()], n);
  console.log(a[a.length - 1])
  const cnt = a[100].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {})
  // console.log(cnt);
}

solution(9, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
