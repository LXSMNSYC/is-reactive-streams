'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable valid-typeof */
const type = y => x => typeof x === y;

const isObject = type('object');
const isFunction = type('function');

const isPublisher = publisher => isObject(publisher) && isFunction(publisher.subscribe);

const isSubscriber = subscriber => isObject(subscriber)
  && isFunction(subscriber.onSubscribe)
  && isFunction(subscriber.onNext)
  && isFunction(subscriber.onError)
  && isFunction(subscriber.onComplete);

const isSubscription = subscription => isObject(subscription)
  && isFunction(subscription.request)
  && isFunction(subscription.cancel);

const isProcessor = processor => isPublisher(processor) && isSubscriber(processor);

exports.isProcessor = isProcessor;
exports.isPublisher = isPublisher;
exports.isSubscriber = isSubscriber;
exports.isSubscription = isSubscription;
