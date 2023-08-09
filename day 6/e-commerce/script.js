const loader = document.getElementById("loader");
const container = document.getElementById("container");
const productHeader = document.getElementById("product-header");
const btn = document.getElementById("btn");

const renderProductCard = (products) => {
  const productListHTML = products
    .map((product, i) => {
      return `
          <div class="product-card" onclick="onClickHandler(${i})">
          <div>
          <img class="product-img" src=${product.images[0]}>
          </div>
            <div class="product-text">
              <h3>${product.title}</h3>
              <p>${product.category}</p>
              <p>${product.description}</p>
              <strong>$${product.price}</strong>
            </div>
          </div>
          `;
    })
    .join("");

  document.getElementById("productList").innerHTML = productListHTML;
  loader.style.display = "none";
  container.style.display = "block";
  productHeader.innerText = "Product List";
};

const onClickHandler = (i) => {
  const productCard = document.querySelectorAll(".product-card");
  const clickedProductCard = productCard[i];
  clickedProductCard.style.background = "rgb(2,0,36)";
  clickedProductCard.style.background =
    " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(17,17,88,0.4066001400560224) 28%, rgba(0,212,255,1) 100%);";
  clickedProductCard.style.color = "white";
};
const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = await data.products;
    renderProductCard(products);
    console.log(data);
  } catch (error) {}
};

getProducts();
