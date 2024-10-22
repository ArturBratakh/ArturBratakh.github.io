// script.js

// Масив об'єктів products
const products = [
    { name: "Laptop", category: "Electronics", price: 1000, inStock: 5 },
    { name: "Phone", category: "Electronics", price: 500, inStock: 0 },
    { name: "Tablet", category: "Electronics", price: 300, inStock: 2 },
    { name: "Monitor", category: "Electronics", price: 200, inStock: 3 },
    { name: "Mouse", category: "Accessories", price: 20, inStock: 10 },
    { name: "Keyboard", category: "Accessories", price: 50, inStock: 0 }
];

// Функція для отримання товарів, які є в наявності
function getAvailableProducts(products) {
    return products.filter(product => product.inStock > 0);
}

// Функція для пошуку товару за назвою
function findProductByName(products, productName) {
    const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    return product ? product : "Товар не знайдено";
}

// Відображення доступних товарів на сторінці
function displayAvailableProducts() {
    const availableProductsDiv = document.getElementById("available-products");
    const availableProducts = getAvailableProducts(products);
    availableProductsDiv.innerHTML = ""; // Очистити вміст

    if (availableProducts.length === 0) {
        availableProductsDiv.innerHTML = "Немає доступних товарів.";
        return;
    }

    availableProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.textContent = `${product.name} - ${product.category}, Ціна: ${product.price} грн, В наявності: ${product.inStock}`;
        availableProductsDiv.appendChild(productDiv);
    });
}

// Обробник події для кнопки пошуку
document.getElementById("search-button").addEventListener("click", () => {
    const productName = document.getElementById("product-name").value;
    const searchResult = findProductByName(products, productName);
    document.getElementById("search-result").textContent = typeof searchResult === "string" ? searchResult : `${searchResult.name} - ${searchResult.category}, Ціна: ${searchResult.price} грн, В наявності: ${searchResult.inStock}`;
});

// Обробник події для кнопки оновлення доступних товарів
document.getElementById("refresh-button").addEventListener("click", displayAvailableProducts);

// Відобразити доступні товари при завантаженні сторінки
displayAvailableProducts();
