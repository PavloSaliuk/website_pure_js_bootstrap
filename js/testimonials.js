(function () {

    const slides = [
        '<div class="tom__peterson"></div>',
        '<div class="erica__madisson"></div>',
        '<div class="david__bowman"></div>',
    ];

    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.products-carousel__slides');
        slidesContainer.innerHTML = slides[currentSlide];

    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlides(slides);
    }

    renderSlides(slides);

})();