let ourPromise = new Promise((resolve, reject) => {
  const x = 9;
  if (x % 2) {
    resolve("It's an odd number");
  } else {
    reject("It's an even number");
  }
})
  .then((msg) => {
    console.log(`Success -> ${msg}`);
  })
  .catch((err) => {
    console.log(`Error -> ${err}`);
  })
  .finally(() => {
    console.log("It will always run");
  });
