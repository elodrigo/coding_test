// dijkstra's algorithm
const INF = 1e9;

function solution(n, list) {
  // let graph = Array.from({length: n}, () => Array(n).fill(0));
  // let graph = Array.from({length: n}, (_, i) => i);

  let graph = Array.from({ length: n - 1 }, () => []);
  let visited = Array.from({ length: n }, () => false);
  let distance = Array.from({ length: n }, () => 0);
  let accumDistance = 0;
  let place = 4;

  function findNextPlace(nextPlace) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][1] === nextPlace) {
        accumDistance += list[i][2];
        if (list[i][0] === place) {
            visited[nextPlace] = true;
            break
        } else {
            findNextPlace(list[i][0]);
        }
      }
    }
  }

  function dijkstra(place) {
    distance[place] = 0;
    visited[place] = true;

    for (let i = 0; i < n - 1; i++) {
      const cost = list[i][2]

      if (list[i][0] === place) {
        distance[list[i][1]] = cost;
        visited[list[i][1]] = true;
      } else if (list[i][1] === place) {
        distance[list[i][0]] = cost;
        visited[list[i][0]] = true;
      } else {
        distance[list[i][1]] += cost
        accumDistance = 0
        findNextPlace(list[i][0]);
        distance[list[i][1]] += accumDistance
      }
    }
  }

  dijkstra(place);

  console.log(distance);
}

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// let input = [];
//
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   let n = parseInt(input[0]);
//   let list = [];
//   for (let i = 0; i < n - 1; i++) {
//     let nums = input[i + 1].split(" ").map((el) => parseInt(el));
//     list.push(nums);
//   }
//   let nTest = 5;
//   let listTest = [
//     [0, 1, 2],
//     [1, 2, 1],
//     [1, 3, 7],
//     [3, 4, 5],
//   ];
//   solution(nTest, listTest);
//   process.exit();
// });

  let nTest = 5;
  let listTest = [
    [0, 1, 2],
    [1, 2, 1],
    [1, 3, 7],
    [3, 4, 5],
  ];
  solution(nTest, listTest);