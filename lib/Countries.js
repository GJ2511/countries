'use strict';
const DATA = require('./data/Countries.json')
const _ = require('underscore')

const STRING = 'string',
  ARRAY = 'array',
  ARRAY_MULTIPLE = 'array_multiple',
  ARRAY_INDEX = 'array_index',
  ARRAY_EQUAL = 'array_equal'

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
  'callingCode': ARRAY,
  'altSpellings': ARRAY_MULTIPLE,
  'borders': ARRAY_MULTIPLE,
  'tld': ARRAY_MULTIPLE,
  'lat': ARRAY_INDEX,
  'lng': ARRAY_INDEX,
  'latlng': ARRAY_EQUAL
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

const findArrayMultiple = (prop, value) => {
  let filtered = _.filter(DATA, (c) => {
    return _(c[prop]).values().some( (v) => {
      return v === value
    })
  })
  return filtered
}

const findArrayIndex = (prop, value, index) => {
  let filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop][index], value)) {
      return c
    }
  });
  return filtered
}

const findArrayEqual = (prop, values) => {
  let filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop], values)) {
      return c
    }
  });
  return filtered
}

let Queries = {

  find : (prop, value, index) => {
    let findBy = typeof prop === 'string' ? types[prop] : 'Ghost'
    prop = (prop === 'lat' || prop === 'lng') ? 'latlng' : prop

    switch(findBy) {
      case STRING:
        return findByString(prop, value)
        break
      case ARRAY:
        return findInArray(prop, value)
        break
      case ARRAY_MULTIPLE:
        return findArrayMultiple(prop, value)
        break
      case ARRAY_INDEX:
        return findArrayIndex(prop, value, index)
        break
      case ARRAY_EQUAL:
        return findArrayEqual(prop, value)
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
  },

  findByCallingCode: (code) => {
    return Queries.find('callingCode', code)
  },

  findBySpellings: (code) => {
    return Queries.find('altSpellings', code)
  },

  findByBorders: (code) => {
    return Queries.find('borders', code)
  },

  findByTLD: (code) => {
    return Queries.find('tld', code)
  },

  findByLat: (code) => {
    return Queries.find('lat', code, 0)
  },

  findByLong: (code) => {
    return Queries.find('lng', code, 1)
  },

  findByLatLong: (code) => {
    return Queries.find('latlng', code)
  },
}

/**
 * `API` constructor.
 *
 * @api public
*/
module.exports = Queries