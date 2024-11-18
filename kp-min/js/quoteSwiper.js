var swiper = new Swiper(".quoteSwiper", {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    enabled: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true
      },
});