//Top Banner
$('.top__banner .close').on('click', function() {
  $('.top__banner').fadeOut();
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
let whatever = $('.header__info');

let offsetLeft = ($(window).width() - (whatever.offset().left + whatever.outerWidth()));

let seacrh = $('.search');

$('.open-seacrh').on('click', function() {
  seacrh.width(offsetLeft - 10);
  seacrh.fadeIn();
});

$('.search .close').on('click', function() {
  seacrh.fadeOut();
});


//Menu
let triangle = $('nav ul li:first-child').offset().left;

$('.sub__triangle').offset({left: triangle + 20});

//Fixed Header
$(window).scroll(function() {
  if ($(window).scrollTop() >= 300) {
    $('.header').addClass('fixed');
    $('.top__banner').addClass('fixed');
  }
  else {
    $('.header').removeClass('fixed');
    $('.top__banner').removeClass('fixed');
  }
});
