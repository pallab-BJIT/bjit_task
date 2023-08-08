const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }

  return true;
};
const primeNumbers = array.filter((ele) => {
  return isPrime(ele);
});

console.log(primeNumbers);
