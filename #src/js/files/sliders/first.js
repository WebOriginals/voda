if (document.querySelector('.applications__container')) {
    let applications = new Swiper(".applications__container", {
        init: false,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 800,
        loop:true,
        navigation: {
            nextEl: ".applications-button-next",
            prevEl: ".applications-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px

            990: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1350: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    applications.init();
}
