async function getItem() {
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );

  const data = await response.json();

  console.log(data);

  let productList = document.getElementById("product");

  data.forEach((element) => {
    let d = document.createElement("div");

    d.classList.add(
      "col-3",
      "shadow",
      "my-4",
      "mx-5",
      "d-grid",
      "align-items-center"
    );

    d.innerHTML = `

        <div>
            <img src="${
              element.api_featured_image
            }" alt="" class=" my-3 mx-4 d-block shadow img" width="200px" height="200px"   />
            <h6 class=" head my-3">
            <a href="../pages/productdetails.html"  class=" product text-decoration-none ">
             ${element.name}
            </a>
            </h6>
          </div>

          <div class="d-flex flex-column gap-1">
            <span class="fs-6 text-success">MRP: ₹ ${(element.price * 85).toFixed()}</span>
            <span class="fs-6 text-info">brand : ${element.brand}</span>
            <span class="fs-6 text-info">Category : ${ (element.category== "") ? "nope" : element.category }</span>
            <span class="fs-6 text-info"
              >Rating
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="12"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  /></svg></span
              > : ${(element.rating===null)? "no rating" : element.rating}/5 (41 revies)</span
            >
             <span class="fs-6 text-white"> product_type : ${
              element.product_type
             } </span>
          </div>
        <div>
        `;

        const a = d.querySelector(".product");

        a.addEventListener("click", (e) => {
          selectData(element);
        });

    productList.appendChild(d);
  });
}

getItem();


function selectData(product){
  sessionStorage.setItem("ChoosedItem", JSON.stringify(product));
}