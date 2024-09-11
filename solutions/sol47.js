function solution(N) {
  const results = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  backtrack(0, [], 1);
  return results;
}

const a = solution(5);
console.log(a);