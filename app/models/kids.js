exports.definition = {
  config: {
    "columns": {
      "avatar":"string",
      "name":"string",
      "points":"number",
      "password":"string",
      "dateUpdated":"string"
    },
    "defaults": {
      "name":"string",
      "avatar":"string",
      "points": 0,
      "password": "00",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "kids"
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