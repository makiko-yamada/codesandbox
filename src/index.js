const nameArr = ["田中", "山田", "鈴木"];

//配列をループして何か処理する（従来のやり方）
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

//配列をループして何か処理する（map）
nameArr.map((name) => console.log(name));

//リターンされた結果に基づいて新しい配列を作る
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
