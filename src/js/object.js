"use strict";

// create object
const person = {
  name: "Sovannareak",
  gender: "Male",
  age: 18,
  isStudent: true,
};

const person2 = new Object();
person2.name = "Sovannara";
person2.age = 19;

// access object properties
console.log("Person 1:", person);
console.log("Person 2:", person2);

console.log(
  `Hello, my name is ${person.name}. I am ${person.age} years old. I am a ${person.gender}.`
);

console.log(`Hi, I'm ${person2["name"]}. I am ${person2["age"]} years old.`);

// modify object properties
person.name = "Chanxing";
person["age"] = 20;
person.isStudent = false;

// add object properties
person.nationality = "Cambodian";
person.email = "chanxing@gmail.com";
console.log("Person after modifying:", person);
console.log("isStudent:", person.isStudent);

// delete object properties
delete person.isStudent;
console.log("Person after deleting isStudent:", person);
console.log("isStudent:", person.isStudent);

// nested object
const person3 = {
  name: "John",
  address: {
    country: "USA",
    state: "Florida",
    postalCode: 2312,
    resident: {
      streetNo: "21st",
      addressNo: 324,
    },
  },
};

// access nested object properties
console.log("Person3:", person3);
console.log("Person3's country:", person3.address.country);
console.log("Person3's street number:", person3.address.resident.streetNo);

// methods in objects=
const cat = {
  name: "Grace",
  color: "White",
  meow() {
    return `My name is ${this.name}. Meow`;
  },
  sum() {
    let a = 4;
    let b = 7;
    return a + b;
  },
};

// access object's method
console.log("Cat:", cat);
console.log("Cat meow:", cat.meow());
console.log("Sum:", cat.sum());

console.clear();

// Destructuring object
const user = {
  name: "Navorn",
  age: 18,
  country: "Cambodia",
  address: {
    city: "Phnom Penh",
    houseNo: 54,
  },
};
console.log(user.name);
console.log(user.country);
console.log("City:", user.address.city);

const { name: studentName, age: studentAge, country } = user;
const {
  address: { city, houseNo }
} = user;

console.log("After destructuring:");
console.log(studentName);
console.log(studentAge);
console.log(country);
console.log(city)
console.log(houseNo)
