function solution(k, tangerine) {
  let arr = Array(tangerine.length).fill([]);

  for (let i = 0; i < tangerine.length; i++) {
    const num = tangerine[i];
    if (arr[num].length === 0) {
      arr[num] = [num, 1];
    } else {
      arr[num] = [arr[num][0], arr[num][1] + 1];
    }
  }

  arr = arr.filter((v) => v.length !== 0);

  arr.sort((a, b) => b[1] - a[1]);

  let total = 0;
  let list = [];
  let startIndex = 0;
  let endIndex = 0;

  console.log(arr);

  while (total !== k) {
    if (total + arr[endIndex][1] <= k) {
      total += arr[endIndex][1];
      list.push(arr[endIndex][0]);
      endIndex += 1;
    }

    if (startIndex >= arr.length - 1) {
      break;
    }

    if (endIndex >= arr.length - 1) {
      startIndex += 1;
      endIndex = startIndex;
    }
  }

  console.log(list.length);
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

const k1 = 4;
const tangerine1 = [1, 3, 2, 5, 4, 5, 2, 3];

solution(k1, tangerine1);
