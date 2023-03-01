// (function () {
//     const slides = [
//         document.querySelector("bestseller__imperial-slide"),
//         document.querySelector("bestseller__indian-slide"),
//         document.querySelector("bestseller__american-slide"),
//     ];

//     let currentSlide = 0;

//     function renderSlides(slides) {
//         const slidesContainer = document.querySelector('bestsellers__carousel');
//         // previous line ('.?')
//         slidesContainer.innerHTML = slides[currentSlide];
//     }

//     function nextSlide() {
//         currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
//         renderSlides(slides);
//     }

//     function prevSlide() {
//         currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
//         renderSlides(slides);
//     }

//     renderSlides(slides);

//     const nextButton = document.querySelector('.bestseller__carousel-arrow-icon-next');
//     nextButton.addEventListener('click', nextSlide);

//     const nextButton = document.querySelector('.bestseller__carousel-arrow-icon-prew');
//     nextButton.addEventListener('click', nextSlide);

// })();


// const slidesContainer = document.getElementById(".bestsellers");
// const slide = document.querySelector(".bestsellers__carousel");
// const prevButton = document.getElementById(".bestseller__carousel-arrow-icon-prev");
// const nextButton = document.getElementById(".bestseller__carousel-arrow-icon-next");

// nextButton.addEventListener("click", () => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft += slideWidth;
// });
// prevButton.addEventListener("click", () => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft -= slideWidth;
// });