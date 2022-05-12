import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
(() => {
    var menu = ['Готовые инвестиционные решения', 'Накопления и инвестиции с защитой капитала', 'Самостоятельное управление инвестициями', 'Инвестиции для квалифицированного инвестора']
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination-bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next-unique',
            prevEl: '.swiper-button-prev-unique',
        },
    })
})();
