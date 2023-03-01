(function () {
    let slidePosition = 0;
    const slides = document.getElementsByClassName('bestsellers__carousel');
    const totalSlides = slides.length;

    document.
        getElementById('bestseller__carousel-next')
        .addEventListener("click", function () {
            moveToNextSlide();
        })
    document.
        getElementById('bestseller__carousel-prev')
        .addEventListener("click", function () {
            moveToPrevSlide();
        })

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('bestseller__visible-slide');
            slide.classList.add('bestseller__hidden-slide');
        }

        slides[slidePosition].classList.add('bestseller__visible-slide');
    }

    function moveToNextSlide() {
        updateSlidePosition();

        if (slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
    }

    function moveToPrevSlide() {
        updateSlidePosition();

        if (slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        }
    }
})();


