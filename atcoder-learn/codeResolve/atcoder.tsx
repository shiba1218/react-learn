import * as fs from "fs";
/*
"use strict";
const App4 = (arg: any) => {
  const Input = arg.trim().split("\n");
};

App4(require("fs").readFileSync("/dev/stdin", "utf8"));
*/
// 10000円札、5000円札、1000円札がある前提で、合計がN枚、Y円になる組み合わせを求める
// 二つの正整数 a, b が与えられます。 a と b の積が偶数か奇数か判定してください。
"use strict";
const Main = (input: any) => {
  const N = input.trim().split("\n");
  const A = parseInt(N[0], 10);
  const B = parseInt(N[1], 10);

  const result = (A * B) % 2;

  (result === 0)? console.log("偶数"): console.log("奇数");
};

Main(fs.readFileSync("/dev/stdin", "utf8"));

//--------------------------------------------------
// Nのマス目があります。
// このマス目の各マスを白色または黒色に塗ることにしました (すべてのマスをどちらか片方の色に塗ります)。
// ちょうど A マスを白色に塗るとき、黒色に塗ることになるマスはいくつあるでしょうか。
// 例　入力　N: 3 A:4 -> result 5

"use strict";

const App = (arg: any) => {
  const value = arg.trim().split("\n");
  const N: number = parseInt(value[0].split(" ")[0], 10);
  const A: number = parseInt(value[1].split(" ")[0], 10);

  const SquaredN = N * N;
  const result = SquaredN - A;
  console.log(result);
};

App(require("fs").readFileSync("/dev/stdin", "utf8"));
// App(fs.readFileSync("/dev/stdin/", "utf8"));

//--------------------------------------------------
/*
あなたは、500円玉をA枚、100円玉をB枚、50円玉をC枚持っています。
これらの硬貨の中から何枚かを選び、合計金額をちょうど X円にする方法は何通りありますか。
同じ種類の硬貨どうしは区別できません。2 通りの硬貨の選び方は、ある種類の硬貨についてその硬貨を選ぶ枚数が異なるとき区別されます。
--
0≤A,B,C≤50
A+B+C≥1
50≤X≤20000
A, B, Cは整数である
Xは50の倍数である
 */

"use strict";
const App2 = (arg: any) => {
  const Input = arg.trim().split("\n");
  const A: number = parseInt(Input[0].split(" ")[0], 10);
  const B: number = parseInt(Input[1].split(" ")[0], 10);
  const C: number = parseInt(Input[2].split(" ")[0], 10);
  const X: number = parseInt(Input[3].split(" ")[0], 10);

  let count = 0;
  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++){
      for (let c = 0; c <= C; c++){
        let sum:number = (a * 500) + (b * 100) + (c * 50);
        if (sum === X && sum % 5 === 0) count++;
      }
    }
  }
  console.log(count);

};

App2(require("fs").readFileSync("/dev/stdin", "utf8"));

//--------------------------------------------------
// 高橋君は3桁のパスワードを設定しようとしています。
// 使える文字が1以上N以下の数字のみであるとき、設定できるパスワードが全部で何種類であるかを答えてください。
/*
1≤N≤9
Nは整数である
 */
"use strict";
const App3 = (arg: any) => {
  const Input = arg.trim().split("\n");
  const N:number = parseInt(Input[0].split(" ")[0], 10);
  const result:number = N * N * N;
  console.log(result);
};

App3(require("fs").readFileSync("/dev/stdin", "utf8"));
//--------------------------------------------------
// 3個の整数 A1, A2, A3が与えられます。
// A1+A2+A3が22以上なら bust、21以下なら win を出力してください。
/*
1≤Ai≤13 (i=1,2,3)
入力中のすべての値は整数である。
*/
"use strict";
const App4 = (arg: any) => {
  const Input = arg.trim().split("\n");
  const A: number = parseInt(Input[0].split(" ")[0], 10);
  const B: number = parseInt(Input[0].split(" ")[1], 10);
  const C: number = parseInt(Input[0].split(" ")[2], 10);

  const result = A + B + C;

  result >= 22 ? console.log('bust') : console.log('win');
};

App4(require("fs").readFileSync("/dev/stdin", "utf8"));

//--------------------------------------------------
// 高八士君は回文が大好きで、回文でない文字列が許せません。
// 高八士君は文字列を 1回ハグするごとに、文字列から 1文字を選んで任意の文字に変えることができます。
// 文字列 Sが与えられます。Sを回文にするために必要なハグの最小回数を答えてください。
/*
Sは半角英小文字のみから成る文字列
Sの長さは 1以上 100以下
*/
"use strict";
const App5 = (arg: any) => {
  const value = arg.trim();
  const valueLength = value.length;
  let result = 0;
  for (let i = 0; i < valueLength; i++){
    if(value)
  }
};

App5(require("fs").readFileSync("/dev/stdin", "utf8"));

//--------------------------------------------------
"use strict";
const App6 = (arg: any) => {
  const value = arg.trim();
  const length = value.length;
  let result;
  for (let i = 0; i < length; i += 2){
    let result = value[i];
  }
  console.log(result);
};

App6(require("fs").readFileSync("/dev/stdin", "utf8"));

//-------------------------------------------------
// 文字列Sが与えられます。Sのすべての文字を x で置き換えて出力してください

"use  strict";
const App7 = (arg: any) => {
  const value: string = arg.trim();
  const valueLength: number = value.length;
  console.log('x'.repeat(valueLength));
}

App7(require('fs').readFileSync('/dev/stdin', 'utf8'));

//-------------------------------------------------
// 1桁の正整数a,bが与えられます
// 整数aをb回繰り返してできる文字列と 整数bを a回繰り返してできる文字列のうち、辞書順で小さい方を答えてください
// 1 <= a <= 9
// 1 <= b <= 9


"use strict";

const App8 = (arg: any) => {
  const value: string = arg.trim().split("\n");
  const A: number = parseInt(value[0].split(" ")[0], 10);
  const B: number = parseInt(value[0].split(" ")[1], 10);
  if (A > B) {
    console.log(`${B}`.repeat(A));
  } else if(B > A) {
    console.log(`${A}`.repeat(B));
  }else {
    console.log(`${A}`.repeat(A));
  }
}

App8(require('fs').readFileSync('/dev/stdin', 'utf8'));


// -------------------------------------------------

"use strict";
const App9 = (arg: any) => {
  const Input = arg.trim().split("\n");
};

App9(require("fs").readFileSync("/dev/stdin", "utf8"));

// -------------------------------------------------


// -------------------------------------------------

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
//  ./node_modules/.bin/ts-node index.ts -> 出力コマンド
// tsc fileめい -> node file名