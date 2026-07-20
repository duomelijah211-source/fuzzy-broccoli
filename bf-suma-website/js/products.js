const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function createCard(product){

    return `

    <article class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <span class="category">
            ${product.category}
        </span>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <h4>${product.price}</h4>

        <button
           class="btn view-product"
           data-id="${product.id}">

           View Details

        </button>

    </article>

    `;

}

function renderProducts(productList){

    productsGrid.innerHTML = "";

    productList.forEach(product => {

        productsGrid.innerHTML += createCard(product);

    });
    attachModalEvents();

}

renderProducts(products);

attachModalEvents();

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

function filterProducts(){

    const keyword = searchInput.value.toLowerCase();

    const category = categorySelect.value;

    const filtered = products.filter(product => {

        const matchesName =
            product.name.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "all" ||
            product.category === category;

        return matchesName && matchesCategory;

    });

    renderProducts(filtered);

}