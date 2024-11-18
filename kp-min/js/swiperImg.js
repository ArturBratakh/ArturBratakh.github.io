var swiper = new Swiper(".mySwiper", {
    effect: "creative",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    initialSlide: 2,
    enabled: true,
    creativeEffect: {
        prev: {
          translate: ['-50px', '-30px', -1],
          opacity: 0.5,
        },
        next: {
          translate: ['-100px', '-60px', -2],
          opacity: 0.2,
        },
    },
});