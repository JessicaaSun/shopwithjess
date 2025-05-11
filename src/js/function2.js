"use strict";

// no parameter and no return value
function greet() {
  console.log("Good afternoon, nice to meet you!");
}
greet();

// has parameter and no return value
let studentName = "Chanxing";

function greetStudent(stuName) {
  // stuName is a parameter
  console.log(`Good afternoon ${stuName}`);
}

greetStudent(studentName); // studentName is an argument

// has > 1 parameters and has no return value
function sum(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

sum(2, 17);

// no parameter and has return value
function goodAfternoon() {
  return "Good afternoon, how are you doing?";
  console.log("below return");
}

let string = goodAfternoon();

console.log(string);

// has parameters and has return value
function multiplication(x, y) {
  return x * y;
}

let result = multiplication(12, 3);

console.log(result);

// function expression

let welcome = function (username = "guest") {
  console.log(`Welcome back ${username}`);
};

welcome("Mary");

// Arrow function
const greetFromArrow = () => {
  console.log("Greeting from arrow function");
};

greetFromArrow();

const division = (x, y) => console.log(`${x}/${y} = ${x / y}`);

division(12, 3);

const subtract = (x = 5, y = 2) => {
  return x - y;
};
let subtractResult = subtract(9);

console.log(subtractResult);

const outer = () => {
  console.log("This is an outer function");
  const inner = () => {
    console.log("This is an inner function");
  };
  inner();
};

outer();

// callback function

const greetCallback = (username, callback) => {
  console.log("Hello " + username);
  callback();
};

const goodBye = () => console.log("Good bye");

greetCallback("Kitty", goodBye);

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
console.log(calculator(10, 5, "divide")); 
