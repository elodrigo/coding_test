function solution(id_list, report, k) {
  const userTable = {};
  for (const id of id_list) {
    userTable[id] = [];
  }

  const reportTable = {};
  for (const str of report) {
    const a = str.split(" ");
    userTable[a[0]].push(a[1]);

    if (!reportTable[a[1]]) {
      reportTable[a[1]] = 1;
    } else {
      reportTable[a[1]] += 1;
    }
  }

  let result = new Array(id_list.length).fill(0);

  for (let i = 0; i < id_list.length; i++) {
    for (const f of userTable[id_list[i]]) {
      if (reportTable[f] >= k) {
        result[i] += 1;
      }
    }
  }
  console.log("result", result);
}

const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const report1 = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];

solution(id_list1, report1, 2);
