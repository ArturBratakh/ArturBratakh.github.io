// Масив зображень
const imagesArray = [
    {
        path: 'images/001.jpg',
        title: 'BMW',
        description: 'BMW M5 F90 competition'
    },
    {
        path: 'images/002.jpg',
        title: 'Renault',
        description: 'Renault Kadjar'
    },
    {
        path: 'images/003.jpg',
        title: 'Audi ',
        description: 'Audi R8'
    }
];

// Функція для ініціалізації ротатора
function initPhotoRotator(containerId, images) {
    let currentIndex = 0; // Поточний індекс зображення

    // Отримати контейнер
    const container = document.getElementById(containerId);

    // Створення елементів
    const imageElement = document.createElement('img');
    const captionElement = document.createElement('div');
    const controlsElement = document.createElement('div');
    const backLink = document.createElement('a');
    const nextLink = document.createElement('a');
    const infoElement = document.createElement('div');

    // Додати класи та стилі
    captionElement.className = 'info';
    controlsElement.className = 'controls';
    backLink.textContent = 'Назад';
    nextLink.textContent = 'Вперед';

    // Функція для оновлення зображення
    function updateImage() {
        const image = images[currentIndex];
        imageElement.src = image.path;
        captionElement.innerHTML = `<strong>${image.title}</strong><br>${image.description}`;
        infoElement.textContent = `Фотографія ${currentIndex + 1} з ${images.length}`;

        // Показати або приховати посилання
        backLink.classList.toggle('hidden', currentIndex === 0);
        nextLink.classList.toggle('hidden', currentIndex === images.length - 1);
    }

    // Додати обробники подій
    backLink.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    });

    nextLink.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        }
    });

    // Додати елементи до DOM
    controlsElement.appendChild(backLink);
    controlsElement.appendChild(nextLink);
    container.appendChild(infoElement);
    container.appendChild(imageElement);
    container.appendChild(captionElement);
    container.appendChild(controlsElement);

    // Встановити перше зображення
    updateImage();
}

// Ініціалізація ротатора
initPhotoRotator('rotator', imagesArray);
