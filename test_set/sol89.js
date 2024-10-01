function solution(s) {
  let result = "";
  let i = 0;

  let temp1 = s;
  while (i < temp1.length -2) {
    if (temp1[i + 1] && temp1[i + 2]) {
      let temp = `${temp1[i]}${temp1[i + 1]}${temp1[i + 2]}`;
      if (temp === "110") {
        temp1 = temp1.replace("110", "");

        for (let j = 0; j < temp1.length -3; j++) {
          if (temp1[j + 1] && temp1[j + 2]) {
            let tempJ = `${temp1[j]}${temp1[j + 1]}${temp1[j + 2]}`;
            if (temp < tempJ) {
              temp1 = temp1.substring(0, j) + temp + temp1.substring(j);
              console.log(temp1, i, j)
              i = j+2
              break;
            }
          }
        }
      }
    } else {
      break;
    }
    i += 1;
  }

  console.log("result", temp1);
}

const s = "1110";
const s1 = "10011100";
const s3 = "0111111010";
const s4 = "10011100110";

solution(s3);
