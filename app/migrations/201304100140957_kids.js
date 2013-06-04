migration.up = function(db) {
  db.createTable({
    "columns": {
      "avatar":"string",
      "name":"string",
      "points":"number",
      "password":"string",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "kids"
    }
  });
};

migration.down = function(db) {
  db.dropTable("kids");
};