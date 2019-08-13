'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();

    [num,arr,obj,func,bool].forEach( value => {
      expect(validator.isString(value)).toBeFalsy();
    });
  });

  it('numbers', () => {
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(-1)).toBeTruthy();
    expect(validator.isNumber(1.2)).toBeTruthy();
    
    [str,arr,obj,func,bool].forEach( value => {
      expect(validator.isNumber(value)).toBeFalsy();
    });
  });

  it('arrays', () => {
    expect(validator.isArray(arr)).toBeTruthy();
    
    [str,num,obj,func,bool].forEach( value => {
      expect(validator.isArray(value)).toBeFalsy();
    });
  });

  it('objects', () => {
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    
    [str,num,func,bool].forEach( value => {
      expect(validator.isObject(value)).toBeFalsy();
    });
  });

  it('booleans', () => {
    expect(validator.isBoolean(bool)).toBeTruthy();
    
    [str,num,arr,obj,func].forEach( value => {
      expect(validator.isBoolean(value)).toBeFalsy();
    });
  });

  it('functions', () => {
    expect(validator.isFunction(func)).toBeTruthy();
    
    [str,num,arr,obj,bool].forEach( value => {
      expect(validator.isFunction(value)).toBeFalsy();
    });
  });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    let test1 = { name : 'asdf' };
    let test2 = { notname : 'asdf' };

    expect( validator.hasName( test1 ) ).toBeTruthy();
    expect( validator.hasName( test2 ) ).toBeFalsy();

  });

  it('validates the proper types of object properties', () => {
    
    let testtrue = { name : 'asdf' };
    let testArray = [ 5, ['a'], () => {}, {}, false ];
    
    expect(validator.isString(testtrue.name)).toBeTruthy();

    testArray.forEach( value => {
      let testfalse = { name: value };
      expect(validator.isString(testfalse.name)).toBeFalsy();
    });

  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    let numArray = [ -1, 10, 0.1, -15.5 ];
    let testArray = [ ['a'], () => {}, {}, false ];

    numArray.forEach( value => {
      expect(validator.isNumber(value)).toBeTruthy();
    });

    testArray.forEach( value => {
      expect(validator.isNumber(value)).toBeFalsy();
    });

  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    let testArray = [ 'yes', 'no', 'mal', 'fmale', 1 ];
    let gender = [ 'male', 'female' ];

    testArray.forEach( value => {
      expect(validator.testGender(value)).toBeFalsy();
    });

    gender.forEach( value => {
      expect(validator.testGender(value)).toBeTruthy();
    });
    
  });

  // TODO: Cover so, so many more cases

});

