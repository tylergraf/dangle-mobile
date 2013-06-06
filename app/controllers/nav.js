$.navTasks.addEventListener('click', openIndex);
$.navTokens.addEventListener('click', openCoins);
$.navRewards.addEventListener('click', openRewards);
$.mainNavToggle.addEventListener('click', openMainNav);
$.closeMainNav.addEventListener('click', closeMainNav);

function openIndex(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  //changes title to Chores
  nav.changeTitle(
    {title: $.Title, titleIcon: $.TitleIcon, titleContainer: $.TitleContainer, titleBottom: $.TitleContainerBottom},
    {title: 'CHORES', backgroundColor: '#8b257c', titleBottom: '#4e246c', titleIcon: '◤'}
  ); 
  nav.open(controllers.index, true); //navigates into "index" view
  nav.toggleDown(navController); //toggle's nav down
}

function openCoins(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  //changes title to Coins
  nav.changeTitle(
    {title: $.Title, titleIcon: $.TitleIcon, titleContainer: $.TitleContainer, titleBottom: $.TitleContainerBottom},
    {title: 'COINS', backgroundColor: '#f47d23', titleBottom: '#d61e34', titleIcon: 'C'}
  ); 
  nav.open(controllers.coins, true); //navigates into "coins" view
  nav.toggleDown(navController); //toggle's nav down
}

function openRewards(e) {
  var nav = require('navigation'),
      controllers = Alloy.Globals.controllers,
      navController = $.nav;

  //changes title to REWARDS
  nav.changeTitle(
    {title: $.Title, titleIcon: $.TitleIcon, titleContainer: $.TitleContainer, titleBottom: $.TitleContainerBottom},
    {title: 'REWARDS', backgroundColor: '#e9194b', titleBottom: '#9d1c52', titleIcon: 'R'}
  ); 
  nav.open(controllers.rewards, true); //navigates into "rewards" view
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