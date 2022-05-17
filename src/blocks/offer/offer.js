import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
(() => {
    var menu = ['Готовые инвестиционные решения', 'Накопления и инвестиции с защитой капитала', 'Самостоятельное управление инвестициями', 'Инвестиции для квалифицированного инвестора']
    var mySwiper = new Swiper('.offer__slider-inner', {
        pagination: {
            el: '.offer__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        navigation: {
            nextEl: '.offer__arrow-next',
            prevEl: '.offer__arrow-prev',
        },
    })
})();
