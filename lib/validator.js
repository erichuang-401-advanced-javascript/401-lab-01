'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = input => {
  return typeof input === 'number';
};

validator.isArray = input => {
  return Array.isArray(input);
};

validator.isObject = input => {
  return typeof input === 'object';
};

validator.isBoolean = input => {
  return typeof input === 'boolean';
};

validator.isFunction = input => {
  return typeof input === 'function';
};

validator.hasName = input => {
  if ( input.name ) return true;
};

validator.testGender = input => {
  if ( input === 'male' || input === 'female' ) {
    return true;
  } else return false;
};
