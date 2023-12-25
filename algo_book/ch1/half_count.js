// binary search algorithm counter

function solution(n, list) {
  let target = 50;
  let result = -1;

  for (let i = 0; i < 100; i++) {
    let start = list[0];
    let end = list[1];
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      count += 1;
      if (mid === i) {
        break;
      } else if (mid > i) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (count > result) {
      result = count;
    }
  }

  console.log(result);
}

solution(1, [0, 100]);
