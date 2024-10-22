// script.js

// Масив об'єктів employees
const employees = [
    { name: "Олександр", position: "Менеджер", salary: 50000, years: 5 },
    { name: "Марія", position: "Розробник", salary: 60000, years: 3 },
    { name: "Іван", position: "Дизайнер", salary: 45000, years: 4 },
    { name: "Тетяна", position: "Аналітик", salary: 70000, years: 6 },
    { name: "Сергій", position: "Менеджер", salary: 55000, years: 2 }
];

// Відображення працівників на сторінці
function displayEmployees() {
    const employeesDiv = document.getElementById("employees");
    employeesDiv.innerHTML = ""; // Очистити вміст
    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.className = "employee";
        employeeDiv.textContent = `${employee.name}, Посада: ${employee.position}, Зарплата: ${employee.salary}, Роки на посаді: ${employee.years}`;
        employeesDiv.appendChild(employeeDiv);
    });
}

// Функція для обчислення середньої зарплати
function getAverageSalary(employees) {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / employees.length; // Обчислюємо середню зарплату
}

// Відображення середньої зарплати на сторінці
function displayAverageSalary() {
    const averageSalary = getAverageSalary(employees);
    const averageSalaryDiv = document.getElementById("average-salary");
    averageSalaryDiv.textContent = `Середня зарплата: ${averageSalary.toFixed(2)} грн`; // Виводимо середню зарплату з двома знаками після коми
}

// Функція для знаходження найбільш досвідченого працівника
function findMostExperiencedEmployee(employees) {
    return employees.reduce((max, employee) => (employee.years > max.years ? employee : max));
}

// Відображення найбільш досвідченого працівника на сторінці
function displayMostExperiencedEmployee() {
    const mostExperienced = findMostExperiencedEmployee(employees);
    const mostExperiencedDiv = document.getElementById("most-experienced");
    mostExperiencedDiv.textContent = `Найбільш досвідчений працівник: ${mostExperienced.name}, Посада: ${mostExperienced.position}, Роки на посаді: ${mostExperienced.years}`;
}

// Відображення працівників, середньої зарплати та найбільш досвідченого працівника при завантаженні сторінки
displayEmployees();
displayAverageSalary();
displayMostExperiencedEmployee();
