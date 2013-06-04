exports.open = function(newController, grabber) {
	var currentController = Alloy.Globals.currentController;

	if(currentController !== newController){
      currentController.getView().setLeft(0);
      currentController.getView().setRight(0);
      newController.getView().setLeft(320);
      newController.getView().setRight(-320);
      currentController.getView().close(slideOutLeft);
      newController.getView().open(slideIn);
      if (grabber) {
        var controllers = Alloy.Globals.controllers;
        controllers.grabber.getView().close();
        controllers.grabber.getView().open();
      };
      Alloy.Globals.currentController = newController;
	} else {
    return false;
  }
};

exports.close = function(oldController) {
    var currentController = Alloy.Globals.currentController;
    
    oldController.getView().setLeft(-320);
    oldController.getView().setRight(320);
    currentController.getView().setLeft(0);
    currentController.getView().setRight(-320);
    oldController.getView().open(slideIn);
    currentController.getView().close(slideOutRight);
    
    Alloy.Globals.currentController = oldController;
};


exports.openModal = function(modalController) {

  modalController.getView().setLeft(320);
  modalController.getView().setRight(-320);
  modalController.getView().open(slideIn);

};

exports.closeModal = function(modalController) {

  modalController.getView().close(slideOutRight);

};

slideIn = Titanium.UI.createAnimation({
    left: 0,
    right: 0,
    duration: 250
});

slideOutLeft = Titanium.UI.createAnimation({
    left: -320,
    right: 320,
    duration: 250
});

slideOutRight = Titanium.UI.createAnimation({
    left: 320,
    right: -320,
    duration: 250
});