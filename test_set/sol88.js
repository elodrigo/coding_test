function solution(today, terms, privacies) {
  let end_list = [];
  let termsObj = {};

  for (const t of terms) {
    const tr = t.split(" ");
    termsObj[tr[0]] = tr[1];
  }

  for (let i = 0; i < privacies.length; i++) {
    const l = privacies[i].split(" ");
    const pDate = l[0].split(".");
    const nMonth = Number(pDate[1]) + Number(termsObj[l[1]]);

    const addY = Math.floor(nMonth / 12);
    const addM = nMonth % 12;

    let newM = `${addM}`;
    if (addM < 10) {
      newM = `0${addM}`;
    }

    const endDate = `${Number(pDate[0]) + addY}${newM}${pDate[2]}`;

    if (Number(endDate) < Number(today.split(".").join(""))) {
      end_list.push([Number(endDate), i]);
    }
  }
  // const newList = end_list.sort((a, b) => a[0] - b[0])
  let answer = [];
  for (const n of end_list) {
    answer.push(n[1]);
  }
  answer = answer.sort((a, b) => a - b);
  return answer;
}

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

const today1 = "2020.01.01";
const terms1 = ["Z 3", "D 5"];
const privacies1 = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

console.log(solution(today1, terms1, privacies1));
