function solution(n, list) {
    const one = 12;
    const minCoupon = 5;

    const totalCoupons = list[0] + list[1];

    const max = Math.floor(totalCoupons / one);

    const newMax = Math.min(
        max,
        Math.floor(list[0] / minCoupon),
    )

    console.log(newMax)
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
        // list.push(nums);
        solution(n, nums)
    }
    // let nums = input[1].split(' ').map((el) => parseInt(el));
    // let nums2 = input[2].split(' ').map((el) => parseInt(el));
    // solution(n, list);
    process.exit();
});