const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ans = num.reduce((initialValue, currentValue) => {
  if (currentValue % 2 == 0) {
    return initialValue + currentValue;
  }
  return initialValue;
}, 0);

console.log(ans);
