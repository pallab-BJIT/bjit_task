const simulateCalculation = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = value * 2;
      console.log(`Calculation for ${value} completed: Result -> ${result}`);
      resolve(result);
    }, 2000);
  });
};

const performCalculations = async () => {
  try {
    console.log("Starting calculations...");

    const result1 = await simulateCalculation(5);
    const result2 = await simulateCalculation(result1);
    const result3 = await simulateCalculation(result2);

    console.log("Final result:", result3);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

performCalculations();
