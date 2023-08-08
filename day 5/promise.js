let ourPromise = new Promise((resolve, reject) => {
  const x = 3;
  if (x == 2) {
    resolve();
  } else {
    reject("It didn't work");
  }
})
  .then(() => {
    console.log("Working");
  })
  .then(() => {
    console.log("Another then");
  })
  .catch((err) => {
    console.log("Error->", err);
  })
  .finally(() => {
    console.log("It will always run"); //! finally always runs wether it is success or error
  });
