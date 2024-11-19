function checkPassword() {
    const password = document.getElementById('password').value;
    const resultElement = document.getElementById('result');

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password); // Перевірка на велику літеру
    const hasLowerCase = /[a-z]/.test(password); // Перевірка на малу літеру
    const hasDigit = /\d/.test(password); // Перевірка на цифру
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Перевірка на спеціальний символ

    // Перевірка всіх вимог
    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        resultElement.textContent = "Коректний пароль!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Невірний пароль. Пароль має задовольняти всі вимоги.";
        resultElement.style.color = "red";
    }
}
