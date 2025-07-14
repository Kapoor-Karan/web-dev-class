

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    debounce(() => {
        const value = event.target.value;
        console.log(`Searching for: ${value}`);
    }, 500);
})

let timeoutId;
function debounce(func, delay) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        func();
    }, delay);
}
