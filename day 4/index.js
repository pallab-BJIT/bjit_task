console.log("hello world!");

let increment = 5;
increment++;

let exp = 5 ** 2;
console.log(`Value of 5^2: ${exp}`);

console.log(`Value after increment ${increment}`);

const carArray = [
  {
    id: 1,
    color: "Red",
    company: "Toyota",
    numberOfSeat: 2,
    isConditionOkay: true,
  },
  {
    id: 2,
    color: "Blue",
    company: "Audi",
    numberOfSeat: 2,
    isConditionOkay: true,
  },
  {
    id: 3,
    color: "Green",
    company: "Honda",
    numberOfSeat: 4,
    isConditionOkay: false,
  },
];

console.log("The car array:", carArray);
console.log("The 2nd index value of the car array:", carArray[1]);
console.log("Accessing the color property of the car array", carArray[2].color);

function multiply(a, b) {
  return a * b;
}

const firstNumber = 6;
const secondNumber = 5;

console.log(`The multiplication is ${multiply(firstNumber, secondNumber)}`);

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const factorialNumber = 5;

console.log(
  `Factorial of ${factorialNumber} is : ${factorial(factorialNumber)}`
);
