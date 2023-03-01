(function(){

    const headerContent = {
        adress: '6118 Jefferson St, West New York',
        phone: '+1 (234) 567 89 00',
        logo: 'images/header_logo.svg',
        banner_title: 'BREWERY IN NEW YORK',
        banner_slogan: 'Sharp Taste of History',
        spikelet: 'images/spikelet-yellow.svg',
        banner_text: 'Welcome to one of the oldest breweries of New York. We offer a variety of delicious craft beers, as well as exciting tours, tastings, and master-classes for those who want to learn more about the beer world.',
        normalButton: 'Beer Types',
        hoverButton: 'About Us'
    }

    const menu = [
        {
            href: '#about_us',
            name: 'About Us'
        },
        {
            href: '#bestsellers',
            name: 'Beer Styles'
        },
        {
            href: '#testimonials',
            name: 'Testimonials'
        },
        {
            href: '#contacts',
            name: 'Contact Us'
        },
    ]

    const socialIcons = [
        {
            href: 'https://facebook.com/',
            alt: 'Facebook',
            img: 'images/header_facebook-icon.svg'
        },
        {
            href: 'https://instagram.com/',
            alt: 'Instagram',
            img: 'images/header_instagram-icon.svg'
        },
        {
            href: 'https://youtube.com/',
            alt: 'YouTube',
            img: 'images/header_youtube-icon.svg'
        },
    ]

    function renderHeader(content) {
        let header = document.querySelector('.header');
        header.innerHTML = '';
        header.innerHTML += `
        <div class="header__contacts_wrapper">
        <div class="header__contacts container">
          <p class="header__address">${content.adress}</p>
          <a class="header__phone" href="tel:+12345678900">${content.phone}</a>
        </div>
      </div>
      <div class="header__nav ">
        <div class="header__nav_container container">
          <a href="#" class="header__logo-container">
            <img class="header__logo" src="${content.logo}" alt="Beer Logo">
          </a>
          <div class="header__navigation_burger">
            <span></span>
          </div>
          <div class="header__navigation_wrapper">
            <div class="header__menu"></div>
            <div class="header__social_icons"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="header__section">
          <div class="header__section_main">
            <div class="header__banner">
              <h1 class="header__banner_title">${content.banner_title}</h1>
              <p class="header__banner_slogan">${content.banner_slogan}</p>
              <div class="header__spikelet">
                <img src="${content.spikelet}" alt="spikelet">
              </div>
              <p class="header__banner_text">${content.banner_text}</p>
              <br>
              <div class="header__banner_btns">
                <div class="header__btn">
                  <a class="header__btn_item" href="#bestsellers">${content.normalButton}</a>
                </div>
                <div class="header__btn header__btn_hover">
                  <a class="header__btn_item" href="#about_us">${content.hoverButton}</a>
                </div>
              </div>
            </div>
            <div class="header__banner_image">
              <img src="images/header_beer_bottle.png" alt="Beer bottle">
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="modal">
        <p>Контент містить інформацію про алкогольну продукцію.</p>
        <p>Ви повнолітні?</p>
        <button class="modal__button">Так. Мені 18+</button>
      </div>
      <div id="overlay"></div>
      <div class="header__bottom_element"></div> 
        `;

    }

    function renderMenuItems(menuItems) {
        const menuItemsContainer = document.querySelector('.header__menu');
        menuItemsContainer.innerHTML = '';
        for (const item of menuItems) {
            menuItemsContainer.innerHTML += `
            <a href="${item.href}">${item.name}</a>
            `;
        }
    }

    function renderSocialIcons(icons) {
        let socialItemsContainer = document.querySelector('.header__social_icons');
        socialItemsContainer.innerHTML = '';
        for (const icon of icons) {
            socialItemsContainer.innerHTML += `
                <a href="${icon.href}" target="_blank" class="header__social_icons_item">
                    <img src="${icon.img}" alt="${icon.alt}">
                </a>
            `;
        }
    }

    renderHeader(headerContent);
    renderMenuItems(menu);
    renderSocialIcons(socialIcons);
})()