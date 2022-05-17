import Swiper, { Pagination, Navigation } from 'swiper';
Swiper.use([Pagination, Navigation]);

(() => {
    const swiper2 = new Swiper('.reviews__slider', {
        speed: 600,
        loop: false,
        slidesPerView: '1',
        navigation: {
            nextEl: '.reviews__arrow-next',
            prevEl: '.reviews__arrow-prev',
        },
        pagination: {
            el: '.reviews__pagination',
            type: 'fraction',
        },
        // on: {
        //     slideNextTransitionEnd: function () {
        //         console.log('swiper initialized');
        //     },
        // },
    });

})();
