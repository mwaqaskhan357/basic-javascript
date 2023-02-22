// This is basic javascript
console.log({ message: "hello World" });

const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

console.log(multiply(3, 2));
console.log(multiply(2, 24));
console.log(multiply(0, 2));

const greeting = (name) => {
  return `Hello, ${name}!`;
};

console.log(greeting("Waqas"));
console.log(greeting("Usman"));

const sumOfArray = (arr) => {
  return arr.reduce((prev, curr) => prev + curr, 0);
};

console.log(sumOfArray([1, 2, 3]));
console.log(sumOfArray([1]));
console.log(sumOfArray([1, 4]));

const calculateBMI = (weight, height) => {
  return weight / (height * height);
};

console.log(calculateBMI(30, 10));
console.log(calculateBMI(10, 10));

const strLength = (str) => {
  return str.length;
};

console.log(strLength("abcd"));
console.log(strLength("abc"));

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("abcde"));
console.log(reverseString("xyz"));

const greetingPerson = (name) => {
  return `Hello, ${name.firstName} ${name.lastName}!`;
};

console.log(greetingPerson({ firstName: "Waqas", lastName: "Khan" }));
console.log(greetingPerson({ firstName: "Usman", lastName: "Khan" }));

const capitalize = (str) => {
  const firstChar = str.charAt(0).toUpperCase();
  let newArr = str.split("");
  newArr.splice(0, 1, firstChar);
  return newArr.join("");
};

console.log(capitalize("waqas"));
console.log(capitalize("khan"));

const arrayCaptilize = (arr) => {
  return arr.map((ele) => capitalize(ele));
};

console.log(arrayCaptilize(["waqas", "khan"]));

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log({ isisPalindrome: isPalindrome("abcba") });
console.log({ isisPalindrome: isPalindrome("abc") });
