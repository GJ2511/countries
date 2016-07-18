'use strict';
const Types = require('./resource/Types')
const Constant = require('./resource/Constant')
const Service = require('./resource/Service')
const Responder = require('./resource/Responder')

let Queries = {
  /**
   * @function find
   * common handler for all the available APIs
   */
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
      case Constant.ALL:
        return Service.findAll()
        break
      default:
        return Responder(null)
    }
  },
 /**
 * @api {get} findByCountryCode Request Country By its  code ISO 3166-1 alpha-2
 * @apiName findByCountryCode
 *
 * @apiParam {String} code unique country code.
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
	findByCountryCode : (code) => {
		return Queries.find('cca2', code)
	},
 /**
 * @api {get} findByCCN3 Request Country By its ISO 3166-1 numeric
 * @apiName findByCCN3
 *
 * @apiParam {String} code unique code ISO 3166-1 numeric.
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCCN3 : (code) => {
    return Queries.find('ccn3', code)
  },
  /**
 * @api {get} findByCCA3 Request Country By its ISO 3166-1 alpha-3
 * @apiName findByCCA3
 *
 * @apiParam {String} code unique code ISO ISO 3166-1 alpha-3
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCCA3 : (code) => {
    return Queries.find('cca3', code)
  },
   /**
 * @api {get} findByCIOC Request Country By its International Olympic Committee
 * @apiName findByCIOC
 *
 * @apiParam {String} code unique code International Olympic Committee
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCIOC : (code) => {
    return Queries.find('cca3', code)
  },
    /**
 * @api {get} findByCapital Request Country By its Capital
 * @apiName findByCapital
 *
 * @apiParam {String} code Capital
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCapital : (code) => {
    return Queries.find('capital', code)
  },
   /**
 * @api {get} findBySubRegion Request Countries By sub region
 * @apiName findBySubRegion
 *
 * @apiParam {String} code sub region value
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findBySubRegion : (code) => {
    return Queries.find('subregion', code)
  },
   /**
 * @api {get} findByRegion Request Countries By region
 * @apiName findByRegion
 *
 * @apiParam {String} code region value
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByRegion : (code) => {
    return Queries.find('region', code)
  },
   /**
 * @api {get} findByResidentName Request Country By name of residents
 * @apiName findByResidentName
 *
 * @apiParam {String} code name of residents
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByResidentName : (code) => {
    return Queries.find('demonym', code)
  },
/**
 * @api {get} findByLandLock Request Countries By landlocked status
 * @apiName findByLandLock
 *
 * @apiParam {String} code landlocked status
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByLandLock : (code) => {
    return Queries.find('landlocked', code)
  },
/**
 * @api {get} findByArea Request Countries By land area in km²
 * @apiName findByArea
 *
 * @apiParam {Number} code land area in km²
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByArea : (code) => {
    return Queries.find('area', code)
  },
/**
 * @api {get} findByCurrency Request Countries By ISO 4217 currency code(s)
 * @apiName findByCurrency
 *
 * @apiParam {String} code ISO 4217 currency code(s)
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCurrency: (code) => {
    return Queries.find('currency', code)
  },
/**
 * @api {get} findByCallingCode Request Country By calling code(s)
 * @apiName findByCallingCode
 *
 * @apiParam {String} code calling code(s)
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByCallingCode: (code) => {
    return Queries.find('callingCode', code)
  },
/**
 * @api {get} findBySpellings Request Countries By alternative spellings
 * @apiName findBySpellings
 *
 * @apiParam {String} code alternative spellings
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findBySpellings: (code) => {
    return Queries.find('altSpellings', code)
  },
/**
 * @api {get} findByBorders Request Countries By land borders
 * @apiName findByBorders
 *
 * @apiParam {String} code land borders
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByBorders: (code) => {
    return Queries.find('borders', code)
  },
/**
 * @api {get} findByTLD Request Countries By country code top-level domain
 * @apiName findByTLD
 *
 * @apiParam {String} code country code top-level domain
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByTLD: (code) => {
    return Queries.find('tld', code)
  },
/**
 * @api {get} findByLat Request Country By latitude
 * @apiName findByLat
 *
 * @apiParam {Number} code latitude
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByLat: (code) => {
    return Queries.find('lat', code, 0)
  },
/**
 * @api {get} findByLong Request Country By longitude
 * @apiName findByLong
 *
 * @apiParam {Number} code longitude
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByLong: (code) => {
    return Queries.find('lng', code, 1)
  },
/**
 * @api {get} findByLatLong Request Country By latitude and longitude
 * @apiName findByLatLong
 *
 * @apiParam {Array} code [latitude ,longitude]
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByLatLong: (code) => {
    return Queries.find('latlng', code)
  },
/**
 * @api {get} findByName Request Country By common name in english
 * @apiName findByName
 *
 * @apiParam {String} code common name in english
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByName: (code) => {
    return Queries.find('name', code, 'common')
  },
/**
 * @api {get} findByOfficialName Request Country By official name in english
 * @apiName findByOfficialName
 *
 * @apiParam {String} code official name in english
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByOfficialName: (code) => {
    return Queries.find('name', code, 'official')
  },
/**
 * @api {get} findByLanguage Request Countries By list of official languages
 * @apiName findByLanguage
 *
 * @apiParam {String} code list of official languages
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findByLanguage: (code) => {
    return Queries.find('languages', code)
  },
  /**
 * @api {get} findAll Request All Countries
 * @apiName findAll
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findAll: () => {
    return Queries.find('all')
  },
  /**
 * @api {get} findById Request Country By its  unique identfiaction number
 * @apiName findById
 *
 * @apiParam {Number} id unique identification number.
 *
 * @apiSuccess {Object[]} response "response" is only a placeholder.
 * @apiSuccess {Number}   response.statusCode  Response Code.
 * @apiSuccess {Boolean}  response.error  Error.
 * @apiSuccess {String}   response.message  Response message.
 * @apiSuccess {Array[]}  response.data  Array containing country Object.
 */
  findById : (id) => {
    return Queries.find('id', id)
  },
}

/**
 * `API` constructor.
 *
 * @api public
*/
module.exports = Queries