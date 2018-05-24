import Swiper from 'swiper';


let introSLider = new Swiper('.intro-slider', {
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});


let aboutSLider = new Swiper('.about-slider', {
  speed: 400,
  pagination: {
    el: '.about-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.about-next',
    prevEl: '.about-prev',
  },
});

let hitsSLider = new Swiper('.hits-slider', {
  speed: 400,
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    // when window width is <= 640px
    1170: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    }
    
  },
  pagination: {
    el: '.hits-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.hits-next',
    prevEl: '.hits-prev',
  },
});

aboutSLider.on('slideChange', function() {
  let slide = $('.swiper-slide');
  slide.each(function() {
    let linkVideo = $(this).find('iframe').attr('src');
    console.log(linkVideo);
    let video = $('video').get(0);
    $(this).find('iframe').attr('src', '');
    $(this).find('iframe').attr('src', linkVideo);
    video.pause();
  });
});

$(window).on('load', function() {
  hitsSLider.update();
});


