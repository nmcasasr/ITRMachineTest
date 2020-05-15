/**
 * Client.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName : 'Clients',
  attributes: {
    Date_Set : { 
      type : 'string',
      columnName: 'Date Set'
    },
    Lastname : { 
      type : 'string'
    },
    Name : { 
      type : 'string'
    },
    Phone : { 
      type : 'string',
      columnName: 'Phone #'
    },
    Unique_Id : { 
      type : 'string',
      columnName: 'Unique Id'
    }
  },

};

