(function () {

    const slides = [
        '<div><img src="img/tom-peterson.png" alt="tom peterson"></div>',
        '<div><img src="img/erica-maddison.png" alt="erica maddison"></div>',
        '<div><img src="img/david-bodwan.png" alt="erica maddison"></div>',
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

    setInterval(nextSlide, 2000);

    renderSlides(slides);

})();