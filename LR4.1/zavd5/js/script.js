// Генерує капчу
function generateCaptcha(length) {
    const captcha = [];
    for (let i = 0; i < length; i++) {
        const digit = Math.floor(Math.random() * 10); // Генерує випадкову цифру (0-9)
        captcha.push(digit);
    }
    return captcha;
}

// Відображає капчу на сторінці
function displayCaptcha(captchaArray) {
    const captchaContainer = document.getElementById('captcha');
    captchaContainer.innerHTML = ''; // Очищення перед додаванням нової капчі
    captchaArray.forEach(digit => {
        const span = document.createElement('span');
        span.textContent = digit;
        captchaContainer.appendChild(span);
    });
}

// Ініціалізація капчі
function initCaptcha(length) {
    const captchaArray = generateCaptcha(length);
    displayCaptcha(captchaArray);

    const inputField = document.getElementById('user-input');
    const submitButton = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    // Очищення результату при новому введенні
    inputField.addEventListener('input', () => {
        resultDiv.textContent = '';
    });

    // Перевірка капчі
    submitButton.addEventListener('click', () => {
        const userInput = inputField.value;
        const captchaValue = captchaArray.join(''); // Перетворення масиву у строку
        if (userInput === captchaValue) {
            resultDiv.textContent = 'Правильно!';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'Помилка';
            resultDiv.style.color = 'red';
        }
    });
}

// Виклик функції ініціалізації капчі з кількістю цифр 5
initCaptcha(5);
