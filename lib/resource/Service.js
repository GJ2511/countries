'use strict';
const DATA = require('../data/Countries.json');
const _ = require('underscore');
const Responder = require('./Responder');

const findByString = (prop, value) => {
  const filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop], value)) {
      return c;
    }
  });
  return Responder(filtered);
}

const findInArray = (prop, value) => {
  const filtered = _.filter(DATA, (c) => {
    if(_.contains(c[prop], value)) {
      return c
    }
  });
  return Responder(filtered);
}

const findArrayMultiple = (prop, value) => {
  const filtered = _.filter(DATA, (c) => {
    return _(c[prop]).values().some( (v) => {
      return v === value;
    });
  });
  return Responder(filtered);
}

const findArrayIndex = (prop, value, index) => {
  const filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop][index], value)) {
      return c;
    }
  });
  return Responder(filtered);
}

const findArrayEqual = (prop, values) => {
  const filtered = _.filter(DATA, (c) => {
    if(_.isEqual(c[prop], values)) {
      return c;
    }
  });
  return Responder(filtered);
}

const findInObject = (prop, value, index) => {
  let match = {};
    match[value] = true;

  const filtered = _.filter(DATA, (val) => {
    return match[val[prop][index]];
  });
  return Responder(filtered);
}

const findAll = () => Responder(DATA);

module.exports = { findByString, findArrayEqual, findArrayIndex, findArrayMultiple, findInArray, findInObject, findAll}