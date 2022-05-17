
(() => {
    $('.feedback__block-title').on('click', function (e) {
        $(this)
            .toggleClass('opened')
            .next('.feedback__block-content')
            .slideToggle();
    });
})();
