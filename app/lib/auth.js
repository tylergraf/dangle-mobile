exports.authenticate = function(user) {
  var controllers = Alloy.Globals.controllers;
  console.log(JSON.stringify(user));
  if(!user){

    controllers.login.getView().open();


    
  } else if(user && user.admin === 'true') {
    // ****************
    // ADMIN USER LOGIN
    // **************** 
    var currentController = Alloy.Globals.currentController;
    Alloy.Globals.currentUser = user;

    // CLOSE LOGIN VIEW
    controllers.login.getView().close();

    // OPEN VIEWS
    controllers.adminDashboard.getView().open();
    controllers.grabber.getView().open();
    Alloy.Globals.currentController = controllers.adminDashboard;
    

  } else {
    // ****************
    // USER LOGIN
    // **************** 

    var currentController = Alloy.Globals.currentController;
    Alloy.Globals.currentUser = user;

    // CLOSE LOGIN VIEW
    controllers.login.getView().close();

    // OPEN VIEWS
    controllers.nav.getView().open();
    controllers.index.getView().open();
    controllers.grabber.getView().open();
    Alloy.Globals.currentController = controllers.index;
  }


};

exports.logout = function() {
  var controllers = Alloy.Globals.controllers;
  
  // SET CURRENT USER TO NULL
  Alloy.Globals.currentUser = null;

  // CLOSE ALL VIEWS
  for (x in controllers) {
    controllers[x].getView().close();
  }

  // OPEN LOGIN VIEW
  controllers.login.getView().open();

};
