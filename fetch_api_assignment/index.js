let fetchButton = document.getElementById("fetchButton");
let output = document.getElementById("output");
let productList = document.getElementById("productList");

fetchButton.addEventListener("click", () => {
    output.textContent = "Loading...";
    productList.innerHTML = "";

    fetch("https://dummyjson.com/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            output.textContent = "";
            data.products.forEach(product => {
                const li = document.createElement("li");
                li.className = "card";

                li.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <strong>Price: $${product.price}</strong>
                `;

                productList.appendChild(li);
            });
        })
        .catch((error) => {
            output.textContent = "Failed to fetch data.";
            console.error("There was a problem with the fetch operation:", error);
        });
});
