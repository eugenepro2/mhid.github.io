$('.cart__table__remove').on('click', function(event) {
  event.preventDefault(); 
  $(this).closest('.cart__table__block').slideUp();
  if ($(this).hasClass('remove__wishlist')) {
    let wishlist = $('.wishlist__btn__header');
    let wishlistCount = parseInt(wishlist.find('span').text());
    wishlist.addClass('animate-out');
    setTimeout(function() {
      wishlist.find('span').text(wishlistCount - 1);
      wishlist.removeClass('animate-out').addClass('animate-in').removeClass('animate-in');
    }, 500);  
  }
}); 

$('.add').on('click', function(e) {
  let oldValue = $(this).siblings('input').val();
  let newValue;
  if (oldValue >= 5) {
    $(this).siblings('input').val(5);
  } else{
    newValue = +oldValue + 1;
    $(this).siblings('input').val(newValue);
  }
  
});

$('.minus').on('click', function() {
  let oldValue = $(this).siblings('input').val();
  let newValue;
  if (oldValue < 2) {
    $(this).siblings('input').val(1);
  } else{
    newValue = +oldValue - 1;
    $(this).siblings('input').val(newValue);
  }
}); 


$('.product__card .btn, .product__block .btn, .cart__table__basket').on('click', function(event) {
  event.preventDefault();
  btnInCart($(this));
});


//Кнопка в состоянии "В корзине"
function btnInCart(curr) {
  let cart = $('.cart__btn');
  let cartCount = parseInt(cart.find('span').text());

  if (!curr.hasClass('cart__table__basket')) {
    curr.removeClass('btn-primary btn-secondary').addClass('btn-cart');
    curr.text('В корзине');
  } else{
    curr.addClass('active');
  }



  cart.addClass('animate-out');
  setTimeout(function() {
    cart.find('span').text(cartCount + 1);
    cart.removeClass('animate-out').addClass('animate-in').removeClass('animate-in');
  }, 500);
  
}
