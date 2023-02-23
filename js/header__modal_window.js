const overlay = document.getElementById('overlay');
const modal = document.querySelector('.modal');
const modal_button = document.querySelector('.modal__button');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            modal.classList.add('active')
            overlay.classList.add('active')
        }
  },{ once: true})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
},  { once: true})


function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


modal_button.addEventListener('click', () => {
    const modal = modal_button.closest('.modal')
    closeModal(modal)
  })

