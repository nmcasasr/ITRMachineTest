/**
 * Vehicle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName : 'Vehicle',
  attributes: {
    UniqueId : {
      type : 'string'
    },
    make : {
      type : 'string'
    },
    fuel_type: {
      type : 'string',
      columnName : 'fuel-type'
    },
    num_of_doors: {
      type : 'string',
      columnName : 'num-of-doors'
    },
    body_style: {
      type : 'string',
      columnName : 'body-style'
    },
    drive_wheels : {
      type : 'string',
      columnName: 'drive-wheels'
    },
    engine_location : {
      type : 'string',
      columnName: 'engine-location'
    },
    wheel_base: {
      type : 'string',
      columnName: 'wheel-base'
    },
    length : {
      type : 'string'
    },
    width : {
      type : 'string'
    },
    height : {
      type : 'string'
    },
    curb_weight: {
      type : 'number',
      columnName: 'curb-weight'
    },
    engine_type:{
      type : 'string',
      columnName: 'engine-type'
    },
    num_of_cylinders: {
      type : 'string',
      columnName: 'num-of-cylinders'
    },
    engine_size: {
      type : 'number',
      columnName: 'engine-size'
    },
    fuel_system: {
      type : 'string',
      columnName: 'fuel-system'
    },
    bore: {
      type : 'string'
    },
    stroke: {
      type : 'string'
    },
    compression_ratio: {
      type : 'number',
      columnName: 'compression-ratio'
    },
    horsepower: {
      type : 'number'
    },
    peak_rpm: {
      type : 'number',
      columnName: 'peak-rpm'
    },
    city_mpg: {
      type : 'number',
      columnName: 'city-mpg'
    },
    highway_mpg: {
      type : 'number',
      columnName: 'highway-mpg'
    },
    price: {
      type : 'number'
    }
  }
};

