function countWords() {
    const text = document.getElementById('inputText').value;
    const words = text.trim().split(/\s+/).filter(Boolean); // Розділяємо текст за пробілами і фільтруємо порожні елементи
    const wordCount = words.length;

    // Виводимо результат
    document.getElementById('result').textContent = `Кількість слів: ${wordCount}`;
}
