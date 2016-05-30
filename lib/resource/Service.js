'use strict';
const DATA = require('../data/Countries.json')
const _ = require('underscore')

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

module.exports = {
  findByString: findByString,
  findArrayEqual: findArrayEqual,
  findArrayIndex: findArrayIndex,
  findArrayMultiple: findArrayMultiple,
  findInArray: findInArray
}