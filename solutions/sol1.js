function solution(nums1, nums2) {

    let k = nums1[1]
    let index = 0;
    let end = k-1;
    let arrR = [...nums2];
    let count = 0;
    let isHitEnd = false;

    while (true) {
        if (end >= arrR.length -1) {
            index = arrR.length - k;
            end = arrR.length -1;
            isHitEnd = true;
        }

        let arr = arrR.slice(index, end+1)

        let arr1 = arr.sort();
        for (let i = index; i <= end; i++) {
            arrR[i] = arr1[0];
        }
        if (new Set(arrR).size === 1) {
            break;
        }
        index += k - 1;
        end += k - 1;
        count += 1;

        if (isHitEnd) {
            index = 0;
            end = k-1;
            arrR[0] = arrR[arrR.length-1];
            isHitEnd = false;
        }
    }

    console.log(count)
}

let testNum = [37, 4]
let testNum2 = [31, 36, 20, 30, 1, 9, 6, 13, 3, 29, 11, 25, 7, 8, 2, 24, 34, 18, 26, 29, 11, 25, 7, 8, 2, 24, 34, 18, 26, 29, 11, 25, 7, 8, 2, 24, 34]
solution(testNum, testNum2);

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let input = [];
//
// rl.on("line", function (line) {
//     input.push(line);
// }).on("close", function () {
//     let nums = input[0].split(' ').map((el) => parseInt(el));
//     let nums2 = input[1].split(' ').map((el) => parseInt(el));
//     let testNum = [37, 4]
//     let testNum2 = [31, 36, 20, 30, 1, 9, 6, 13, 3, 29, 11, 25, 7, 8, 2, 24, 34, 18, 26, 29, 11, 25, 7, 8, 2, 24, 34, 18, 26, 29, 11, 25, 7, 8, 2, 24, 34]
//     solution(testNum, testNum2);
//     process.exit();
// });