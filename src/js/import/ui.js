import device from 'current-device';
import modal from 'jquery-modal';
import scrollbar from 'jquery.scrollbar';
import Select from 'tether-select';


$('.scrollbar').scrollbar();

$('a[rel]').click(function() {
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


$(window).on('scroll', function() {
  let scroll = $(window).scrollTop();
  let up = $('.up');
  
  if ($(window).width() > 1024) {
    if (scroll >= 1000) {
      up.addClass('active');
    } else{
      up.removeClass('active');
    }    
  } else if($(window).width() <= 1023) {
    if (scroll >= 500) {
      up.addClass('active');
    } else{
      up.removeClass('active');
    }   
  }

});
