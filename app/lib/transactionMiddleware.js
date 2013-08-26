exports.addTransaction = function(data, cb) {
  // deps
  var moment = require('moment'),
      transactionCollection = Alloy.Collections.transactions;

      // transactionCollection.fetch();

  // transaction model
  var transaction = Alloy.createModel('transactions', {
      amount: data.amount,
      date: data.date,
      approved: data.approved,
      taskId: data.taskId,
      dateUpdated: moment().format('YYYYMMDDHHmmss')
  });
  console.log(JSON.stringify(transaction));
  // save transaction
  transaction.save();

  // add transaction to transactionColleciton so it reflects in databindings
  transactionCollection.add(transaction);
  console.log(JSON.stringify(transactionCollection));
  cb();
}
exports.approveTransaction = function(id, cb) {
  var moment = require('moment'),
      transactionCollection = Alloy.Collections.transactions,
      transaction = transactionCollection.get(id);

  console.log('id: ',id);
  console.log('transaction: ',JSON.stringify(transaction));
  console.log('transactionCollection: ',JSON.stringify(transactionCollection));
  
  transaction.set({approved: true, dateUpdated: moment().format('YYYYMMDDHHmmss')});
  
  transaction.save();

  // call callback
  cb();
}
exports.removeTransaction = function(id, cb) {
  // deps
  var transactionCollection = Alloy.Collections.transactions,
      transaction = transactionCollection.get(id);

  // remove the transaction from the collection
  transactionCollection.remove(transaction);

  // destroy transaction from persistence
  transaction.destroy();

  // call callback
  cb();
}