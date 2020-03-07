import * as fs from "fs";

// 10000円札、5000円札、1000円札がある前提で、合計がN枚、Y円になる組み合わせを求める
const Main = input => {
  const args = input.split("\n");
  const N = parseInt(args[0], 10);
  const Y = parseInt(args[1], 10);

  // for (var a = 0; a <= N; a++) {
};

Main(fs.readFileSync("/dev/stdin", "utf8"));

//  ./node_modules/.bin/ts-node index.ts -> 出力コマンド
// tsc fileめい -> node file名
