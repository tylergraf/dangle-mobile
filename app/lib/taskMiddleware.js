exports.addTask = function(data, cb) {
  // deps
  var moment = require('moment'),
      tasksCollection = Alloy.Collections.tasks;

      tasksCollection.fetch();

  // task model
  var task = Alloy.createModel('tasks', {
      title : data.title,
      value: data.value,
      kidId: data.kidId,
      type: data.type,
      due: data.due,
      repeated: data.repeated,
      dateUpdated: moment().format('YYYYMMDDHHmmss')
  });

  // save task
  task.save();

  // add task to taskColleciton so it reflects in databindings
  tasksCollection.add(task);

  // call callback
  cb();
}

exports.removeTask = function(id, cb) {
  // deps
  var tasksCollection = Alloy.Collections.tasks,
      task = tasksCollection.get(id);

  // remove the task from the collection
  tasksCollection.remove(task);

  // destroy task from persistence
  task.destroy();

  // call callback
  cb();
}