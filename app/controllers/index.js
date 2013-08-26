// VARS
var taskCollection = Alloy.Collections.tasks;
var transactionCollection = Alloy.Collections.transactions;
var moment = require('moment');
var day;


// EVENT LISTENERS
$.index.addEventListener('open', onOpen);
$.nextDay.addEventListener('click', nextDay);
$.prevDay.addEventListener('click', prevDay);
$.taskList.addEventListener('click', addTransaction);

taskCollection.on('change', calculateTotal);

// EVENT FUNCTIONS
function onOpen(e) {
  day = moment();
  Alloy.Collections.tasks.trigger('change');
  $.dayTitle.setText(day.calendar().toUpperCase());
}
function nextDay(e) {
  day.add('days',1);
  $.dayTitle.setText(day.calendar().toUpperCase());
}
function prevDay(e) {
  day.subtract('days',1);
  $.dayTitle.setText(day.calendar().toUpperCase());
}
function addTransaction(e) {
  var t = require('transactionMiddleware');
  var transaction = {
    taskId: e.source.taskId,
    amount: e.source.value,
    approved: false,
    date: day.format(Alloy.Globals.timestamp),
  };
  t.addTransaction(transaction, function(data) {
    // e.source.class = 'checked';
    console.log(JSON.stringify(e.source));
    // console.log(JSON.stringify(transactionCollection));
  });
}

function findTask(e) {
  var id = e.source.taskId;
  var taskCollection = Alloy.Collections.tasks;

  var s = taskCollection.getById(id,taskCollection);
  console.log(JSON.stringify(s));
}

function calculateTotal(e) {
  console.log(JSON.stringify(e));
  // $.choreFilterAllCount.setText('('+  +')')
}


// UTILITY FUNCTIONS
function choreFilter(collection) {
  return collection.where({kidId: (Alloy.Globals.currentUser) ? Alloy.Globals.currentUser.id : null})
}
function choreCountFilter(collection) {
  return collection.where({kidId: (Alloy.Globals.currentUser) ? Alloy.Globals.currentUser.id : null})
}
