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
  }
}