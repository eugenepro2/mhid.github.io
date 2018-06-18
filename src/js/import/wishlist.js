
$('.wishlist__btn').attr('data-count', 0);
$('.wishlist__btn').on('click', function(event) {
  event.preventDefault();
  let click = parseInt($(this).attr('data-count'));


  let tooltip = $(this).find('.wishlist__btn__tooltip');
  if (!$(this).hasClass('active')) {
    click += 1;
    $(this).attr('data-count', click);
    if (!isEven(click)) {
      tooltip.fadeToggle();
      console.log(click, 'even');
    }
  }
  

  $(this).toggleClass('active');  
  
  // let tooltip = $(this).find('.wishlist__btn__tooltip');
  // $(this).find('.icon-heart').fadeToggle();
  // $(this).find('.icon-heart-red').delay().fadeToggle();
  // if(!tooltip.hasClass('active')) {
  //   tooltip.fadeToggle();
  // }
  // tooltip.addClass('active');
  if (tooltip.is(':visible')) {
    setTimeout(function() {
      tooltip.fadeOut();
    }, 750);
  }

});

function isEven(someNumber) {
  return (someNumber % 2 === 0) ? true : false;
};
