$('.slick-carousel').slick({
    arrows: true,
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        arrows: true,
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]


  });