const axios = require("axios");
async function getProductsByFetchApi() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data);
}
// getProductsByFetchApi();

const getProductsByAxios = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  const data = response.data;
  console.log(data);
};

getProductsByAxios();
