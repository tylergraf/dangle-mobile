$.navTasks.addEventListener('click', openIndex);
$.navTokens.addEventListener('click', openCoins);
$.navRewards.addEventListener('click', openRewards);
$.mainNavToggleDown.addEventListener('click', openMainNav);
$.closeMainNav.addEventListener('click', closeMainNav);

function openIndex(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  nav.open(controllers.index, true); //navigates into "index" view
  nav.toggleDown(navController); //toggle's nav down
}

function openCoins(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  nav.open(controllers.coins, true); //navigates into "one" view
  nav.toggleDown(navController); //toggle's nav down
}

function openRewards(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  nav.open(controllers.rewards, true); //navigates into "two" view
  nav.toggleDown(navController); //toggle's nav down
}

function openMainNav(e) {
  var nav = require('navigation'),
      navController = $.nav;

  nav.toggleUp(navController); //toggle's nav up
}

function closeMainNav(e) {
  var nav = require('navigation'),
      navController = $.nav;

  nav.toggleDown(navController); //toggle's nav down
}