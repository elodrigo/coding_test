function solution(n, list) {
    console.log(`${n} with ${list[0]}`)
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let n = parseInt(input[0]);
    let list = [];
    for (let i = 0; i < n; i++) {
        let nums = input[i+1].split(' ').map((el) => parseInt(el));
        list.push(nums);
    }
    // let nums = input[1].split(' ').map((el) => parseInt(el));
    // let nums2 = input[2].split(' ').map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});