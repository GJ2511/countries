'use strict';
const Format = require('response-format')

/** @function
 * @name Format
 * @param {Array} response data
*/
module.exports = (data) => {
	if(data === null)
		return Format.badRequest('Bad Request', [])
	else if (!data.length)
		return Format.notFound('No data Found', [])
  else
    return Format.success('OK', data)
}