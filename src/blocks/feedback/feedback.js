
import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);
(() => {
    $('.feedback__block-title').on('click', function (e) {
        $(this)
            .toggleClass('opened')
            .next('.feedback__block-content')
            .slideToggle();
    });


    const swiper2 = new Swiper('.swiper-container', {
        speed: 600,
        loop: false,
        slidesPerView: '1',
        navigation: {
            nextEl: '.swiper-button-next-reviews',
            prevEl: '.swiper-button-prev-reviews',
        },
        pagination: {
            el: '.swiper-pagination-reviews',
            type: 'fraction',
        },
        // on: {
        //     slideNextTransitionEnd: function () {
        //         console.log('swiper initialized');
        //     },
        // },
    });


})();
