const axios = require("axios");
const apiCall = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

apiCall();
