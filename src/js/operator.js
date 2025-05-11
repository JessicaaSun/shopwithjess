"use strict";

let a = 5;
a += 6; // a = a + 6 = 5 + 6 = 11
a -= 3; // 11 - 3 = 8
a *= 2; // 8 * 2 = 16
a /= 2; // 16 / 2 = 8
a %= 3; // 8 % 3 = 2

console.log(a);

let num1 = 8;
let num2 = 5;
num1++; // num1 = num1 + 1;
console.log(num1 % num2);
console.log(num1);
console.log(9 !== "9");

console.log(!true);

// ternary operator

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

let result =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);

let num = -1;
let typeOfNum = num === 0 ? "Zero" : (num < 0 ? "Negative" : "Positive");
console.log(typeOfNum)