/* eslint-disable no-undef */
import assert from 'assert';
import { isPublisher } from '../src';

describe('isPublisher', () => {
  it('should return false if the argument is not an object', () => {
    assert(isPublisher() === false);
    assert(isPublisher(123) === false);
    assert(isPublisher(true) === false);
    assert(isPublisher('hello') === false);
    assert(isPublisher(() => {}) === false);
    assert(isPublisher([]) === false);
  });
  it('should return false if the object does not have the "subscribe" field', () => {
    assert(isPublisher({}) === false);
  });
  it('should return false if the object does have the "subscribe" field but is not a function', () => {
    assert(isPublisher({ subscribe: null }) === false);
    assert(isPublisher({ subscribe: undefined }) === false);
    assert(isPublisher({ subscribe: true }) === false);
    assert(isPublisher({ subscribe: 123 }) === false);
    assert(isPublisher({ subscribe: 'hello' }) === false);
    assert(isPublisher({ subscribe: {} }) === false);
    assert(isPublisher({ subscribe: [] }) === false);
  });
  it('should return true if the object does have the "subscribe" field that is a function.', () => {
    assert(isPublisher({ subscribe: () => {} }));
  });
});
