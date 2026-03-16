// https://fakestoreapi.com/products

//fetch("https://fakestoreapi.com/products") // fetching API
  //.then((response) => response.json()) // conversion to json
  //.then((data) => console.log(data)) // using the data
  //.catch((error) => console.error(error)); //  correctly logging out the error

//   asychronous function

const container = document.querySelector("#container");

const getProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res) throw new error("failed to fecth");
    const data = await res.json();
    console.log(data);
    const cheapProduct = data.products.filter((x) => x.price < 10 );
    console.log (data.products);
    cheapProduct.forEach(product => {
      const productEl = document.createElement("div");
      productEl.classList.add("product-card")
      productEl.innerHTML = `
      <span>${product.category}</span>
      <img src = "${product.thumbnail}" alt="product-images"/>
      <h3>${product.title}<h3/>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button> Add to Cart </button>`;

      container.appendChild(productEl);
      
    });
  } catch (error) {
    console.log("error", error);
  }
};
getProduct ();
