import device from 'current-device';

let windowWidth = $(window).width();

$(window).on('resize', function() {
  searchInput();
  offsetLeft();
  windowWidth = $(window).width();
});

//Top Banner
$('.top__banner .close').on('click', function() {
  $('.top__banner').fadeOut();
  $('.header').addClass('banner-closed');
  $('.mobile-menu').addClass('banner-closed');
  $('.out').addClass('top__baner');
  $('.filter').css('top', '60px');
});


//Music Switcher
let music  = $('.music');

music.on('click', function() {
  let icon = music.find('i');
  let text = music.find('p');
  if (icon.hasClass('icon-music-on')) {
    icon.removeClass('icon-music-on');
    icon.addClass('icon-music-off');
    text.text('Музыка выкл.');
  } else{
    icon.removeClass('icon-music-off');
    icon.addClass('icon-music-on');
    text.text('Музыка вкл.');
  }
});


//Search

searchInput();

function searchInput() {
  let seacrh = $('.search');
  let offsetLeft;

  if(windowWidth < 768) {
    getOfssetLeft($('.header__info'), 0);
  } else if(windowWidth > 767 && windowWidth < 1024) {
    getOfssetLeft($('.logo'), 20);
  } else if(windowWidth > 1024) {
    getOfssetLeft($('.header__info'), 10);
  }

  function getOfssetLeft(param, px) {
    offsetLeft = ($(window).width() - (param.offset().left + param.outerWidth())) - px;
  }

  seacrh.width(offsetLeft);

  

  $('.open-seacrh').on('click', function(event) {
    event.preventDefault();
    seacrh.css('transform', 'translateX(0)');
  });

  $('.search .close').on('click', function() {
    event.preventDefault();
    seacrh.css('transform', 'translateX(100%)');
  });

}



//Menu
function offsetLeft() {
  let offsetLeftLogo = $('.sub-open').offset().left - 25;
  $('.sub').css('padding-left', offsetLeftLogo);
  
  let triangle = $('nav ul li:first-child').offset().left;
  let widthLi = $('nav ul li:first-child').width() / 2;
  $('.sub__triangle').offset({left: triangle + widthLi - 9});
}
offsetLeft();


//Fixed Header
$(window).scroll(function() {
  if ($(window).scrollTop() >= 300) {
    $('.header').css('transform', 'translateY(0%)');
    $('.header').addClass('fixed');
    $('.top__banner').addClass('fixed');
    $('.filter').css('top', '90px');
    if($('.header').hasClass('banner-closed')) {
      $('.filter').css('top', '60px');
    }
  } else {
    $('.header').removeClass('fixed');
    $('.top__banner').removeClass('fixed');
    $('.filter').css('top', '0px');
  }
});


//Mobile Menu
let mobileMenu = $('.mobile-menu');

$('.open-menu').on('click', function() {
  $('.mobile-menu').toggleClass('is-open');
  $('body').toggleClass('menu-is-open');
  $('.open-menu').toggleClass('is-open');
});

mobileMenu.find('li').each(function() {
  if ($(this).find('.mobile-sub').length !== 0) {
    $(this).children(':first').addClass('is-sub');
  }
});

if (mobileMenu.find('li').has('.mobile-sub')) {
  mobileMenu.find('a').on('click', function() {
    $(this).siblings('.mobile-sub').slideToggle();
    $(this).toggleClass('is-open');
  });
  
}

