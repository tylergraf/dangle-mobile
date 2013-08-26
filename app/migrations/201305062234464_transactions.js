migration.up = function(db) {
  db.createTable({
    "columns": {
      "amount":"string",
      "date":"string",
      "approved":"boolean",
      "type":"string",
      "taskId":"string",
      "kidId":"string",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "transactions"
    }
  });
};

migration.down = function(db) {
  db.dropTable("transactions");
};