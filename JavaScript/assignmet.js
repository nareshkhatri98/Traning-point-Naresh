// Write a program that takes a string as input and converts it to uppercase.

const fruit = "Apple";
console.log(fruit.toUpperCase(fruit));

console.log(fruit.length);

// Write a program that takes a string as input and reverses it.
//  Apple -> elppA

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(fruit));

// add two number

function removeVowels(str) {
  const vowels = /[aeiouAEIOU]/g;
  return str.replace(vowels, "");
}
const input = "Apple";
const result = removeVowels(input);
console.log(result);

//
function demo(str) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.indexOf(char) === -1) {
      result += char;
    }
  }
  return result;
}
console.log(demo(input));

// Write a program that takes a number as input and checks if it is a prime number.
// 3 -> 3 is a prime number
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 7;

if (isPrime(number)) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}

// Write a program that takes an array of numbers as input and returns the sum of all the numbers.
// [1,2,3] -> 6

const numbers = [1, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("sum is :", sum);

// Write a program that takes a number as input and calculates its factorial.
// 4 -> 4*3*2*1 -> 24
// using loop
function factorial() {
  let number = 3;
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log("factorial is: ", fact);
}
factorial();

// using recursion

function Fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * Fact(n - 1);
  }
}
let n = 4;
const Result = Fact(n);
console.log("factorial is:", Result);

// Write a program that takes a number as input and checks if it is a perfect square.
// 4 -> 4 is a perfect square
// 16 -> 16 is a perfect square

function PerfectSquare(n) {
  if (n > 0) {
    let num = Math.sqrt(n);
    let num1 = Math.floor(num);
    console.log(num, num1 * num1);

    return num1 * num1 === n;
  } else {
    return false;
  }
}

const Res = PerfectSquare(1);
console.log(Res);

//  Array Manipulation:
// Write a program that takes two arrays as input and merges them into a single array.
// [1,2,3] [4,5,6] -> [1,2,3,4,5,6]

let FirstArray = [1, 2, 3];
let SecondArray = [6, 7, 8, 9];

let finalArray = FirstArray.concat(SecondArray);
console.log(finalArray);

// // Write a program that takes an array of numbers as input and returns the largest number.
// [4,2,6,8] -> 8

function LargestNumberOfArray(array) {
  if (array.length === 0) {
    console.log("array is empty");
  }
  let largest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
let myArray = [4, 2, 6, 100, 8];
const largestNumber = LargestNumberOfArray(myArray);
console.log(largestNumber);

// Write a program that takes an array of strings as input and sorts them alphabetically.
// [d,e,f,a] -> [a,d,e,f]

let myStringArray = ["d", "e", "f", "a"];
console.log(myStringArray.sort());
// second method

/*
function ShortTheArray(array)
{
    for(let i =0; i<array.length-1; i++)
    {
        for(let j=i+1; j<array.length; j++)
        {
            if(array[i]> array[j])
            {
                // swap the number;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
const shortArray = ShortTheArray(myStringArray);
console.log(shortArray);
*/

// Write a program that takes an array of numbers as input and removes all duplicates.
// [a,a,b,d,e,e,f] -> [a.b.d.e.f]
let MyArray = ["a", "a", "b", "d", "e", "e", "f"];
let uniqueArray = [...new Set(MyArray)];
console.log(uniqueArray);

/* Write a program that takes an array of numbers as input and returns a new array with only the even numbers.
[1,2,3,4,5,6,7,8,9] -> [2,4,6,8]

*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let EvenNumber = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    EvenNumber.push(arr[i]);
  }
}

console.log(EvenNumber);

// Object Manipulation:
// Write a program that creates an object representing a person with properties like name, age, and gender.
const Person = [
  {
    name: "Ram",
    age: 20,
    gender: "male",
  },
  {
    name: "Sita",
    age: 21,
    gender: "female",
  },
  {
    name: "Hari",
    age: 30,
    gender: "male",
  },
];
console.log(Person[0].name);

//  ages = Person.map(e=> e.age)
//  console.log(ages);
// only object

Student = {
  name: "Shyam",
  age: 30,
  gender: "male",
  address: {
    city: "ktm",
    country: "Nepal",
    Zip: "12000",
  },
};
console.log(
  Student.address["country"],
  Student.name,
  Student.age,
  Student.gender
);
console.log(Student);

/* Write a program that takes two objects as input and merges their properties into a single object.
{name: sudarshan, address: gairidhara} {phone: 1234567890} 
-> {name: sudarshan, address: gairidhara} phone: 1234567890}
 */

const object1 = {
  name: "sudarshan",
  address: "gairidhara",
};
const object2 = {
  phone: 1234567890,
};

let mergeObject = {
  ...object1,
  ...object2,
};
// Spread Operator (...): This operator allows us to spread the properties of one object into another.

console.log(mergeObject);

// another method
let FinalObject = Object.assign({}, object1, object2);
console.log(FinalObject);

/*  
Write a program that takes an array of objects representing students and returns an array of their names.
[{name: sudarshan}, {name: nikesh}] -> [sudarshan, nikesh]
*/
students = [
  {
    name: "sudarshan",
  },
  {
    name: "nikesh",
  },
];
const names = students.map((s) => s.name);
console.log(names);

/* Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
[{name: Sudarshan, marks: 40}, {name: suraj, marks: 100}, {name: simran, marks: 100}]
	-> Average is 80
 */

Student1 = [
  { name: "Sudarshan", marks: 40 },
  { name: "suraj", marks: 100 },
  { name: "simran", marks: 100 },
];

// using filter function
let total = 0;
const TotalMarks = Student1.map((s) => s.marks);
console.log(TotalMarks);

for (let i = 0; i < TotalMarks.length; i++) {
  total = total + TotalMarks[i];
}
const Avg = total / 3;
console.log(Avg);

// Write a program that takes an array of objects representing books with properties like title and author, and sorts them alphabetically by title.

let Books = [
  {
    Title: "JAVA",
    author: "Ram"
  },
  {
    Title: "python",
    author: "Sita"
  },
  {
    Title: "JavaScript",
    author: "John"
  },
  {
    Title: "DBMS",
    author: "Hari"
  }
];

// Sorting the books by Title
Books.sort((x,y)=>{
  let Title1 = x.Title.toLowerCase();
  let Title2 = y.Title.toLowerCase();

  if(Title1 > Title2){
    return 1
  }
  if(Title1 < Title2)
  {
    return -1
  }

});
console.log(Books);





