exports.definition = {
  config: {
    "columns": {
      "title": "string",
      "value": "number",
      "kidId": "number",
      "completed": "boolean",
      "type": "string",
      "due": "string",
      "repeated": "string",
      "dateUpdated": "string"
    },
    "defaults": {
      "title": "No Name",
      "value": 100,
      "kidId": 1,
      "completed": false,
      "type": "string",
      "due": "string",
      "repeated": "string",
      "dateUpdated": "string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "tasks"
    }
  },
  extendCollection: function(Collection) {
    _.extend(Collection.prototype, {

      // Implement the comparator method.
      getById: function(id, taskCollection) {
        return taskCollection.find(function(task) {
          return task.get('id') === id;
        });
      }

    }); // end extend

    return Collection;
  }
}