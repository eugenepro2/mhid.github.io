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
