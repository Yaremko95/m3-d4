const arrOfObjPeople = [
  { name: "Giorgio", age: 18, score: 100 },
  { name: "Mirko", age: 16, score: 50 },
  { name: "Silvio", age: 12, score: 1000 },
  { name: "Alberto", age: 62, score: 1 },
];

const numbers = [7, 55, 37, 14, 19, 30, 21, 60, 36];

// 1. FILTER

// const canDrink = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 21) {
//     canDrink.push(numbers[i]);
//   }
// }

// const canDrink = numbers.filter(function (value) {
//   if (value >= 21) {
//     return true;
//   }
// });

// RETURN A NEW ARRAY WITH ONLY THE ELEMENTS WHICH PASS THE TEST PROVIDED BY THE  FUNCTION

// arrOfObjPeople.filter(function (obj) {
//   return obj.score > 100;
// });

const filterByscore = arrOfObjPeople.filter((obj) => obj.score > 100);
console.log(filterByscore);

// find - finds the first element that meets the condition and returs it

const findOldest = arrOfObjPeople.find((obj) => obj.age > 60);
console.log(findOldest);

// Map

// allows us to create a new veriosn of current array
// we can create anything really from current array
//you can format however you want

// const arrOfNames = arrOfObjPeople.map(function (person) {
//   return person.name;
// });

const arrOfNames = arrOfObjPeople.map((person) => person.name);

//const testMap = arrOfObjPeople.map((person) => 1);

//const testMap = arrOfObjPeople.map((person) => `${person.name}, ${person.age}`);

// const sqRoot = numbers.map((n) => Math.sqrt(n));

//const nTimesTwo = numbers.map((n) => n*2)

// Includes
const includesStr = arrOfNames.includes("Silvio");
console.log(includesStr);

// TASK:  Render to the page students who's score is more then 20

// sort

//default is asc
// converts to string and compares it's unicode values

const letters = ["b", "p", "a", "d"];
// letters.sort()

// const letters = ["b", "P", "a", "d"];
// letters.sort();

// letters.forEach((letter) => {
//   console.log(letter, letter.charCodeAt(0)); //0 index of the postion in the string
// });

const arrOfNums = [1, 89, 25, 102, 18, 0, 72, 10000];
console.log(arrOfNames.sort()); //will sort in descending order

// arrOfNums.forEach((n) => {
//   console.log(n, n.charCodeAt(0)); //0 index of the postion in the string
// });

// a<b ? a goes first

arrOfNums.sort((a, b) => {
  if (a < b) {
    return -1; // if negayive value is returned then a become before b
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

arrOfNums.sort((a, b) => (a < b ? 1 : -1));

//it's not important whether it return -1 or 1, it's important that it returns negative or positive
arrOfNums.sort((a, b) => a - b);

/* 1-89 = -88 -> negative (a<b) so a goes before b */

arrOfObjPeople.sort((a, b) => a.age - b.age);

//TASK sort by name, length of the name, by score

// arrOfObjPeople.sort((a, b) => a.name.length - b.name.length);

// reduce

//takes an array of values (whatever it is, and reduces it down to one single value)

const arrToReduce = [4, 6, 2];

/*
param 1 -> callback
param 2 -> starting point

acc-> it's a thing we are reducing our value down to
curr => each element

*/

const total = arrToReduce.reduce((acc, curr) => acc + curr, 0); //callback, starting point,

// let total = 0

// for (let i = 0; i < arrOfObjPeople.length; i++) {
//     const age = arrOfObjPeople[i].age

//     total = total + age
// }

const reducedAgesSum = arrOfObjPeople.reduce((accumulator, currentValue) => {
  console.log("ACCUMUlATOR", accumulator);
  console.log("CURRENTVALUE", currentValue.age);
  return accumulator + currentValue.age;
}, 0); // accumulator = 0, currentValue = { name: "Giorgio", age: 18, score: 100 } // accumulator = 18

const hello = "hello";
const splitted = hello.split("");
console.log(splitted);

console.log(splitted.reduce((acc, curr) => acc.concat(curr), "!"));

//TASK: reduce arr to

// const result = {
//     names: ["Giorgio", "Mirko", "Silvio", "Alberto"],
//     totalScore:500
// }

// const result = arrOfObjPeople.reduce(
//   (acc, curr) => {
//     const temp = acc;
//     temp.names.push(curr.name);
//     temp.totalScore += curr.score;
//     return temp;
//   },
//   { names: [], totalScore: 0 }
// );

// console.log(result);

//TASK: Sum scores higher than 100

// const scoreHigherThanSum = arrOfObjPeople
//   .map((student) => student.score)
//   .filter((value) => value >= 100)
//   .reduce((total, currVal) => total + currVal, 0);

// DEFAULT PARAMETERS

const multiply = (n1, n2 = 2) => n1 * n2;

console.log(multiply(2));

// const search = query => {
//   if (!query) {
//     console.log("http://something.com/api/v1/query=nature");
//   } else {
//     console.log("http://something.com/api/v1/query=" + query);
//   }
// };

// search();

const search = (query = "nature") => {
  console.log("http://something.com/api/v1/query=" + query);
};

search("trees");

// REST PARAMETERS

function sum(...params) {
  console.log({ params });

  // let result = 0
  // for (let number of params) {
  //     result = result + number
  // }
  // return result

  return params.reduce((a, p) => a + p, 0);
}

// console.log(
//     sum(5, 4, 1000, 3, 5, 7, 8)
// )

const withRestParams = (param1, param2, ...rest) => {
  console.log(param1);
  console.log(param2);
  console.log(rest);
};

withRestParams("hey", "hi", "hello", "", "", "");

// TERNARY OPERATOR

const studName = "Brad";

// let isAdmitted = false

// if(studName=== "Brad") {
//     isAdmitted = true
// }

const isAdmitted = studName === "Brad" ? true : false;

// DESTRUCTURING

const student = {
  name: "Alberto",
  specialty: "sidekick",
  location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  street: "Washington st.",
};

// const student2 = {
//   name: "John",
//   specialty: "student",
//   location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
// };

// const student3 = {
//   name: "Tom",
//   specialty: "user",
//   planet: "Earth",
// };

// const name = obj.name;
// const specialty = obj.specialty;
// const country = obj.location.area.country;

const {
  name,
  specialty,
  location: { area: country }, //BE CAREFUL HERE
} = student;
console.log(name);
console.log(specialty);
console.log(c);

const arrOfObj = [
  {
    name: "Alberto",
    specialty: "sidekick",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "John",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Bill",
    specialty: "student",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
  {
    name: "Tom",
    specialty: "teacher",
    location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
  },
];

const [, second, ...rest] = arrOfObj;

const { specialty } = second;
console.log(specialty);
console.log(second);
console.log(rest);

// // DESTRUCTURING FUNCTION PARAMETERS
const person = ({
  name,
  specialty,
  location: {
    area: { country },
  },
}) => {
  console.log(name);
  console.log(specialty);
  console.log(country);
};

person(student);

// SPREAD OPERATOR

const student2 = {
  name: "John",
  specialty: "student",
  location: { area: { country: "Spain" }, coordinates: ["18237", "91823"] },
};

const student3 = {
  name: "Tom",
  specialty: "user",
  planet: "Earth",
};
const student4 = Object.assign({}, student2, student3);
console.log(student4);
delete student4.location;
// console.log(student4);

const student5 = {
  ...student,
  surname: "Doe",
  ...student2,
  ...student3,
  name: "stefano",
};
console.log(student5);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
