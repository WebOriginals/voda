if(document.querySelector('.comfort')) {
    if (window.screen.width < 767) {
        let comfort = document.querySelector('.comfort__slider');
        comfort.classList.add('_swiper');
    }
}
if(document.querySelector('._swiper')) {
//BildSlider
    let sliders = document.querySelectorAll('._swiper');
    if (sliders) {
        for (let index = 0; index < sliders.length; index++) {
            let slider = sliders[index];

            if (!slider.classList.contains('swiper')) {
                let slider_items = slider.children;
                if (slider_items) {
                    for (let index = 0; index < slider_items.length; index++) {
                        let el = slider_items[index];
                        el.classList.add('swiper-slide');
                    }
                }
                //добавляем навигпцию в контейнер

                let slider_content = slider.innerHTML;
                let slider_wrapper = document.createElement('div');
                slider_wrapper.classList.add('swiper-wrapper');
                slider_wrapper.innerHTML = slider_content;
                slider.innerHTML = '';
                slider.appendChild(slider_wrapper);
                slider.classList.add('swiper');

                /*if(document.querySelector('._swiper_nav')) {
                    let navElement = slider.querySelector('._swiper_nav');
                    slider.appendChild(navElement);
                }
                if(document.querySelector('._swiper_pagination')){
                    let paginationElement = slider.querySelector('._swiper_pagination');
                    slider.appendChild(paginationElement);
                }*/


                if (slider.classList.contains('_swiper_scroll')) {
                    let sliderScroll = document.createElement('div');
                    sliderScroll.classList.add('swiper-scrollbar');
                    slider.appendChild(sliderScroll);
                }
            }
            if (slider.classList.contains('_gallery')) {
                //slider.data('lightGallery').destroy(true);
            }
        }
        sliders_bild_callback();
    }

    function sliders_bild_callback(params) {
    }

    let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index];
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            });
            sliderScroll.scrollbar.updateSize();
        }
    }

};


