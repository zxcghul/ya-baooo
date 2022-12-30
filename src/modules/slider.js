const slider = () => {
    const slider = new Swiper('.slider-wrap', {
        loop: true, 
        speed: 2000,
        autoplay: {
            delay: 5000,
           },
        breakpoints: {
            320: {
                slidesPerView: 1,
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            576: {
                // loop: false,
                slidesPerView: 1.3,
                centeredSlides: true,
                // slidesPerView: "auto",
                // centeredSlides: true,
                spaceBetween: 21
            }
        }
    });
}

export default slider
