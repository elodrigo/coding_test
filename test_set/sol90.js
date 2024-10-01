function inBox(arr, row, col, length) {
  const num = arr[row][col];

  if (length === 1) {
    return num
  }

  for (let i = row; i < row + length; i++) {
    for (let j = col; j < col + length; j++) {
      if (num !== arr[i][j]) return -1;
    }
  }

  return num;
}

function divideBox(i, row, col, length) {
  // i = 0 ~ 3
  if (i === 0) {
    return [row, col, length / 2];
  } else if (i === 1) {
    return [row, col + length / 2, length / 2];
  } else if (i === 2) {
    return [row + length / 2, col, length / 2];
  } else if (i === 3) {
    return [row + length / 2, col + length / 2, length / 2];
  }
}

function solution(arr) {
  let answer = [0, 0]
  let stack = [];

  stack.push([0, 0, arr.length]);

  while (stack.length > 0) {
    const t = stack.pop();
    const isDiff = inBox(arr, ...t);
    if (isDiff === -1) {
      for (let i = 0; i < 4; i++) {
        const b = divideBox(i, ...t);
        stack.push(b);
      }
    } else {
      answer[isDiff] += 1;
    }
  }
  return answer
}

const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

solution(arr);
