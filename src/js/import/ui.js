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


//filter
let filterLink;
$('[data-filter]').on('click', function() {
  event.preventDefault();
  $('.filter__modal').fadeOut();
  filterLink = $(this);
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
    $('body').css('overflow', 'hidden');
    let topFilter = $('.aside.filter').offset().top;
    $('.filter__modal__content').height(screen.height - (topFilter + 230));
  });
  $('.filter-bg, .cancel, .close').on('click', function() {
    event.preventDefault();
    $('#aside').fadeOut();
    $('.filter-bg').fadeOut();
    $('#aside').removeClass('active');
    $('.filter__modal').fadeOut();
  });
}

//filter checked
$('.input__btn.all').on('click', function() {
  let id = filterLink.attr('href');
  $(id).find('.filter__modal__block input').prop('checked', true);
});

$('.btn.btn-filter').on('click', function() {
  event.preventDefault();
  let id = filterLink.attr('href');
  $(filterLink).siblings('.scroll-wrapper.scrollbar').fadeIn();
  $(filterLink).siblings('.scroll-wrapper.scrollbar').find('ul').empty();
  $(id).find('input:checked').each(function() {
    let checkedText = $(this).siblings('.label-for').text();
    $(filterLink).siblings('.scroll-wrapper.scrollbar').find('ul').append("<li><a href='#'>" + checkedText + '</a></li>');
  });
  if($(id).find('input').is(':checked')) {
    filterLink.siblings('h4').text('Выбрано:');
  } else{
    filterLink.siblings('h4').text('Ничего не выбрано');
    $(filterLink).siblings('.scroll-wrapper.scrollbar').fadeOut();
  }
  $('.filter__modal').fadeOut();
  if($(window).width() >= '768') {
    $('.filter-bg').fadeOut();
    $('body').css('overflow', 'visible');
  }
  $('.filter').removeClass('active');
});

$('.filter__modal__country').on('click', function() {
  if ($(this).find('input').prop('checked')) {
    $(this).find('input').prop('checked', false);
    $(this).siblings('.filter__modal__brands').find('input').prop('checked', false);
  } else{
    $(this).find('input').prop('checked', true);
    $(this).siblings('.filter__modal__brands').find('input').prop('checked', true);
  }
});

//сброс
$('button.btn.btn-filter').on('click', function() {
  $('.filter__modal__block input').prop('checked', false);
  $('.scroll-wrapper.scrollbar ul').empty();
  $('.scroll-wrapper.scrollbar').fadeOut();
  $('.filter__block h4').text('Ничего не выбрано');
  $('.filter-bg').fadeOut();
  $('.filter__modal').fadeOut();
});


// let selectInstance = new Select({
//   el: document.querySelector('select.select-target'),
//   className: 'select-theme-default'
// });

