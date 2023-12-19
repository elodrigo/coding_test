
function solution(list) {
    // n > k
    let n = 5
    let k = 3

    let arrN = []
    for (let i=0; i < n; i++) {
        arrN.push(i)
    }

    // select every possible combination of k elements from arrN
    let arrK = []
    for (let i=0; i < arrN.length; i++) {
        for (let j=i+1; j < arrN.length; j++) {
            for (let k=j+1; k < arrN.length; k++) {
                arrK.push([arrN[i], arrN[j], arrN[k]])
            }
        }
    }
    console.log(arrK)


}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on("line", function(line) {
    input = line
    rl.close();
}).on("close", function() {
    let list = input.split(' ').map((el) => parseInt(el));
    solution(list)
    process.exit();
});