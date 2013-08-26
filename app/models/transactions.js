exports.definition = {
  config: {
    "columns": {
      "amount":"string",
      "date":"string",
      "approved":"boolean",
      "type":"string",
      "taskId":"string",
      "kidId":"string",
      "dateUpdated":"string"
    },
    "defaults": {
      "amount":"0",
      "date":"string",
      "approved":"false",
      "type":"chore",
      "taskId":"string",
      "kidId":"string",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "transactions"
    }
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {

      // Implement the comparator method.
      getById: function(id, transactionCollection) {
        return transactionCollection.find(function(transaction) {
          return transaction.get('id') === id;
        });
      }

    }); // end extend

    return Collection;
  }
}