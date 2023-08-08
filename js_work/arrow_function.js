const factorial = (num) => {
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
