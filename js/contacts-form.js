(function () {
    function validateForm(e) {
      e.preventDefault();
  
      const fullName = document.querySelector(".form__name");
      const phone = document.querySelector(".form__phone");
      const email = document.querySelector(".form__email");
      const message = document.querySelector(".form__message");
  
      fullName.classList.remove("invalid");
      phone.classList.remove("invalid");
      email.classList.remove("invalid");
  
      if (!fullName.value || !phone.value || !email.value) {
        alert("Please fill in all required fields");
  
        if (!fullName.value) {
          fullName.classList.add("invalid");
        }
        if (!phone.value) {
          phone.classList.add("invalid");
        }
        if (!email.value) {
          email.classList.add("invalid");
        }
      }
  
      if (!phone.value.match(/^\+?\d{12}$/)) {
        alert("Please enter a valid phone number");
        phone.classList.add("invalid");
      }
  
      if (!email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        alert("Please enter a valid email address");
        email.classList.add("invalid");
      }
  
      if (message.value.length > 500) {
        alert("Your message is too long");
      }
  
      if (
        fullName.value &&
        phone.value &&
        email.value &&
        phone.value.match(/^\+?\d{12}$/) &&
        email.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) &&
        message.value.length <= 500
      ) {
        e.preventDefault();
        const modal = document.querySelector(".modal__contacts");
        modal.style.display = "block";
      }
    }
  
    const form = document.querySelector(".contacts__form");
    form.addEventListener("submit", validateForm);
  
    function closeModal() {
      const modal = document.querySelector(".modal__contacts");
      const closeButton = modal.querySelector(".modal__close_btn");
  
      closeButton.addEventListener("click", function () {
        clearForm();
        modal.style.display = "none";
      });
  
      const submitBtn = modal.querySelector(".modal__btn");
  
      submitBtn.addEventListener("click", function () {
        clearForm();
        modal.style.display = "none";
      });
    }
  
    function clearForm() {
      const fullName = document.querySelector(".form__name");
      const phone = document.querySelector(".form__phone");
      const email = document.querySelector(".form__email");
      const message = document.querySelector(".form__message");
  
      fullName.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
    }
  
    closeModal();
  })();