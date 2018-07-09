//filter
let filterLink;
$('[data-filter]').on('click', function() {
  event.preventDefault();
  let id = $(this).attr('href');
  if ($(id).is(':visible')) {
    return false;
  }
  $('.filter').addClass('active');
  $('.filter__modal').fadeOut();
  
  filterLink = $(this);
  if ($(window).width() <= '767') {
    $(id).fadeIn();
    $('.filter-bg').fadeIn(500);
    $('body').delay(500).addClass('active');
  } else {
    $(id).fadeIn();
    $('.filter-bg').fadeIn();
  }
});
$('.filter-bg, .cancel').on('click', function() {
  event.preventDefault();
  $('.filter__modal').fadeOut();
});

//aside tablet
if ($(window).width() <= '1280') {
  $('[data-aside]').on('click', function() {
    event.preventDefault();
    let id = $(this).attr('href');
    $(id).addClass('active');
    $('.filter-bg').fadeToggle();
    let topFilter = $('.aside.filter').offset().top;
    $('.filter__modal__content').height($(window).height() - (topFilter + 230));
  });
  $('.filter-bg').on('click', function() {
    event.preventDefault();
    $('.filter-bg').fadeOut();
    $('#aside').removeClass('active');
    $('body').removeClass('active');
  });

  $('.cancel').on('click', function() {
    $('.filter__modal').fadeOut();
  });
  
  $('.close-filter').on('click',function(e) { 
    e.preventDefault();
    $(this).closest('.filter').removeClass('active');
    $('.filter-bg').fadeOut();
    $('body').removeClass();
    $('.filter').removeClass('active');
  });
  $('.close-filter-modal').on('click',function(e) { 
    e.preventDefault();
    $(this).closest('.filter__modal').fadeOut();
    $('body').removeClass();
  });
}

if ($(window).width() >= '1280') {
  $('.filter-bg, .cancel').on('click', function() {
    $('.filter-bg').fadeOut();
    $('#aside').removeClass('active');
    $('body').removeClass('active');
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
  if($(window).width() <= '768') {
    $('body').removeClass('active');
  } else{
    $('.filter-bg').fadeOut();
  }
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


$('.catalog__sort').on('click', function(e) {
  e.preventDefault();
  $(this).find('ul').slideToggle();
  $(this).toggleClass('is-clicked');
});

$('.catalog__sort li').on('click', function() {
  $('.catalog__sort li').removeClass('active');
  $(this).addClass('active');
  let li = $(this).html();
  $(this).closest('.catalog__sort').find('a').html(li);
});
