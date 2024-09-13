const arrows = [
  [0, -1], // U
  [0, 1], // D
  [1, 0], // R
  [-1, 0], // L
];

const direction = { U: 0, D: 1, R: 2, L: 3 };

function solution(dirs) {
  const graph = [];
  let answer = 1;

  for (let i = 0; i <= 10; i++) {
    const row = new Array(11).fill(0);
    graph.push(row);
  }

  // const graph1 = [...new Array(11)].map(() => new Array(11).fill(0))
  // console.log(graph1)

  let cur = [5, 5];

  for (const dir of dirs) {
    const [dx, dy] = arrows[direction[dir]];

    let nx = cur[0] + dx;
    let ny = cur[1] + dy;

    cur = [nx, ny];
    if (nx < 0 || nx > 10 || ny < 0 || ny > 10) {
      continue;
    }

    const nextPoint = graph[nx][ny];
    if (nextPoint === 0) {
      answer += 1;
      graph[nx][ny] = 1;
    }
  }

  console.log(answer);
}

const dir1 = "ULURRDLLU";
const dir2 = "LULLLLLLU";

solution(dir2);
