const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = num.reduce((initialValue, currentValue) => {
  return currentValue % 2 == 0 ? initialValue + currentValue : initialValue;
}, 0);

console.log(ans);
