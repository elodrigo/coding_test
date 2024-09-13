// stack의 이전과 cur를 비교해서 cur이 더 작으면 pop 아니면 push
function diff(stack, cur) {
  const prev = stack[stack.length - 1];

}

function solution(prices) {
  const stack = [];
  const result = new Array(prices.length).fill(0);

  stack.push([0, prices[0]])
  let i = 1;

  while (stack.length > 0) {
    if (i > prices.length) {
      break;
    }

    const prev = stack[stack.length - 1];

    if (i === prices.length) {
      stack.pop()
    } else if (prev[1] > prices[i]) {
      console.log('here', stack)
      result[prev[0]] = i - prev[0];
      stack.pop();
    } else {
      stack.push([i, prices[i]])
      console.log('me', stack.length)
      i += 1;
    }
  }

  console.log(result);
}

solution([1, 2, 3, 2, 3]);
