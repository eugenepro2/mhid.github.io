import Swiper from 'swiper';


let introSLider = new Swiper('.intro-slider', {
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
