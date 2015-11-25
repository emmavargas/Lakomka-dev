var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function(){
  $('.carousel__thumbnails').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: $('.carousel__dots'),
    accessibility: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
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
});
