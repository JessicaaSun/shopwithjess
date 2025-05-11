"use strict";

let x = 12;
let y = "2";
console.log(x);
x %= 5; // x = x - 5
console.log(x); // 2
// x = 2, y = 5
console.log("arithmetic:", y ** x); // 5^2
x++; // x = x+1; x += 1;
x--; // x = x-1; x -= 1;
console.log("X", x);

// x = 2, y = "2"
console.log(x !== y);

console.log(!true);

let age = 19;

// if (age >= 18) {
//     console.log("You can drink alcohol.")
// } else {
//     console.log("You can't drink alcohol.")
// }

age >= 18
  ? console.log("You can drink alcohol.")
  : console.log("You can't drink alcohol.");

let mark = 60;

let result = mark >= 50 ? "Pass" : "Fail";
// if(mark >= 50) {
//     result = "Pass"
// } else {
//     result = "Fail";
// }

console.log(result);

let number = -6;

number >= 0
  ? number === 0
    ? console.log("Zero")
    : console.log("Positive")
  : console.log("Negative");

// if (number > 0) {
    // if (number < 0) {
    //   console.log("Negative");
    // } else
    //   console.log("Positive");
    // }
// } else {
//   console.log("Zero");
// }

let trafficLight = "yellow";

trafficLight === "green" || trafficLight === "red"
  ? trafficLight === "green"
    ? console.log("Go")
    : console.log("Stop")
  : console.log("Prepare");
