// Отримуємо всі потрібні елементи
const inputs = document.querySelectorAll('.cls');
const button = document.getElementById('task');
const sumInput = document.getElementById('sum');

// Додаємо обробник події для кнопки
button.addEventListener('click', () => {
    let sum = 0;

    // Проходимо по кожному input та додаємо значення до суми
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum += value;
        }
    });

    // Записуємо суму в четвертий input
    sumInput.value = sum;
});
