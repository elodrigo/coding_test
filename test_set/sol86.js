function solution(n, m, x, y, r, c, k) {
  function isValid(ns, n, m) {
    return ns[0] <= n && ns[0] > 0 && ns[1] <= m && ns[1] > 0;
  }

  const dlru = { d: [-1, 0], l: [0, 1], r: [0, -1], u: [1, 0] };

  let ns = [x, y];
  const e = [r, c]
  let moves = [];

  while (moves.length < k) {
    let canMove = "impossible";

    if (ns[0] === e[0] && ns[1] === e[1]) {
      for (const [key, value] of Object.entries(dlru)) {
        const nns = [ns[0] - value[0], ns[1] - value[1]];
        if (isValid(nns, n, m)) {
          canMove = key;
          ns[0] -= value[0];
          ns[1] -= value[1];
          moves.push(key);
          break;
        }
      }
    }

    if (ns[0] < e[0]) {
      canMove = "d";
      ns[0] += 1;
    } else if (ns[1] > e[1]) {
      canMove = "l";
      ns[1] -= 1;
    } else if (ns[1] < e[1]) {
      canMove = "r";
      ns[1] += 1;
    } else if (ns[0] > e[0]) {
      canMove = "u";
      ns[0] -= 1;
    }

    if (canMove !== "impossible") {
      moves.push(canMove);
    } else {
      break;
    }
  }

  if (moves.length === k) {
    return moves.join("");
  } else {
    return "impossible";
  }
}



const n = 2;
const m = 2;
const s = [1, 1];
const e = [2, 2];
const k = 2;

const result = solution(n, m, s[0], s[1], e[0], e[1], k);
console.log(result);
