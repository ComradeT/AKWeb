//Burger

(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menuItem = document.querySelector('.header__menu');
    const bodyLock = document.querySelector('body');
    const paginationNone = document.querySelector('.page__pagination');
    burgerItem.addEventListener('click', () => {
        burgerItem.classList.toggle('active');
        menuItem.classList.toggle('active');
        bodyLock.classList.toggle('lock');
        paginationNone.classList.toggle('display-none');
    });
}());

let pageSlider = new Swiper('.page', {
    //Свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    //Вертикальный слайдер
    direction: 'vertical',

    //Кол-во слайдов для показа
    slidersPerView: 'auto',

    //Вкл параллакс
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    simulateTouch: false,

    //Управление колёсиком мыши
    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    ///Навигация
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },
    //Скролл
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        //Возможность перескакивать скролл
        draggable: true
    },

});

/*slider-bottom*/

let reviewsSlider = new Swiper('.reviews__slider', {
    slideActiveClass: "reviews__slide-active",
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 90,
    loop: true,
    ///Навигация
    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "reviews__bullet",
        bulletActiveClass: "reviews__bullet_active",
    },
});