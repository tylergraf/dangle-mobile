// kids collection
var kids = Alloy.Collections.kids;
kids.fetch();
var transactions = Alloy.Collections.transactions;
transactions.fetch();

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
$.transactionList.addEventListener('click',function(e) {
  var t = require('transactionMiddleware'),
      id = e.source.transactionId;

  t.approveTransaction(id, function(){

  });
});

$.navBack.addEventListener('click',function() {
  var auth = require('auth');
  auth.logout();
});