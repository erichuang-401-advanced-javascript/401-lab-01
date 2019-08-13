'use strict';

const validator = require('./lib/validator');


// Vinicio - add some code here to be able to use the module using console.log
let numArray = [ -1, 10, 0.1, -15.5 ];
let stringArray = [ 'a', '5', '{}', 'h5' ];
let mixArray = [ ...numArray, ...stringArray ];
console.log(mixArray);
