function solution(strings, n) {
  let i = 0;
  return strings.sort((a, b) => {
    i += 1;
    if (a[n] === b[n]) {
      console.log("a is", a, "b is", b, "index is", i, 'result is ', a > b ? 1 : -1);
      return a > b ? 1 : -1;
    } else {
      console.log("a is", a, "b is", b, "index is", i, 'result is ', a[n] > b[n] ? 1 : -1);
      return a[n] > b[n] ? 1 : -1;
    }
  });
}

solution(["sun", "bed", "car"], 1);
