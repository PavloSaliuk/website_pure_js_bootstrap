(function () {

    const slides = [
        '<div class="tom__peterson"><div class="testimonials__visitors">Tom Peterson</div><div class="description__of__carousel"><div class="description__img"><img src="images/tom-peterson.png" alt="tom peterson" class="testimonials__photo__carousel"></div><div class="testimonials__visitors_feedback">"I am a true beer fan and order beverages only from this brewery. I*ve tried all the beer types here, and I have my favorite styles. I love the amazing taste  of Indian Pale Ale most of all. The prices are also very affordable."</div></div><div class="date__of__carousel"><div class="testimonials__visitors_date">December 15.2021</div></div></div>',
        '<div class="erica__madisson"><div class="testimonials__visitors">Erica Madisson</div>        <div class="description__of__carousel"><div class="description__img"><><img src="images/erica-madisson.png" alt="erica madisson" class="testimonials__photo__carousel"></div><div class="testimonials__visitors_feedback">"I*ve always wondered how craft beer is made. I booked a group tour with friends, and I was complrtrly delighted with how everything is organithed at Craft Brewery. How I buy only craft beer as it is much better and healthier than beers sold in the usual stores."</div></div></div><div class="date__of__carousel"><div class="testimonials__visitors_date">March 25.2022</div></div></div>',
        '<div class="david__bowman"><div class="testimonials__visitors">David Bowman</div><div class="description__of__carousel"><div class="description__img"><><img src="images/david-bowman.png" alt="david bowman" class="testimonials__photo__carousel"></div><div class="testimonials__visitors_feedback">"The Imperial Stout beer is amazing. I really love strong beer,and Imperial Stout is literally the best strong beer I*ve ever tasted. From the very first order.I*ve become a fan of Craft Brewery. Great taste, great prices, and a great venue."</div></></div><div class="date__of__carousel"><div class="testimonials__visitors_date">August 01.2022</div></div></div>',
'let currentSlide = 0',];

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