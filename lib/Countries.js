'use strict';
const DATA = require('./data/Countries.json')
const _ = require('underscore')

const STRING = 'string',
  ARRAY = 'array'

const types = {
  'cca2': STRING,
  'ccn3': STRING,
  'cca3': STRING,
  'cioc': STRING,
  'capital': STRING,
  'region': STRING,
  'subregion': STRING,
  'demonym': STRING,
  'landlocked': STRING,
  'area': STRING,
  'currency': ARRAY,
  'callingCode':ARRAY,
  'altSpellings':ARRAY,
  'borders': ARRAY
}

const findByString = (prop, value) => {
  let filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop], value)) {
      return c
    }
  });
  return filtered
}

const findInArray = (prop, value) => {
  let filtered = _.filter(DATA, (c) => {
    if(_.contains(c[prop], value)) {
      return c
    }
  });
  return filtered
}

let Queries = {

  find : (prop, value) => {
    let findBy = typeof prop === 'string' ? types[prop] : 'unknown'

    switch(findBy) {
      case STRING:
        return findByString(prop, value)
        break
      case ARRAY:
        return findInArray(prop, value)
        break
      default:
        return null
    }
  },

	findByCountryCode : (code) => {
		return Queries.find('cca2', code)
	},

  findByCCN3 : (code) => {
    return Queries.find('ccn3', code)
  },

  findByCCA3 : (code) => {
    return Queries.find('cca3', code)
  },

  findByCIOC : (code) => {
    return Queries.find('cca3', code)
  },

  findByCapital : (code) => {
    return Queries.find('capital', code)
  },

  findBySubRegion : (code) => {
    return Queries.find('subregion', code)
  },

  findByRegion : (code) => {
    return Queries.find('region', code)
  },

  findByResidentName : (code) => {
    return Queries.find('demonym', code)
  },

  findByLandLock : (code) => {
    return Queries.find('landlocked', code)
  },

  findByArea : (code) => {
    return Queries.find('area', code)
  },

  findByCurrency: (code) => {
    return Queries.find('currency', code)
  }
}

/**
 * `API` constructor.
 *
 * @api public
*/
module.exports = Queries