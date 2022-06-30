$(document).ready(function(){
    
    $(document).ready(function () {
        $('.menu li.has-child').on('click', function (event) {
            var elem = $(this).children('ul');
                    event.stopPropagation()
                    // $(".has-child").toggle('nameclas');
                    $(this).toggleClass('change-minus-header');
            if (elem.is(':hidden')) {
                elem.slideDown(500);
            } else {
                elem.slideUp(500);
            }
        });
    });


    

    $(document).ready(function () {
        $('.lang-swith li.has-child').on('click', function (event) {
            var elem = $(this).children('ul');
                    event.stopPropagation()
            if (elem.is(':hidden')) {
                elem.slideDown(500);
            } else {
                elem.slideUp(500);
            }
        });
    });


    // Слайдер на главной странице 

    $('.home-page-servives-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


    //   Конец слдайдера н главной странцие 

    $('.top-banner-slider-home-page').slick();




    $('.events-slider-past').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


    // $('.future-events-slider').slick({
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   // autoplay: true,
    //   // autoplaySpeed: 5000,
    //   responsive: [
    //     // {
    //     //   breakpoint: 1025,
    //     //   settings: {
    //     //     // arrows: false,
    //     //     // centerMode: true,
    //     //     centerPadding: '40px',
    //     //     slidesToShow: 2
    //     //   }
    //     // },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: '40px',
    //         slidesToShow: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         // arrows: false,
    //         // centerMode: true,
    //         // centerPadding: '40px',
    //         slidesToShow: 1
    //       }
    //     }
    //   ]
    // });



    $('.future-events-slider').slick({
      // dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            // dots: true,
            rows: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    $('.reviews').slick();


// Дропдаун меню категорий
$(document).ready(function () {
  $('.dropdownCategory li.has-child').on('click', function (event) {
      var elem = $(this).children('ul');
      event.stopPropagation()
      $(this).toggleClass('rotate-icon');
      if (elem.is(':hidden')) {
          elem.slideDown(500);
      } else {
          elem.slideUp(500);
      }
  });
});


// Слайдер на странице Росгео
$('.rocgeo-slider').slick({
  // dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// Слайдер на странице росгео Холдинг
$('.holding-slider').slick({
  // dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Сладер Галерея на проекте 

$('.galery-slider-project').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


    
})


burgerBtn.onclick = () => {
  burgerBtn.classList.toggle('change-burger')
  MainMenu.classList.toggle('mobile-active')
}
