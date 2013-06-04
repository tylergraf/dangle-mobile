exports.definition = {
  config: {
    "columns": {
      "title":"string",
      "value":"number",
      "kidId":"number",
      "completed": "boolean",
      "type":"string",
      "due":"string",
      "repeated":"string",
      "dateUpdated":"string"
    },
    "defaults": {
      "title":"No Name",
      "value": 100,
      "kidId": 1,
      "completed": false,
      "type":"string",
      "due":"string",
      "repeated":"string",
      "dateUpdated":"string"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "tasks"
    }
  }
}