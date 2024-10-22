// script.js

// Масив об'єктів products
const products = [
    { productId: 1, name: "Ноутбук", price: 1000 },
    { productId: 2, name: "Смартфон", price: 800 },
    { productId: 3, name: "Монітор", price: 500 },
    { productId: 4, name: "Миша", price: 50 },
    { productId: 5, name: "Клавіатура", price: 100 }
];

// Масив об'єктів purchases
const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 5 },
    { purchaseId: 3, productId: 3, quantity: 1 },
    { purchaseId: 4, productId: 4, quantity: 10 },
    { purchaseId: 5, productId: 1, quantity: 1 },
];

// Функція для обчислення загального доходу від продажу товарів
function getTotalSales(products, purchases) {
    return purchases.reduce((acc, purchase) => {
        const product = products.find(item => item.productId === purchase.productId); // Знаходимо товар за productId

        if (product) {
            const total = product.price * purchase.quantity; // Обчислюємо загальний дохід для цього товару
            acc[product.name] = (acc[product.name] || 0) + total; // Додаємо дохід до загальної суми для товару
        }

        return acc; // Повертаємо акумулятор
    }, {});
}

// Функція для обчислення та відображення загального доходу
function calculateTotalSales() {
    const totalSales = getTotalSales(products, purchases);
    const totalDiv = document.getElementById("total-sales");
    
    // Виводимо результати на екран
    totalDiv.innerHTML = Object.entries(totalSales)
        .map(([productName, total]) => `${productName}: ${total} грн.`)
        .join("<br>") || "Немає продажів.";
}
