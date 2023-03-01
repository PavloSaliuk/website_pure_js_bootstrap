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

    function moveToNextSlide() {
        console.log('hello next');
    }
    function moveToPrevSlide() {
        console.log('hello prev');
    }

})();


