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
