(function() {
    const slides = [
        '<div><img class="brewery__slider" src="images/brewery-workers.png" alt="Brewery workers"></div>',
        '<div><img class="brewery__slider" src="images/brewery-barrels.png" alt="Brewery barrels"></div>',
        '<div><img class="brewery__slider" src="images/brewery-plant.png" alt="Brewery plant"></div>',
        '<div><img class="brewery__slider" src="images/brewery-product.png" alt="Brewery product"></div>',
        '<div><img class="brewery__slider" src="images/brewery-work.png" alt="Brewery work"></div>',
        '<div><img class="brewery__slider" src="images/brewery-bottels.png" alt="Brewery bottels"></img></div>'
    ];
    
    const prevButton = document.querySelector('.brewery__slider_btn_prev');
    const nextButton = document.querySelector('.brewery__slider_btn_next');
    
    let currentSlide = 0;

    function renderSlides(slides) {
        const slidesContainer = document.querySelector('.brewery__slider_wrapper');
        slidesContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide +1;
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        renderSlides(slides);
    }

    renderSlides(slides);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });

})();