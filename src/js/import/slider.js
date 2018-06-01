import Swiper from 'swiper';
import owlCarousel from 'owl.carousel';
import ovl from 'owl.carousel2.thumbs';


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


$('.content__slider1').owlCarousel({
  margin:10,
  nav:true,
  items:1,
  thumbs: true,
  thumbsPrerendered: true
});
$('.content__slider2').owlCarousel({
  margin:10,
  nav:true,
});

let contentSlider = new Swiper('.swiper__content', {
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
  navigation: {
    nextEl: '.content-next',
    prevEl: '.content-prev',
  },
});


let product = new Swiper('.swiper__product', {
  slidesPerView: 4,
  spaceBetween: 15,
  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
  },
});


var sLiderProduct = new Swiper('.product-slider', {
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
    el: '.product-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
  },
});


var scrollTop;
//product page
if ($(window).width() >= '1200') {
  $('[data-product]').on('click', function() {
    scrollTop = $(window).scrollTop();
    $('.page__hidden').fadeOut();
    $('.product__page').fadeIn();
    product.update();
    sLiderProduct.update();
  });
  $('.breadcrumb .close').on('click', function() {
    $('.page__hidden').fadeIn();
    $('.product__page').fadeOut();
    $(window).scrollTop(scrollTop);
    console.log(scrollTop);
  });
}


