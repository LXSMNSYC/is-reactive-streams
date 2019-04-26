/* eslint-disable no-undef */
import assert from 'assert';
import { isProcessor } from '../src';

describe('isProcessor', () => {
  it('should return false if the argument is not an object', () => {
    assert(isProcessor() === false);
    assert(isProcessor(123) === false);
    assert(isProcessor(true) === false);
    assert(isProcessor('hello') === false);
    assert(isProcessor(() => {}) === false);
    assert(isProcessor([]) === false);
  });
  it('should return false if the object does not have the "onSubscribe" field', () => {
    const obj = {
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does not have the "onNext" field', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does not have the "onComplete" field', () => {
    const obj = {
      onSubscribe: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does not have the "onSubscribe" field', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does not have the "subscribe" field', () => {
    assert(isProcessor({}) === false);
  });
  it('should return false if the object does have the "subscribe" field but is not a function', () => {
    const obj = {
      subscribe: '',
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does have the "onSubscribe" field but is not a function', () => {
    const obj = {
      subscribe: () => {},
      onSubscribe: '',
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does have the "onComplete" field but is not a function', () => {
    const obj = {
      subscribe: () => {},
      onSubscribe: () => {},
      onComplete: '',
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does have the "onError" field but is not a function', () => {
    const obj = {
      subscribe: () => {},
      onSubscribe: () => {},
      onComplete: () => {},
      onError: '',
      onNext: () => {},
    };
    assert(isProcessor(obj) === false);
  });
  it('should return false if the object does have the "onNext" field but is not a function', () => {
    const obj = {
      subscribe: () => {},
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
      onNext: '',
    };
    assert(isProcessor(obj) === false);
  });
  it('should return true if the object does have the "onSubscribe", "onNext", "onError", "onComplete" and "subscribe" field that is a function.', () => {
    const obj = {
      subscribe: () => {},
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isProcessor(obj));
  });
});
