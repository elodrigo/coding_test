// binary search algorithm

function solution(n, list) {
  let start = list[0];
  let end = list[1];
  let mid = Math.floor((start + end) / 2);
  let target = 27;
  let result = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (mid === target) {
      result = mid;
      break;
    } else if (mid > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log(result);
}

solution(1, [20, 35]);
