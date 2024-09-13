function solution(input, board) {
  const key_map = { left: [-1, 0], right: [1, 0], up: [0, 1], down: [0, -1] };
  const rx = (board[0] - 1) / 2;
  const lx = rx * -1;
  const uy = (board[1] - 1) / 2;
  const dy = uy * -1;

  let pos = [0, 0]
  for (const p of input) {
    const [nx, ny] = [pos[0] + key_map[p][0], pos[1] + key_map[p][1]] // move
    console.log(nx, ny)
    if (nx <= rx && nx >= lx && ny <= uy && ny >= dy) {
      pos[0] += key_map[p][0]
      pos[1] += key_map[p][1]
    }
  }
  console.log(pos)
}

const inputs = ["left", "right", "up", "right", "right"];
const boards = [11, 11];

solution(inputs, boards);
