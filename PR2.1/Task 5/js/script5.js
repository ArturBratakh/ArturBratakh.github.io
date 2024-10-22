// script.js

// Масив об'єктів orders
const orders = [
    { 
        orderId: 1, 
        customer: { name: "Олег", email: "oleg@example.com" }, 
        items: [ { product: "Ноутбук", price: 1000 }, { product: "Миша", price: 50 } ],
        total: 1050 
    },
    { 
        orderId: 2, 
        customer: { name: "Ірина", email: "irina@example.com" }, 
        items: [ { product: "Смартфон", price: 800 }, { product: "Чохол", price: 30 } ],
        total: 830 
    },
    { 
        orderId: 3, 
        customer: { name: "Олег", email: "oleg@example.com" }, 
        items: [ { product: "Монітор", price: 500 } ],
        total: 500 
    },
    { 
        orderId: 4, 
        customer: { name: "Сергій", email: "sergiy@example.com" }, 
        items: [ { product: "Клавіатура", price: 100 } ],
        total: 100 
    },
];

// Функція для отримання загальної суми витрат клієнта
function getTotalSpentByCustomer(orders, customerName) {
    return orders
        .filter(order => order.customer.name.toLowerCase() === customerName.toLowerCase()) // Фільтрація замовлень за іменем клієнта
        .reduce((total, order) => total + order.total, 0); // Обчислення загальної суми
}

// Функція для обчислення суми витрат та відображення результату
function calculateTotal() {
    const customerName = document.getElementById("customer-name").value;
    const totalSpent = getTotalSpentByCustomer(orders, customerName);
    const totalDiv = document.getElementById("total-spent");

    if (totalSpent > 0) {
        totalDiv.textContent = `Загальна сума витрат клієнта "${customerName}": ${totalSpent} грн.`;
    } else {
        totalDiv.textContent = `Клієнт "${customerName}" не знайдений або не має замовлень.`;
    }
}
