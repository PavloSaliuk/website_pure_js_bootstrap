(function () {
  let slidePosition = 0;
  const slides = document.getElementsByClassName("bestsellers__carousel");
  const totalSlides = slides.length;

  document
    .getElementById("bestseller__carousel-next")
    .addEventListener("click", function () {
      moveToNextSlide();
    });
  document
    .getElementById("bestseller__carousel-prev")
    .addEventListener("click", function () {
      moveToPrevSlide();
    });

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove("bestseller__visible-slide");
      slide.classList.add("bestseller__hidden-slide");
    }

    slides[slidePosition].classList.add("bestseller__visible-slide");

    const switchButtons = document.querySelectorAll(".bestseller__carousel-switch");
    for (let i = 0; i < switchButtons.length; i++) {
      if (i === slidePosition) {
        switchButtons[i].classList.add("active");
      } else {
        switchButtons[i].classList.remove("active");
      }
    }
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }
  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }
  document
    .getElementById("bestseller__carousel-left")
    .addEventListener("click", function () {
      moveToFirstSlide();
    });
  document
    .getElementById("bestseller__carousel-center")
    .addEventListener("click", function () {
      moveToSecondSlide();
    });
  document
    .getElementById("bestseller__carousel-right")
    .addEventListener("click", function () {
      moveToThirdSlide();
    });

  function moveToFirstSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition = 0;
    }
    updateSlidePosition();
  }
  function moveToSecondSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 1;
    } else {
      slidePosition = 1;
    }
    updateSlidePosition();
  }
  function moveToThirdSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition = 2;
    }
    updateSlidePosition();
  }

})();
