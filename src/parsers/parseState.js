'use strict';

const STATES = require('../generated/countries');

module.exports = function parseState(source) {
  var state = STATES[source];
  if (!state) {
    throw new Error(`invalid state code: ${source}`);
  }
  return state;
};