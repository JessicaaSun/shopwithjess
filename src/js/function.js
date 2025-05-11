"use strict";

let username = "Marina";

// function no parameter and none-return

function greet1() {
  console.log("Hello, nice to meet you");
}

greet1();

// function has 1 parameter and none-return
function greet(stuName = "Mary") {
  console.log(`Hello, nice to meet you ${stuName}!`);
}

const greetArrow = (stuName) => console.log(`Hello, nice to meet you ${stuName}!, arrow function`);

greet(username); // Marina => stuName of greet function
greetArrow("John");

// function has 2 parameters and none-return
function sum(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(98, 5);

// function has no parameters and has return value
function sumOfFourAndFive() {
  let num1 = 4;
  let num2 = 5;
  return num1 + num2;
}

let result = sumOfFourAndFive();
console.log("result of return function:", result);

// function has parameters and has return value
function multiplication(num1, num2) {
  return num1 * num2;
}

const multiplicationArrow = (num1 = 4, num2 = 5) => {
  return num1 * num2;
};

let multiArrow = multiplicationArrow(9, 2);

console.log("Result from arrow:", multiArrow)

let multiplicationResult = multiplication(5, 9);
console.log("Multiplication result:", multiplicationResult);

// console.clear();

// function express
const sayHi = function (name) {
  console.log(`Hi ${name}`);
};

sayHi("Teng");

// arrow function
const goodEvening = () => {
  console.log("Good evening!!");
};

goodEvening();


// nested function

function outer() {
  console.log("outer function");
  const inner = () => {
    console.log("inner function");
  }
  inner();
}

outer();

// callback function

const greetCallback = (username, callback) => {
  console.log("Hello "+ username);
  callback(); // console.log("Good bye! from callback")
}

const bye = () => console.log("Good bye! from callback")

greetCallback("Dararith", bye) // bye is a callback function


function calculator(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  } else {
    return "Unknown operator";
  }
}
console.log(calculator(7, 5, "add")); 

