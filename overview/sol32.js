class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info;
    this.left = left;
    this.right = right;
    this.num = num;
  }

  hasLeft() {
    return this.left !== null;
  }

  hasRight() {
    return this.right !== null;
  }
}

function makeBT(nodeinfo) {
  const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1);
  nodes.sort((a, b) => {
    const [ax, ay] = nodeinfo[a - 1];
    const [bx, by] = nodeinfo[b - 1];

    if (ay === by) {
      return ax - bx;
    } else {
      return by - ay;
    }
  });

  // const a = [11, 2, 22, 1].sort((a, b) => a - b);
  // console.log(a);

  let root = null;
  for (const node of nodes) {
    if (root === null) {
      root = new Node(nodeinfo[node - 1], node);
    } else {
      let parent = root;
      const newNode = new Node(nodeinfo[node - 1], node);
      while (true) {
        if (newNode.info[0] < parent.info[0]) {
          if (parent.hasLeft()) {
            parent = parent.left;
            continue;
          }
          parent.left = newNode;
          break;
        } else {
          if (parent.hasRight()) {
            parent = parent.right;
            continue;
          }
          parent.right = newNode;
          break;
        }
      }
    }
  }
  return root;
}

function preOrder(root, answer) {
  if (root === null) {
    return;
  }

  answer.push(root.num);
  preOrder(root.left, answer);
  preOrder(root.right, answer);
}

function solution(nodeinfo) {
  const root = makeBT(nodeinfo);
  const answer = [];
  preOrder(root, answer);

  console.log(answer);
}

const nodeinfo = [
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
];

solution(nodeinfo);
