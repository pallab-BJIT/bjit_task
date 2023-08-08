import { get } from "axios";
const apiCall = async () => {
  try {
    const response = await get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

apiCall();
