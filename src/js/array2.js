"use strict";

let fruits = ["Apple", "Orange", "Grape", "Banana", "Papaya"];
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);
fruits[1] = "Durian";
fruits[3] = "Cherry";
fruits.push("Jackfruit", "Logan");
fruits.pop();
fruits.shift();
fruits.unshift("Strawberry", "Kiwi");

console.log(fruits);

let animals = new Array("dog", "cat", "hamster");
console.log(animals);

// copy array in js
let fruitsCopy = ["Peach", ...fruits, "Apple", "Coconut", ...animals];
console.log("fruit copy:", fruitsCopy);

let fruitCopySlice = fruits.slice(1, 5);
console.log("slice: ", fruitCopySlice);

let fruitCopyFrom = Array.from(fruits);
console.log("copy using from:", fruitCopyFrom);

let fruitConcat = fruits.concat(animals);
console.log("concat:", fruitConcat);

// map
let numbers = [1, 2, 3, 4, 5, 6];
console.log("numbers:", numbers);
let doubled = numbers.map((num, index) =>
  console.log(`Index[${index + 1}]:${num * 2}`)
);

let evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log("Even numbers:", evenNumbers); // 2, 4, 6

let studentNames = [
  "Panno",
  "Sovannareak",
  "Gekhorng",
  "Chanxing",
  "Panha",
  "Rothana",
  "Dalux",
];

let [stuNoOne, stuNo2] = studentNames;
console.log("Student number 2:", stuNo2);

let studentLists = document.querySelector("#studentLists");

studentNames.map((stuName) => {
  let newList = document.createElement("li");
  newList.innerHTML = stuName;
  studentLists.appendChild(newList);
});
let stuLower = studentNames.map((stuName) => stuName.toLowerCase());
let hasChanxing = stuLower.includes("chanXinG".toLowerCase());
console.log("has Chanxing:", hasChanxing);

console.log(studentNames.indexOf("Dalux"));

console.clear();

let multiDArr = [
  [1, 2],
  [3, 4],
];

console.log(multiDArr[1][1])