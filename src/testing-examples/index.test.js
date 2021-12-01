import { expect } from 'chai';
import { getPropertyWithDefault } from './index';

describe('getPropertyWithDefault - basic functionality', () => {
  it('should returns the correct value when the property exists', () => {
    const person = { name: 'John Doe', age: 30, hairColor: 'brown' };
    const actual = getPropertyWithDefault('name', 'N/A', person);
    const expected = 'John Doe';
    expect(actual).to.equal(expected);
  });

  it('should returns the specified default value when the property does not exist', () => {
    const person = {};
    const actual = getPropertyWithDefault('name', 'N/A', person);
    const expected = 'N/A';
    expect(actual).to.equal(expected);
  });
});

// npx mocha "src/**/*.test.js" --recursive --require @babel/register
