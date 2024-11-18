const navbar = document.querySelector('.nav-scroll');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const icon = document.querySelector('.burger-icon');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        if (nav.classList.contains('nav-active')) {
            icon.setAttribute('href', 'images/icons.svg#cross');
        } else {
            icon.setAttribute('href', 'images/icons.svg#burger');
        }

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (navbar) { 
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
};

const app = () => {
    navSlide();
};

app();

const showcaseItems = [
    { image: 'images/showcase-1.webp', title: 'Web UI дизайн', description: 'Креативний UI дизайн' },
    { image: 'images/showcase-2.webp', title: 'Розробка цифрової стратегії', description: 'Маркетинг в соцмережах' },
    { image: 'images/showcase-3.webp', title: 'Графічний дизайн', description: 'Графічний дизайн' },
    { image: 'images/showcase-4.webp', title: 'UI дизайн', description: 'Креативний ребрендинг логотипу' },
    { image: 'images/showcase-5.webp', title: 'Графічний дизайн', description: 'Графічний дизайн' },
    { image: 'images/showcase-6.webp', title: 'UI дизайн', description: 'Креативний ребрендинг логотипу' }
];

function renderShowcase() {
    const container = document.querySelector('#showcases .container');

    if (!container) {
        console.warn("Контейнер #showcases не знайдено.");
        return;
    }
    
    showcaseItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = 'showcase demo';
        imageWrapper.appendChild(img);

        const textContent = document.createElement('div');
        textContent.classList.add('text-content');
        
        const title = document.createElement('h4');
        title.textContent = item.title;
        
        const description = document.createElement('p');
        description.textContent = item.description;
        
        textContent.appendChild(title);
        textContent.appendChild(description);

        card.appendChild(imageWrapper);
        card.appendChild(textContent);

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderShowcase);



