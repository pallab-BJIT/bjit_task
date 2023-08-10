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
  const productId = i + 1;
  window.location.href = `product.html?productId=${productId}`;
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
