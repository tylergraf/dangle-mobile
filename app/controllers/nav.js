$.navTasks.addEventListener('click', openIndex);
$.navTokens.addEventListener('click', openOne);
$.navRewards.addEventListener('click', openTwo);

function openIndex(e) {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;
  nav.open(controllers.index, true); //navigates into "index" view
}

function openOne(e) {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;
  nav.open(controllers.one, true); //navigates into "one" view
}

function openTwo(e) {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;
  nav.open(controllers.two, true); //navigates into "two" view
}