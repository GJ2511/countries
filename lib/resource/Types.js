'use strict';
const Constant = require('./Constant')

const types = {
  'cca2': Constant.STRING,
  'ccn3': Constant.STRING,
  'cca3': Constant.STRING,
  'cioc': Constant.STRING,
  'capital': Constant.STRING,
  'region': Constant.STRING,
  'subregion': Constant.STRING,
  'demonym': Constant.STRING,
  'landlocked': Constant.STRING,
  'area': Constant.STRING,
  'id': Constant.STRING,
  'currency': Constant.ARRAY,
  'callingCode': Constant.ARRAY,
  'altSpellings': Constant.ARRAY_MULTIPLE,
  'borders': Constant.ARRAY_MULTIPLE,
  'tld': Constant.ARRAY_MULTIPLE,
  'lat': Constant.ARRAY_INDEX,
  'lng': Constant.ARRAY_INDEX,
  'latlng': Constant.ARRAY_EQUAL,
  'name': Constant.OBJECT,
  'languages': Constant.ARRAY_MULTIPLE,
  'all': Constant.ALL
}

module.exports = types