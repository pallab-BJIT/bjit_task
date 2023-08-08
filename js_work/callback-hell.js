let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("production has some error");
      setTimeout(() => {
        console.log("production error is fixed");
        setTimeout(() => {
          console.log("Production done successfully");
        }, 3000);
      }, 2000);
    }, 1000);
  }, 0);
};

production();
