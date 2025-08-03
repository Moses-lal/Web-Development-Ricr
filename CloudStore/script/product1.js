async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  // console.log(data);

  

  //   for (var i = 0; i < products.length; i++) {
  //     console.log(products[i]);
  //   }

  let productList = document.getElementById("ProductList");

  data.forEach((element) => {
    // console.log(element);

    let d = document.createElement("div");
    d.classList.add("row", "border", "border-dark", "rounded", "shadow", "p-3");

    d.innerHTML = `
                <div class="col-3 border border-danger">
            <img
              src=${element.image}
              alt="ProductImage"
              width="100%"
              class="object-fit-cover"
            />
          </div>
          <div class="col-9 border border-success p-4">
            <h2>${element.title}</h2>
            
            <div class="d-grid mt-4">
              <span class="text-primary">
                <b>MRP:</b> ₹${element.price * 85}
              </span>
            </div>
            <div class="mt-4 d-flex gap-3">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning">Add to Cart</button>
            </div>
    `;

    productList.appendChild(d);
  });
}

getProducts();
