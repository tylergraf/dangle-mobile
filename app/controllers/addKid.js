$.back.addEventListener('click',function() {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;

  // navigate back to adminDashboard view
  nav.close(controllers.adminDashboard);
});


$.saveKid.addEventListener('click',function() {
  // deps
  var kidMiddleware = require('kidMiddleware');
  
  // form data
  var data = {
    name: $.name.value,
    avatar: $.avatar.value,
    password: $.password.value
  };

  kidMiddleware.addKid(data, function() {  
    // close addKid view
    var nav = require('navigation');
    var controllers = Alloy.Globals.controllers;

    // navigate back to adminDashboard view
    nav.close(controllers.adminDashboard);
  });
});

$.addKid.addEventListener('close',function() {
  $.avatar.value = '';
  $.password.value = '';
  $.name.value = '';
});
