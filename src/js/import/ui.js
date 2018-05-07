import device from 'current-device';

//Viewport
if(device.mobile()) {
  $('#viewport').attr('content', 'width=320, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.tablet()) {
  $('#viewport').attr('content', 'width=768, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.desktop()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
}
