migration.up = function(db) {
  db.createTable({
    "columns": {
      "title":"string",
      "value":"number",
      "kidId":"string",
      "completed": "boolean",
      "type":"string",
      "due":"string",
      "repeated":"string",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "tasks"
    }
  });
};

migration.down = function(db) {
  db.dropTable("tasks");
};