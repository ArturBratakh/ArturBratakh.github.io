// script.js

// Масив об'єктів students
const students = [
    { name: "Анна", age: 20, grade: 85, group: "A" },
    { name: "Максим", age: 22, grade: 78, group: "B" },
    { name: "Олег", age: 21, grade: 90, group: "A" },
    { name: "Ірина", age: 23, grade: 88, group: "C" },
    { name: "Віктор", age: 20, grade: 75, group: "B" },
    { name: "Катерина", age: 22, grade: 95, group: "A" },
    { name: "Тетяна", age: 24, grade: 80, group: "C" }
];

// Відображення студентів на сторінці
function displayStudents() {
    const studentsDiv = document.getElementById("students");
    studentsDiv.innerHTML = ""; // Очистити вміст
    students.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.className = "student";
        studentDiv.textContent = `${student.name}, Вік: ${student.age}, Оцінка: ${student.grade}, Група: ${student.group}`;
        studentsDiv.appendChild(studentDiv);
    });
}

// Функція для групування студентів
function groupBy(students) {
    return students.reduce((acc, student) => {
        if (!acc[student.group]) {
            acc[student.group] = []; // Створюємо нову групу, якщо її ще немає
        }
        acc[student.group].push(student); // Додаємо студента до групи
        return acc;
    }, {});
}

// Відображення групованих студентів на сторінці
function displayGroupedStudents() {
    const groupedStudents = groupBy(students);
    const groupedDiv = document.getElementById("grouped-students");
    groupedDiv.innerHTML = ""; // Очистити вміст

    for (const group in groupedStudents) {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.innerHTML = `<strong>Група ${group}:</strong><br>`;
        groupedStudents[group].forEach(student => {
            groupDiv.innerHTML += `${student.name} (Оцінка: ${student.grade})<br>`;
        });
        groupedDiv.appendChild(groupDiv);
    }
}

// Функція для сортування студентів за оцінками
function sortStudentsByGrade(students) {
    return students.slice().sort((a, b) => b.grade - a.grade); // Сортуємо за оцінкою (в порядку спадання)
}

// Відображення відсортованих студентів на сторінці
function displaySortedStudents() {
    const sortedStudents = sortStudentsByGrade(students);
    const sortedDiv = document.getElementById("sorted-students");
    sortedDiv.innerHTML = ""; // Очистити вміст

    sortedStudents.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.className = "student";
        studentDiv.textContent = `${student.name}, Оцінка: ${student.grade}`;
        sortedDiv.appendChild(studentDiv);
    });
}

// Відображення студентів, групованих та відсортованих при завантаженні сторінки
displayStudents();
displayGroupedStudents();
displaySortedStudents();
