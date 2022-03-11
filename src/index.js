const myProfile = {
  name: "makiko",
  age: 27
};

const message1 = `私の名前は${myProfile.name}です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `私の名前は${name}です。年齢は${age}だ`;
console.log(message2);
