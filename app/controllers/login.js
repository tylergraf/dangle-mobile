// EVENT HANDLERS
var addedAdmins = false;
function handleAddAdmin(e) {
  if(!addedAdmins){
    // ADDING ROW FOR ADMINS
    var row = Titanium.UI.createTableViewRow({
      title: 'Tyler',
      admin: 'true'
    });
    $.UserTable.appendRow(row);
    addedAdmins = true;
  }
}


function handleLogin(e) {
  var auth = require('auth');
  var user = {
    name: e.source.title,
    admin: e.source.admin,
    id: e.source.kidId
  };
  auth.authenticate(user);
}






// EVENT LISTENERS
$.UserTable.addEventListener('click', handleLogin);
$.login.addEventListener('open', handleAddAdmin);