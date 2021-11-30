import { generateFibonacci } from './fibonacci.js';
import { colorfulLog } from 'colorful-log-node/index.js';

const person = {
  name: {
    first: 'Emir',
    last: 'Mustafoski',
  },
};

const first = person?.name?.first;

colorfulLog(generateFibonacci(10), '');
