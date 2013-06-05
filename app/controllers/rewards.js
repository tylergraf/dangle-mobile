$.setName.addEventListener('click',function() {
  $.name.setText(Alloy.Globals.currentUser);
});

$.logout.addEventListener('click',function() {
  var auth = require('auth');
  auth.logout();
});