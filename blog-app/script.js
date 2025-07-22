const LS_KEY = 'my_blog_posts';
const defaultBlogs = [
    { id: 1, title: "AI Future", description: "AI is transforming daily routines.", url: "https://example.com/ai-future", author: "Alice", date: "2023-10-26", category: "Technology" },
    { id: 2, title: "Travel Gems", description: "Exploring hidden places in Asia.", url: "https://example.com/travel-gems", author: "Bob", date: "2023-11-15", category: "Travel" },
    { id: 3, title: "Sourdough Art", description: "Mastering sourdough baking.", url: "https://example.com/sourdough-art", author: "Carol", date: "2023-12-01", category: "Food" }
];
let blogs = getBlogsFromStorage();
function getBlogsFromStorage() {
    const storedBlogs = localStorage.getItem(LS_KEY);
    return storedBlogs ? JSON.parse(storedBlogs) : defaultBlogs;
}
function saveBlogsToStorage() {
    localStorage.setItem(LS_KEY, JSON.stringify(blogs));
}
function renderBlogCards(containerId, blogList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const noResultsElement = document.getElementById(`no-results-${containerId.split('-')[0]}`);
    if (blogList.length === 0) {
        if (noResultsElement) noResultsElement.classList.remove('hidden');
    } else {
        if (noResultsElement) noResultsElement.classList.add('hidden');
        blogList.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            blogCard.innerHTML = `
                <h3><a href="${blog.url}">${blog.title}</a></h3>
                <p>${blog.description}</p>
                <div class="meta">
                    <span>By: ${blog.author}</span> | <span>${new Date(blog.date).toLocaleDateString()}</span> | <span>${blog.category}</span>
                </div>
            `;
            container.appendChild(blogCard);
        });
    }
}
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}
let currentSearchTerm = '';
let currentCategory = '';
let currentSortOrder = 'newest';
function filterAndSortBlogs() {
    let filteredBlogs = [...blogs];
    if (currentSearchTerm) {
        filteredBlogs = filteredBlogs.filter(blog =>
            blog.title.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    if (currentCategory) {
        filteredBlogs = filteredBlogs.filter(blog =>
            blog.category === currentCategory
        );
    }
    filteredBlogs.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return currentSortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    renderBlogCards('home-blogs-container', filteredBlogs);
}
function initHomePage() {
    blogs = getBlogsFromStorage();
    filterAndSortBlogs();
    const debouncedSearch = debounce((e) => {
        currentSearchTerm = e.target.value;
        filterAndSortBlogs();
    }, 300);
    document.getElementById('search-input').addEventListener('input', debouncedSearch);
    document.getElementById('category-filter').addEventListener('change', (e) => {
        currentCategory = e.target.value;
        filterAndSortBlogs();
    });
    document.getElementById('sort-order').addEventListener('change', (e) => {
        currentSortOrder = e.target.value;
        filterAndSortBlogs();
    });
}
function initBlogsPage() {
    blogs = getBlogsFromStorage();
    renderBlogCards('all-blogs-container', blogs);
}
function initAdminPage() {
    const addBlogForm = document.getElementById('add-blog-form');
    addBlogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newBlog = {
            id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
            title: document.getElementById('blog-title').value,
            description: document.getElementById('blog-description').value,
            url: document.getElementById('blog-url').value,
            author: document.getElementById('blog-author').value,
            date: document.getElementById('blog-date').value,
            category: document.getElementById('blog-category').value
        };

        blogs.push(newBlog);
        saveBlogsToStorage();
        addBlogForm.reset();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const bodyId = document.body.id;
    if (bodyId === 'home-page') {
        initHomePage();
    } else if (bodyId === 'blogs-page') {
        initBlogsPage();
    } else if (bodyId === 'admin-page') {
        initAdminPage();
    }
});
