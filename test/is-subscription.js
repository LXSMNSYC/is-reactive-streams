/* eslint-disable no-undef */
import assert from 'assert';
import { isSubscription } from '../src';

describe('isSubscription', () => {
  it('should return false if the argument is not an object', () => {
    assert(isSubscription() === false);
    assert(isSubscription(123) === false);
    assert(isSubscription(true) === false);
    assert(isSubscription('hello') === false);
    assert(isSubscription(() => {}) === false);
    assert(isSubscription([]) === false);
  });
  it('should return false if the object does not have the "request" field', () => {
    const obj = {
      cancel: () => {},
    };
    assert(isSubscription(obj) === false);
  });
  it('should return false if the object does not have the "cancel" field', () => {
    const obj = {
      request: () => {},
    };
    assert(isSubscription(obj) === false);
  });
  it('should return false if the object does have the "request" field but is not a function', () => {
    const obj = {
      request: '',
      cancel: () => {},
    };
    assert(isSubscription(obj) === false);
  });
  it('should return false if the object does have the "cancel" field but is not a function', () => {
    const obj = {
      request: () => {},
      cancel: '',
    };
    assert(isSubscription(obj) === false);
  });
  it('should return true if the object does have the "request" and "cancel" field that is a function.', () => {
    const obj = {
      request: () => {},
      cancel: () => {},
    };
    assert(isSubscription(obj));
  });
});
