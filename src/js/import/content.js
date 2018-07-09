$('.content__mobile-menu').click(function(e) { 
  e.preventDefault();
  $('.aside-profile').addClass('active');
});

$('.close').click(function() {
  $('.aside-profile').removeClass('active');
});
