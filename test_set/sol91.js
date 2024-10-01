function solution(numbers) {
    let stack = []
    for (let i = 0; i < 10; i++) {
        stack.push(i)
    }

    let result = 0;

    while (stack.length > 0) {
        const num = stack.pop();
        if (!numbers.includes(num)) {
            result += num
        }
    }
    console.log(result)
}

const numbers = [1,2,3,4,6,7,8,0]

solution(numbers)
