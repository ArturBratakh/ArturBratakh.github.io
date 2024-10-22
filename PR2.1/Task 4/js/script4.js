// script.js

// Масив об'єктів books
const books = [
    { title: "Війна і мир", author: "Лев Толстой", year: 1869, rating: 5, isRead: true },
    { title: "1984", author: "Джордж Орвелл", year: 1949, rating: 4.5, isRead: true },
    { title: "Мобі Дік", author: "Герман Мелвілл", year: 1851, rating: 4, isRead: false },
    { title: "Убити пересмішника", author: "Гарпер Лі", year: 1960, rating: 4.8, isRead: true },
    { title: "Джейн Ейр", author: "Шарлотта Бронте", year: 1847, rating: 4.2, isRead: false },
    { title: "Брати Карамазови", author: "Федір Достоєвський", year: 1880, rating: 5, isRead: true },
    { title: "Гордість і упередження", author: "Джейн Остін", year: 1813, rating: 4.6, isRead: false },
];

// Відображення книг на сторінці
function displayBooks() {
    const booksDiv = document.getElementById("books");
    booksDiv.innerHTML = ""; // Очистити вміст
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.textContent = `${book.title}, Автор: ${book.author}, Рік: ${book.year}, Рейтинг: ${book.rating}, Прочитана: ${book.isRead ? "Так" : "Ні"}`;
        booksDiv.appendChild(bookDiv);
    });
}

// Функція для отримання непрочитаних книг
function getUnreadBooks(books) {
    return books.filter(book => !book.isRead).map(book => book.title);
}

// Відображення непрочитаних книг на сторінці
function displayUnreadBooks() {
    const unreadBooks = getUnreadBooks(books);
    const unreadDiv = document.getElementById("unread-books");
    unreadDiv.innerHTML = `Непрочитані книги: ${unreadBooks.length > 0 ? unreadBooks.join(", ") : "Немає непрочитаних книг"}`;
}

// Функція для отримання книг за автором
function getBooksByAuthor(author) {
    return books.filter(book => book.author.toLowerCase() === author.toLowerCase()).sort((a, b) => a.year - b.year);
}

// Відображення книг за автором на сторінці
function displayBooksByAuthor() {
    const author = document.getElementById("author-input").value;
    const booksByAuthor = getBooksByAuthor(author);
    const authorDiv = document.getElementById("books-by-author");
    authorDiv.innerHTML = ""; // Очистити вміст

    if (booksByAuthor.length > 0) {
        booksByAuthor.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.className = "book";
            bookDiv.textContent = `${book.title}, Рік: ${book.year}, Рейтинг: ${book.rating}`;
            authorDiv.appendChild(bookDiv);
        });
    } else {
        authorDiv.textContent = `Книги автора "${author}" не знайдено.`;
    }
}

// Функція для отримання найкращих книг
function getTopRatedBooks(books) {
    return books.filter(book => book.rating > 4).sort((a, b) => b.rating - a.rating);
}

// Відображення найкращих книг на сторінці
function displayTopRatedBooks() {
    const topRatedBooks = getTopRatedBooks(books);
    const topRatedDiv = document.getElementById("top-rated-books");
    topRatedDiv.innerHTML = ""; // Очистити вміст

    if (topRatedBooks.length > 0) {
        topRatedBooks.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.className = "book";
            bookDiv.textContent = `${book.title}, Автор: ${book.author}, Рейтинг: ${book.rating}`;
            topRatedDiv.appendChild(bookDiv);
        });
    } else {
        topRatedDiv.textContent = "Немає книг з рейтингом вище 4.";
    }
}

// Відображення книг, непрочитаних книг, книг за автором та найкращих книг при завантаженні сторінки
displayBooks();
displayUnreadBooks();
displayTopRatedBooks();
