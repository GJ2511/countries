'use strict';
const Types = require('./resource/Types')
const Constant = require('./resource/Constant')
const Service = require('./resource/Service')
const Responder = require('./resource/Responder')

let Queries = {

  find : (prop, value, index) => {
    let findBy = typeof prop === 'string' ? Types[prop] : 'Ghost'
    prop = (prop === 'lat' || prop === 'lng') ? 'latlng' : prop

    switch(findBy) {
      case Constant.STRING:
        return Service.findByString(prop, value)
        break
      case Constant.ARRAY:
        return Service.findInArray(prop, value)
        break
      case Constant.ARRAY_MULTIPLE:
        return Service.findArrayMultiple(prop, value)
        break
      case Constant.ARRAY_INDEX:
        return Service.findArrayIndex(prop, value, index)
        break
      case Constant.ARRAY_EQUAL:
        return Service.findArrayEqual(prop, value)
        break
      case Constant.OBJECT:
        return Service.findInObject(prop, value, index)
        break
      default:
        return Responder(null)
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

  findByName: (code) => {
    return Queries.find('name', code, 'common')
  },

  findByOfficialName: (code) => {
    return Queries.find('name', code, 'official')
  },

  findByLanguage: (code) => {
    return Queries.find('languages', code)
  }
}

/**
 * `API` constructor.
 *
 * @api public
*/
module.exports = Queries