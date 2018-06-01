import device from 'current-device';
import modal from 'jquery-modal';
import scrollbar from 'jquery.scrollbar';

$('.scrollbar').scrollbar();

$('a[rel]').click(function(event) {
  $(this).modal({
    fadeDuration: 250,
    closeClass: 'icon icon-close',
    closeText: ' ',
  });
  return false;
});

$('.card__block').on('touchstart', function(e) {
  $(this).toggleClass('hover');
});
 
$('.card__block').on('touchend', function(e) {
  $(this).toggleClass('hover');
});


$('input').focus(function() {
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function() {
  var inputValue = $(this).val();
  if ( inputValue === '' ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
});  

$('.brand__card').hover(
  function() {
    $(this).find('img').hide();
  },
  function() {
    $(this).find('img').delay(100).fadeIn();
  }
);

$('.up').on('click', function() {
  $('body, html').animate({
    scrollTop: 0
  }, 1500);
});


//filter

$('[data-filter]').on('click', function() {
  event.preventDefault();
  if ($(window).width() <= '767') {
    let id = $(this).attr('href');
    $(id).fadeToggle();
    $('.filter-bg').fadeIn();
    $('#aside').addClass('active');
  } else {
    let id = $(this).attr('href');
    $(id).fadeToggle();
    $('.filter-bg').fadeIn();
  }
});
$('.filter-bg, .cancel').on('click', function() {
  event.preventDefault();
  $('.filter__modal').fadeOut();
  $('.filter-bg').fadeOut();
  $('#aside').removeClass('active');
});

//aside tablet
if ($(window).width() <= '1200') {
  $('[data-aside]').on('click', function() {
    event.preventDefault();
    let id = $(this).attr('href');
    $(id).fadeToggle();
    $('.filter-bg').fadeToggle();
  });
  $('.filter-bg, .cancel, .close').on('click', function() {
    event.preventDefault();
    $('#aside').fadeOut();
    $('.filter-bg').fadeOut();
    $('#aside').removeClass('active');
    $('.filter__modal').fadeOut();
  });
}

// //product page
// $('[data-product]').on('click', function() {
//   event.preventDefault();
//   $('.catalog__page').fadeOut();
//   $('.product__page').fadeIn();
//   hitsSLider.update();
//   productSlider.update();
// });
// $('.breadcrumb .close').on('click', function() {
//   $('.catalog__page').fadeIn();
//   $('.product__page').fadeOut();
// });
