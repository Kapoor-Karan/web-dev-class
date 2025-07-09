let fetchButton = document.getElementById("fetchButton");
let output = document.getElementById("output");

fetchButton.addEventListener("click", () => {

    fetch("https://dummy.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
});

fetchButton.addEventListener("click", () => {
    output.textContent = "Loading...";
});

