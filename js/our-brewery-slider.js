(function () {

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
    handleSliderClick();
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

  function handleSliderClick() {
    const modal = document.querySelector('.brewery__slider_modal');
    const sliders = document.querySelectorAll('.brewery__slider');

    sliders.forEach((slider, i) => {
      slider.removeEventListener('click', openModal);
      slider.addEventListener('click', openModal);
    });

    const closeBtn = document.querySelector('.items__close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    function openModal() {
      modal.style.display = 'block';
    }
  }

  function modalItem() {
    const slidesModal = [
      '<div><img class="brewery__slider_item" src="images/brewery-workers.png" alt="Brewery workers"></div>',
      '<div><img class="brewery__slider_item" src="images/brewery-barrels.png" alt="Brewery barrels"></div>',
      '<div><img class="brewery__slider_item" src="images/brewery-plant.png" alt="Brewery plant"></div>',
      '<div><img class="brewery__slider_item" src="images/brewery-product.png" alt="Brewery product"></div>',
      '<div><img class="brewery__slider_item" src="images/brewery-work.png" alt="Brewery work"></div>',
      '<div><img class="brewery__slider_item" src="images/brewery-bottels.png" alt="Brewery bottels"></div>',
    ];

    let currentSlideModal = 0;

    function renderSlidesModal() {
      const slidesContainerModal = document.querySelector('.brewery__wrapper_modal');
      slidesContainerModal.innerHTML = slides[currentSlideModal];
    }

    function nextSlideModal() {
      currentSlideModal = currentSlideModal + 1 >= slidesModal.length ? 0 : currentSlideModal + 1;
      renderSlidesModal(slidesModal);
    }

    function prevSlideModal() {
      currentSlideModal = currentSlideModal - 1 < 0 ? slidesModal.length - 1 : currentSlideModal - 1;
      renderSlidesModal(slidesModal);
    }

    function zoomModal() {
      const zoomInButton = document.querySelector('.items__zoom_in');
      const zoomOutButton = document.querySelector('.items__zoom_out');
      const imageModal = document.querySelector('.brewery__wrapper_modal');
      const currentScaleImg = parseFloat(localStorage.getItem('currentScaleImg')) || 1;

      let scale = currentScaleImg;

      zoomInButton.addEventListener('click', () => {
        if (scale >= 2) return;
        scale += 0.1;
        if (scale > 2) {
          scale = 2;
        }
        imageModal.style.transform = `scale(${scale})`;
        localStorage.setItem('currentScaleImg', scale.toString());
      });

      zoomOutButton.addEventListener('click', () => {
        if (scale <= 0.2) return;
        scale -= 0.1;
        if (scale < 0.2) {
          scale = 0.2;
        }
        imageModal.style.transform = `scale(${scale})`;
        localStorage.setItem('currentScaleImg', scale.toString());
      });

      window.addEventListener('beforeunload', () => {
        localStorage.removeItem('currentScaleImg');
      });
    }

    zoomModal();

    renderSlidesModal(slidesModal);

    const nextBtnModal = document.querySelector('.brewery__btn_next');
    nextBtnModal.addEventListener('click', nextSlideModal);

    const prevBtnModal = document.querySelector('.brewery__btn_prev');
    prevBtnModal.addEventListener('click', prevSlideModal);

    window.addEventListener('resize', () => {
      renderSlidesModal(slidesModal);
    })
  }

  modalItem();

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
  navItems.forEach(item => item.addEventListener('click', handleNavItemClick));

  window.addEventListener('resize', () => {
    renderSlides(slides);
  });
})();
