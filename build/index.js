'use strict';

var _fibonacci = require('./src/fibonacci.js');

var _person$name;

var person = {
  name: {
    first: 'Emir',
    last: 'Mustafoski',
  },
};
var first =
  person === null || person === void 0
    ? void 0
    : (_person$name = person.name) === null || _person$name === void 0
    ? void 0
    : _person$name.first;
colorfulLog((0, _fibonacci.generateFibonacci)(10));
