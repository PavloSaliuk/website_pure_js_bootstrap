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
  const navItems = document.querySelectorAll('.brewery__nav_item');

  let currentSlide = 0;

  function renderSlides(slides) {
    const slidesContainer = document.querySelector('.brewery__slider_wrapper');
    slidesContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlides(slides);
    setActiveNavItem();
  }

  function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlides(slides);
    setActiveNavItem();
  }

  function setActiveNavItem() {
    navItems.forEach(item => {
      item.classList.remove('active');
    });
    navItems[currentSlide].classList.add('active');
  }

  function handleNavItemClick(e) {
    const navItemIndex = Array.from(navItems).indexOf(e.currentTarget);
    if (navItemIndex !== -1 && navItemIndex !== currentSlide) {
      currentSlide = navItemIndex;
      renderSlides(slides);
      setActiveNavItem();
    }
  }

  renderSlides(slides);
  setActiveNavItem();

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  navItems.forEach(item => item.addEventListener('click', handleNavItemClick));

  window.addEventListener('resize', () => {
    renderSlides(slides);
  });
})();
