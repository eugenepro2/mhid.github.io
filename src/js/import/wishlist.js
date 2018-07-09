
$('.wishlist__btn').attr('data-count', 0);


$('.wishlist__btn').on('click', function(event) {
  event.preventDefault();
  let click = parseInt($(this).attr('data-count'));
  let wishlist = $('.wishlist__btn__header');
  let wishlistCount = parseInt(wishlist.find('span').text());


  let tooltip = $(this).find('.wishlist__btn__tooltip');
  if (!$(this).hasClass('active')) {
    click += 1;
    $(this).attr('data-count', click);
    if (!isEven(click)) {
      tooltip.fadeToggle();
    }
    wishlist.addClass('animate-out');
    setTimeout(function() {
      wishlist.find('span').text(wishlistCount + 1);
      wishlist.removeClass('animate-out').addClass('animate-in').removeClass('animate-in');
    }, 500);  
  
  } else{
    wishlist.addClass('animate-out');
    setTimeout(function() {
      wishlist.find('span').text(wishlistCount - 1);
      wishlist.removeClass('animate-out').addClass('animate-in').removeClass('animate-in');
    }, 500);  
  
  }
  

  $(this).toggleClass('active');  
  
  if (tooltip.is(':visible')) {
    setTimeout(function() {
      tooltip.fadeOut();
    }, 750);
  }

});

function isEven(someNumber) {
  return (someNumber % 2 === 0) ? true : false;
};
