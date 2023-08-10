const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");
// console.log({ productId });

const renderProduct = (data) => {
  const productName = document.getElementById("product-name");
  const imgDiv = document.querySelectorAll(".product-img");
  const categoryElement = document.getElementById("category");
  const descriptionElement = document.getElementById("description");
  const priceElement = document.getElementById("price");
  const ratingElement = document.getElementById("rating");
  const addToCartBtnElement = document.getElementById("add-to-cart-btn");
  const productId = [];
  console.log(categoryElement);
  const images = data.images;
  productName.innerText = `${data.title}`;
  for (let i = 0; i < images.length; i++) {
    imgDiv[i].src = images[i];
  }
  categoryElement.innerText = `Category : ${data.category}`;
  descriptionElement.innerText = `Description \n\n ${data.description}`;
  priceElement.innerText = `Price : $${data.price}`;
  ratingElement.innerText = `Rating : $${data.rating} out of 5`;
  addToCartBtnElement.addEventListener("click", () => {
    // productId.push(data.id);
    localStorage.setItem("products", JSON.stringify(data));
  });
};

const getSingleProductDetails = async () => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  renderProduct(data);
  console.log(data);
};

getSingleProductDetails();
