// function displayEvenSum(sum) {
//   console.log("Even Sum is -> ", sum);
// }

// function displayOddSum(sum) {
//   console.log("Odd Sum is -> ", sum);
// }

// function sumFunc(x, y, ourEvenCallback, ourOddCallback) {
//   const sum = x + y;
//   //   if (sum % 2 == 0) {
//   //     ourEvenCallback(sum);
//   //   } else {
//   //     ourOddCallback(sum);
//   //   }
//   sum % 2 == 0 ? ourEvenCallback(sum) : ourOddCallback(sum);
// }
// sumFunc(1, 8, displayEvenSum, displayOddSum);

// const arr = [1, 2, 3, 4];

// arr.reverse();
// const newArr = arr.map((ele) => ele + 1);

// console.log(arr);
// console.log(newArr);

// const dummyArrayOfObjects = [
//   { color: "red", count: 33 },
//   { color: "green", count: 12 },
//   { color: "yellow", count: 12 },
//   { color: "blue", count: 20 },
// ];

// const newDummyArrayOfObjects = dummyArrayOfObjects.map((ele) => {
//   ele.count + 10;
//   return ele;
// });

// console.log(newDummyArrayOfObjects);

// const ourArray = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const filteredArray = ourArray.filter((ele) => ele.length > 6);

// console.log(filteredArray);

// const newDummyArray = [2, 4, 6, 7, 8];

// const reducedArray = newDummyArray.reduce((totalValue, currentValue) => {
//   console.log(`Total value: ${totalValue}`);
//   console.log(`Current value: ${currentValue}`);
//   return totalValue + currentValue;
// }, 0);

// console.log({ reducedArray });

// const dummyCharArray = ["a", "b", "c", "d", "e"];

// const reducedCharArray = dummyCharArray.reduce((initialValue, currentValue) => {
//   console.log(`Initial value: ${initialValue}`);
//   console.log(`Current value: ${currentValue}`);
//   return initialValue + currentValue;
// }, "x");

// console.log({ reducedCharArray });

// //! synchronous

// // let greet_one = "Hello";
// // let greet_two = "world!";
// // console.log({ greet_one });
// // for (let i = 0; i < 300000000; i++) {}
// // console.log({ greet_two });

//! asynchronous
let greet_one = "Hello";
let greet_two = "world!";
console.log({ greet_one });

setTimeout(() => {
  console.log("Async");
}, 2000);

console.log({ greet_two });
