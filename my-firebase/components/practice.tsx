import * as fs from "fs";

// function Main(input) {
//   input = input.split("\n"); // 1行目がinput[0], 2行目がinput[1], …に入る
//   // ここに処理を書く
//   var result = input[1];
//   var score = 0;
//   for (var i = 0; i < result.length; i++) {
//     if (result[i] == "A") score += 4;
//     else if (result[i] == "B") score += 3;
//     else if (result[i] == "C") score += 2;
//     else if (result[i] == "D") score += 1;
//   }
//   // console.logは標準出力に1行出力します (自動的に最後に改行が入ります)
//   console.log(score / result.length);
// }

const Main = input => {
  input = input.split("\n");

  const result = input[1];
  const score = 0;

  result.forEach(i => {
    switch (result[i]) {
      case "A":
        score += 4;
        break;
      case "B":
        score += 3;
        break;
      case "C":
        score += 2;
        break;
      case "D":
        score += 1;
        break;
      default:
        break;
    }
  });
};

// ※この行以降は編集しない (標準入力から一度に読み込みMainを呼び出します)
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// const input = fs.readFileSync("/dev/stdin", "utf8");
