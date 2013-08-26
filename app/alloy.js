
Alloy.Globals.adminUser = {username: 'tylergraf', _id: '44994924824934i34ils'};
Ti.include('tijax.js');

// set up moment
var moment = require('moment');
moment.calendar = {
    lastDay : '[Yesterday]',
    sameDay : '[Today]',
    nextDay : '[Tomorrow]',
    lastWeek : 'MMM D YYYY',
    nextWeek : 'MMM D YYYY',
    sameElse : 'MMM D YYYY'
};
Alloy.Globals.timestamp = 'YYYYMMDDHHmmss';

// If no admin user, show admin login page
if(!Alloy.Globals.adminUser) {
  var adminLogin = Alloy.createController('adminLogin');
  adminLogin.getView().open();
} else {
  // otherwise initialize user login
  init();
}

Alloy.Globals.userLoggedIn = function(user){
  adminLogin.getView().close();
  Alloy.Globals.adminUser = user;
  init();
};

function init() {
  Alloy.Globals.currentUser = null;
  Alloy.Globals.currentController = null;

  Alloy.Globals.controllers = {
    index: Alloy.createController('index'),
    nav: Alloy.createController('nav'),
    coins: Alloy.createController('coins'),
    rewards: Alloy.createController('rewards'),
    login: Alloy.createController('login'),
    adminDashboard: Alloy.createController('adminDashboard'),
    addKid: Alloy.createController('addKid'),
    addTask: Alloy.createController('addTask'),
    grabber: Alloy.createController('grabber'),
    profile: Alloy.createController('profile')
  };

  var auth = require('auth');

  auth.authenticate();
}

Alloy.Collections.tasks.fetch();
Alloy.Collections.transactions.fetch();