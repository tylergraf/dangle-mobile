// ANIMATIONS
var animateUp = Ti.UI.createAnimation({
  bottom: 0,
  curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
  duration: 200
});
var animateDown  = Ti.UI.createAnimation({
  bottom: -120,
  curve: Ti.UI.ANIMATION_CURVE_EASE_OUT,
  duration: 200
});


var grab = $.grab;
var grabber = $.grabber;

var isToggled = false;
grab.addEventListener('click',function(e){
  if( !isToggled ){
    grabber.animate(animateUp);
    isToggled = true;
  } else {
    grabber.animate(animateDown);
    isToggled = false;
  }
});


$.on('grabberZIndex',function(){
  console.log('got here');
  $.grabber.animate({zIndex:100});
});


function profileRowClickHandler(){
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;
  
  // animate down grabber
  grabber.animate(animateDown);
  isToggled = false;

  // navigate to profile view as modal
  nav.openModal(controllers.profile);

}

$.profileRow.addEventListener('click', profileRowClickHandler);
$.profileRow.addEventListener('swipe', function(){
  Alloy.Globals.index.fireEvent('adminLoad');
});
$.notesRow.addEventListener('click', function(){
  Alloy.Globals.index.fireEvent('notesLoad');
});

// $.grabber.addEventListener('close', function() {
//   console.log('closed');
//   $.profileRow.removeEventListener('click', profileRowClickHandler);

//   $.destroy();
// });



// // TOUCH EVENTS
// var touchStartX = 0;
// var touchStarted = false;
// grab.addEventListener('touchstart',function(e){
//   touchStartX = parseInt(e.x,10);
// });
// grab.addEventListener('touchend',function(e){
//   touchStarted = false;
//   if( topWindow.left < 0 ){
//     if( topWindow.left <= -140 ){
//       topWindow.animate(animateNegativeLeft);
//       isToggled = true;
//     } else {
//       topWindow.animate(animateDown);
//       isToggled = false;
//     }
//   } else {
//     if( topWindow.left >= 140 ){
//       topWindow.animate(animateUp);
//       isToggled = true;
//     } else {
//       topWindow.animate(animateRight);
//       isToggled = false;
//     }
//   }
// });
// grab.addEventListener('touchmove',function(e){
//   var x     = parseInt(e.globalPoint.x, 10);
//   var newLeft = x - touchStartX;
//   if( touchStarted ){
//     if( newLeft <= 150 && newLeft >= -150)
//     topWindow.left  = newLeft;
//   }
//   // Minimum movement is 10
//   if( newLeft > 10 || newLeft < -10 ){
//     touchStarted = true;
//   }
// });