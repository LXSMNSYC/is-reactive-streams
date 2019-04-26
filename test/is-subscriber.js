/* eslint-disable no-undef */
import assert from 'assert';
import { isSubscriber } from '../src';

describe('isSubscriber', () => {
  it('should return false if the argument is not an object', () => {
    assert(isSubscriber() === false);
    assert(isSubscriber(123) === false);
    assert(isSubscriber(true) === false);
    assert(isSubscriber('hello') === false);
    assert(isSubscriber(() => {}) === false);
    assert(isSubscriber([]) === false);
  });
  it('should return false if the object does not have the "onSubscribe" field', () => {
    const obj = {
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does not have the "onNext" field', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does not have the "onComplete" field', () => {
    const obj = {
      onSubscribe: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does not have the "onSubscribe" field', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does have the "onSubscribe" field but is not a function', () => {
    const obj = {
      onSubscribe: '',
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does have the "onComplete" field but is not a function', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: '',
      onError: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does have the "onError" field but is not a function', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onError: '',
      onNext: () => {},
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return false if the object does have the "onNext" field but is not a function', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
      onNext: '',
    };
    assert(isSubscriber(obj) === false);
  });
  it('should return true if the object does have the "onSubscribe", "onNext", "onError", "onComplete" field that is a function.', () => {
    const obj = {
      onSubscribe: () => {},
      onComplete: () => {},
      onError: () => {},
      onNext: () => {},
    };
    assert(isSubscriber(obj));
  });
});
