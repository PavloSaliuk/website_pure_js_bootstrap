(function() {
  const overlay = document.getElementById('overlay');
  const modal = document.querySelector('.modal');
  const modal_button = document.querySelector('.modal__button');
  const logo = document.querySelector('.header__logo');
  const burgerMenu = document.querySelector('.header__navigation_burger');
  

  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > 0) {
              modal.classList.add('active');
              overlay.classList.add('active');
              logo.style.zIndex = '0';
              burgerMenu.style.zIndex = '0';
          }
    },{ once: true})

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal);
    })
  },  { once: true})

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
    logo.style.zIndex = '5';
    burgerMenu.style.zIndex = '5';
  }

  modal_button.addEventListener('click', () => {
      const modal = modal_button.closest('.modal')
      closeModal(modal);
    })


    function preventDefault(e) {
      e.preventDefault();
    }

})();