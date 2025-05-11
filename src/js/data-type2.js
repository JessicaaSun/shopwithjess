"use strict";

// use '', "", ``
let word = `Hello 'John',i'm "Jack".`;
console.log(word);

console.log(word.length);

let wordUpper = word.toUpperCase();
console.log(wordUpper);
let wordLower = word.toLowerCase();
console.log(wordLower);

let hello = word.substring(7, 11);
console.log(hello);

let message = "I love python";
console.log(message);
let loveJs = message.replace("python", "JavaScript");
console.log(loveJs);

let animals = "dog,cat,hamster,capybara";
console.log(animals);
let animalsArr = animals.split(",");
console.log(animalsArr);

let firstName = "John";
let lastName = "Doe";

console.log("Hello " + firstName + " " + lastName);
console.log(`Hi, ${firstName} ${lastName}`);

let age = 20.54;
console.log(age);
console.log(typeof age);

let num = 4e5; // 4 x 10^2 = 400
console.log(num);

console.log("hi" / 0);

const PI = 3.14159;
console.log(PI.toFixed(4));
console.log(PI.toPrecision(3));

let num2 = "9.89px";
console.log(typeof num2);
let num2Int = parseFloat(num2);
console.log(num2Int);
console.log(typeof num2Int);

let num3 = 5453453534534534534534534890986n;
console.log(num3 + 1n);

let isJsFun = false;
console.log(isJsFun);

let name2 = null;
console.log(typeof name2);
console.log(name2);

console.clear();

const person = {
  name: "Sovannareak",
  gender: "Male",
  age: 19,
  talk() {
    return "Hello, i'm talking"
  },
  address: {
    country: "Cambodia",
    city: "Phnom Penh",
    houseNo: 87,
  },
};

const { name: username, gender, age:personAge, address: {country, city, houseNo} } = person;
console.log("After destruct name:", username)
console.log("After destruct gender:", gender)
console.log("After destruct age:", personAge)

person.name = "Devin";
person["age"] = 20;
person.nationality = "Cambodian";
// delete person.age;
console.log(person);

const car = {
  brand: "Toyota",
  color: "White",
  price: 10000,
};

car.price = 20000;

console.log("car's price:", car.price);
console.log(car["brand"]);
console.log(`Hello my name is ${username}. I'm a ${gender}. I am ${personAge} years old.
     I'm ${person.nationality}
    I live in ${country}, in ${city} city. My house number is ${houseNo}
    `);
console.log(person.talk())