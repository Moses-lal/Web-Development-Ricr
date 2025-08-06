async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  // console.log(data);

  //   for (var i = 0; i < products.length; i++) {
  //     console.log(products[i]);
  //   }

  let productList = document.getElementById("ProductList2");

  data.forEach((element) => {
    // console.log(element);

    let d = document.createElement("div");
    d.classList.add(
      "col-3",
      "border",
      "border-dark",
      "rounded",
      "shadow",
      "p-3",
      "mx-5",
      "my-4"
    );

    d.innerHTML = `
               
          <img
            src="${element.image}"
            alt="item1photo"
            class="border shadow my-2 img"
            width="250px"
            height="250px"
          />

          <div class="d-flex flex-column gap-1">
            <h4 class="text-info">
             ${element.title}
            </h4>

            <div class="text-info">
              <span>MRP: ₹${(element.price*85).toFixed()}</span>
            </div>

            <div>
              <span class="fs-5">
                rating : ${element.rating.rate}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
                  />
                </svg>
                <span>(${element.rating.count} reviews)</span>
              </span>
            </div>

            <div class="my-1 d-flex gap-1">
              <button class="btn btn-warning">Buy Now</button>
              <button class="btn btn-outline-warning text-black">
                Add to Cart
              </button>
            </div>
          </div>
        
    `;

    productList.appendChild(d);
  });
}

getProducts();
