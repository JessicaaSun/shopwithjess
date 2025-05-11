"use strict";

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are not an adult.");
// }

let grade = 100;

if (grade >= 90) {
  console.log("Grade A");
} else if (grade >= 70) {
  console.log("Grade B");
} else if (grade >= 50) {
  console.log("Grade C");
} else if (grade >= 40) {
  console.log("Grade D");
} else if (grade >= 30) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}

let day = 0;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Invalid day");
  }
}

/* donate blood--conditions:
1. Age >= 18;
2. Kilo >= 45kg
3. Blood pressure >= 90 <=120; 
4. Hemoglobin >= 12.5 for women , >= 13 for men;
*/
let gender = "male";
let age = 21;
let kilo = 45;
let bloodPressure = 80;
let hemoglobin = 14;

if (age >= 18 && kilo >= 45 && bloodPressure >= 90 && bloodPressure <= 120) {
  if (gender === "female") {
    if (hemoglobin >= 12.5) {
      console.log("You can donate blood as a woman");
    } else {
      console.log("You can't donate blood as a woman");
    }
  } else {
    if (hemoglobin >= 13) {
      console.log("You can donate blood as a man");
    } else {
      console.log("You can't donate blood as a man");
    }
  }
} else {
   console.log("You can't donate blood.");
}
