"use strict";

let sentence = `I'm an "IT" student`;
console.log(sentence);

// check string length
console.log("String length:", sentence.length);

// change case
let stuName = "john doe";
console.log("Student's name uppercase:", stuName.toUpperCase());

// slice
let text = "JavaScript";
let slicedText = text.slice(0, 5);
console.log("sliced text:", slicedText);

// replace string
let learnJs = "I love JavaScript";
learnJs = learnJs.replace("JavaScript", "Python");
console.log(learnJs);

// split
let fruits = "Apple, banana, orange";
let splittedFruit = fruits.split(",");
console.log("Splitted fruit:", splittedFruit);
console.log(splittedFruit[1]);

let email = "jess@gmail.com";
let splittedEmail = email.split("@");
console.log("splitted email name:", splittedEmail[0]);

// string concatenation
let studentName = "John";
let studentAge = 20;

console.log(
  "Hello my name is " + studentName + ". I am " + studentAge + " years old."
);

console.log(`Hi, I'm "${studentName}". I'm ${studentAge} years old.`);

console.clear();

let heading = document.querySelector("#text");
heading.innerHTML = `Hi, I'm <span class="font-spotify-bold text-yellow-200">${studentName}</span>.
 I'm ${studentAge} years old.`;

let integer = 5;
let float = 3.14;
console.log("integer:", integer);
console.log("type of integer:", typeof integer);
console.log("float:", float);
console.log("type of float:", typeof float);

let num2 = 5e6 + 5e5; // 5 x 10^6 + 5 x 10^5
console.log("number with e:", num2);

console.log(-9 / 0);
console.log("4" - 4);

const PI = 3.14159;
console.log("PI value:", PI);
console.log("PI value 2 decimal points:", PI.toFixed(2));

let width = "98.12px";
let height = "40.54px";

let widthInt = parseFloat(width);
console.log("width:", widthInt);
let heightInt = parseFloat(height);
console.log("heightInt:", heightInt);

let area = widthInt * heightInt;
console.log("Area: " + area.toFixed(2) + "px");

let num3 = 85899345913984357n;
let num4 = num3 + 1n;
console.log("third number:", num3);
console.log("type of third number:", typeof num3);
console.log("forth number:", num4);

let isJavaScriptFun = true;
let isJavaScriptEasy = false;
console.log("Type of isJavaScriptFun:", typeof isJavaScriptFun);
console.log("isJavaScriptFun:", isJavaScriptFun);

console.log(!isJavaScriptFun);

if (NaN) {
  console.log("JavaScript is fun and easy!!");
}

let empty;

console.log("empty value:", empty);
console.log("type of empty:", typeof empty);

let studentName2 = null;

if (studentName2) {
  console.log("Hello " + studentName2);
} else {
  console.log("Please input your name");
}
