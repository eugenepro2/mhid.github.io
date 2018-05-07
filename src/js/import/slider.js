import Swiper from 'swiper';


let introSLider = new Swiper('.intro-slider', {
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});


let aboutSLider = new Swiper('.about-slider', {
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});

let hitsSLider = new Swiper('.hits-slider', {
  speed: 400,
  slidesPerView: 4,
  breakpoints: {
    // when window width is <= 640px
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
    
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(window).on('load', function() {
  hitsSLider.update();
});


