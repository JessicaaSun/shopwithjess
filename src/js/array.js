"use strict";

let name2 = "john";

let fruits = ["Banana", "Apple", "Strawberry", "Cherry", "Mango"];

fruits[0] = "pineapple"
console.log(fruits);

let numbers = new Array(1, 2, 3, "hello");
console.log(numbers);

console.log(numbers[1]);
console.log(fruits[fruits.length - 1]);
fruits[0] = "Blueberry";
console.log(fruits);
fruits[2] = "Durian";
console.log(fruits);

// push(): add item to the end of the array
fruits.push("Jackfruit", "Hi", "Hello");
console.log("After pushing:", fruits);
fruits.pop();
console.log("After popping:", fruits);
fruits.shift();
console.log("After shifting:", fruits);
fruits.unshift("Logan", "Lemon", "Grape");
console.log("After unshifting:", fruits);
console.log("Numbers of fruits", fruits.length);

console.clear();
// copy array
// 1. Using spread operator (...)
let animals = ["Dog", "Cat", "Dinosaur", "Hamster", "Mouse"];
let vegetables = ["Salad", "Cucumber", "Tomato"];
console.log(animals);
console.log(vegetables);

let arrCopy = [
  "Bird",
  "Rabbit",
  ...animals,
  "Capybara",
  "Parrot",
  ...vegetables,
];
console.log("after copying", arrCopy);

// 2. Copy using slice
let arrCopy2 = animals.slice(2, 4);
console.log(arrCopy2);

// 3. Copy using from
let arrCopy3 = Array.from(vegetables);
console.log(arrCopy3);

// 4. join 2 or more arrays using concat
let arrCopy4 = animals.concat(vegetables);
console.log(arrCopy4);

// map() array
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let mapNums = nums.map((n, index) => {
  let multiplication = n * 2;
  let result = `index of ${index}: ${n} x 2 = ${multiplication}`;
  return result;
});
console.log(mapNums);

let animalsCopy = arrCopy.map((animal, index) => `${index + 1}: ${animal}`);
console.log(animalsCopy);
console.log(animalsCopy[10]);

// student list
let lists = document.querySelector("#lists");
let studentNames = [
  "Navorn",
  "Sovannara",
  "thanouk",
  "Dararith",
  "Lokbong Dang",
  "Gekhorng",
  "Devin",
];

studentNames.map((stuName) => {
  let listItem = document.createElement("li");
  listItem.innerText = stuName;
  lists.appendChild(listItem);
});

console.clear();

// Program to filter only even number using filter() method
let mixedNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let evenNums = mixedNumber.filter((num) => num % 2 === 1);
console.log(evenNums);

// includes()
let studentNamesLower = studentNames.map((stuName) => stuName.toLowerCase());
console.log(studentNamesLower);
let hasDevin = studentNamesLower.includes("SoVannara".toLowerCase());
console.log(hasDevin);

// indexOf()
let thanoukRank = studentNamesLower.indexOf("thanouk") + 1;
console.log("Thanouk's Rank:", thanoukRank);

// destructure
let dogs = ["huskey", "golden retriever", "poodle", "pug"];
let [playful, kind, curly, cute] = dogs;
// let playful = "huskey";

console.log("Playful dog:", playful);
console.log("Curly dog:", curly);

let students = [
  {
    stuName: "Panno",
    gender: "M",
    age: 19,
  },
  {
    stuName: "Souheng",
    gender: "M",
    age: 18,
  },
  {
    stuName: "Sokha",
    gender: "F",
    age: 19,
  },
];

let allStudentNames = students.map((stu) => stu.stuName);
console.log(students[0].stuName);
console.log("All students name:", allStudentNames);

let tableBody = document.querySelector("#stuTableBody");

tableBody.innerHTML = students.map(
  (stu, index) => `
    <tr>
      <td  class="border-1 border-white p-3">${index + 1}</td>
      <td  class="border-1 border-white p-3">${stu.stuName}</td>
      <td  class="border-1 border-white p-3">${stu.gender}</td>
      <td  class="border-1 border-white p-3">${stu.age}</td>
    </tr>
  `
).join('');
