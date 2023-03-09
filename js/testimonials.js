(function (){
    
     const slides = [
'<div><img src="img/tom-peterson.png" alt="tom peterson"></div>',
'<div><img src="img/erica-maddison.png" alt="erica maddison"></div>',
'<div><img src="img/david-bodwan.png" alt="erica maddison"></div>',
];

function renderSlides(slides) {
    const slidesContainer = document.querySelector('.products-carousel__slides');
    slidesContainer.innerHTML = '';
    for (const slide of slides) {
        slidesContainer.innerHTML += slide;
    }
}
})();