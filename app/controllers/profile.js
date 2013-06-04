// navigate back
$.navBack.addEventListener('click',function() {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;
  console.log(JSON.stringify('yep'));
  // navigate back to currentController view
  nav.closeModal(controllers.profile);
});

$.profile.addEventListener('open',function(){
  $.avatar.setImage(Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'avatar-'+Alloy.Globals.currentUser.id+'.jpg').nativePath)
});

$.setImageButton.addEventListener('click',function(e){
  Titanium.Media.openPhotoGallery({
    success:function(event){
      var image = event.media;
      var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'avatar-'+Alloy.Globals.currentUser.id+'.jpg');
      f.write(image);

      $.avatar.setImage(f.nativePath);
      // var imageView = Titanium.UI.createImageView({
      //     height:50,
      //     width:50,
      //         image:f.nativePath;
      // });
      // set image view
      // imageView.image = image;
    },
    cancel:function(){},
    error:function(error){
      // create alert
      var a = Titanium.UI.createAlertDialog({title:'Camera'});

      // set message
      if (error.code == Titanium.Media.NO_CAMERA)
      {
          a.setMessage('Device does not have Camera capabilities');
      }
      else
      {
          a.setMessage('Unexpected error: ' + error.code);
      }

      // show alert
      a.show();
    },
    mediaTypes: Titanium.UI.MEDIA_TYPE_PHOTO,
    allowEditing:true
  });
});


$.logOut.addEventListener('click',function(e){
  var auth = require('auth');
  auth.logout();
});
