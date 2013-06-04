// kids collection
var kids = Alloy.Collections.kids;
kids.fetch();

// click on add kid button
$.addKid.addEventListener('click',function() {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;

  // navigate into addKid view
  nav.open(controllers.addKid);
});

// click on add task button
$.addTask.addEventListener('click',function() {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;

  // navigate into addTask view
  nav.open(controllers.addTask);
});

// click on kid to delete them
$.kidList.addEventListener('click',function(e) {
  var kidMiddleware = require('kidMiddleware'),
      id = e.source.kidId;

  kidMiddleware.removeKid(id, function(){});
});

$.navBack.addEventListener('click',function() {
  var auth = require('auth');
  auth.logout();
});