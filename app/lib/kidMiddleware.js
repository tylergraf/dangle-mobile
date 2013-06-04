exports.addKid = function(data, cb) {
  // deps
  var moment = require('moment'),
      kidsCollection = Alloy.Collections.kids;

  // kid model
  var kid = Alloy.createModel('kids', {
      name : data.name,
      password : data.password,
      avatar: (data.avatar) ? data.avatar : null,
      dateUpdated: moment().format('YYYYMMDDHHmmss')
  });

  // save kid
  kid.save();

  // add kid to kidColleciton so it reflects in databindings
  kidsCollection.add(kid);

  // call callback
  cb();
}

exports.removeKid = function(id, cb) {
  // deps
  var kidsCollection = Alloy.Collections.kids,
      kid = kidsCollection.get(id);

  // remove the kid from the collection
  kidsCollection.remove(kid);

  // destroy kid from persistence
  kid.destroy();

  // call callback
  cb();
}