//三項演算子
//【構文】ある条件 ? 条件がtruの時 : 条件がfalseの時

//例1)
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

//例2)
const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum);
//toLocaleStringはカンマを入れてくれる

//例3)
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えます" : "大丈夫です";
};
console.log(checkSum(30, 60));
