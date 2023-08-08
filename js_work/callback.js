const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (num) => {
  return num % 2 === 0;
};

const func = (numbers, evenCallback) => {
  let evenNumber = [];
  let oddNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    evenCallback(numbers[i])
      ? evenNumber.push(numbers[i])
      : oddNumber.push(numbers[i]);
  }
  return [evenNumber, oddNumber];
};

const ans = func(num, isEven);

console.log(`Even Numbers are : ${ans[0]}`);
console.log(`Odd Numbers are : ${ans[1]}`);
