'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable valid-typeof */

/**
 * @namespace IRS
 */
/**
* @ignore
*/
const type = y => x => typeof x === y;
/**
* @ignore
*/
const isObject = type('object');
/**
* @ignore
*/
const isFunction = type('function');
/**
 * Test whether an object implements the [Publisher](https://github.com/reactive-streams/reactive-streams-js#1-publisher-code) interface.
 * @param {object} publisher
 * An object that is expected to implement the [Publisher](https://github.com/reactive-streams/reactive-streams-js#1-publisher-code) interface.
 * @returns {boolean}
 */
const isPublisher = publisher => isObject(publisher) && isFunction(publisher.subscribe);

/**
 * Test whether an object implements the [Subscriber](https://github.com/reactive-streams/reactive-streams-js#2-subscriber-code) interface.
 * @param {object} subscriber
 * An object that is expected to implement the [Subscriber](https://github.com/reactive-streams/reactive-streams-js#2-subscriber-code) interface.
 * @returns {boolean}
 */
const isSubscriber = subscriber => isObject(subscriber)
  && isFunction(subscriber.onSubscribe)
  && isFunction(subscriber.onNext)
  && isFunction(subscriber.onError)
  && isFunction(subscriber.onComplete);

/**
 * Test whether an object implements the [Subscription](https://github.com/reactive-streams/reactive-streams-js#3-subscription-code) interface.
 * @param {object} subscription
 * An object that is expected to implement the [Subscription](https://github.com/reactive-streams/reactive-streams-js#3-subscription-code) interface.
 * @returns {boolean}
 */
const isSubscription = subscription => isObject(subscription)
  && isFunction(subscription.request)
  && isFunction(subscription.cancel);

/**
 * Test whether an object implements the [Processor](https://github.com/reactive-streams/reactive-streams-js#4processor-code) interface.
 * @param {object} processor
 * An ojbect that is expected to implement the [Processor](https://github.com/reactive-streams/reactive-streams-js#4processor-code) interface.
 * @returns {boolean}
 */
const isProcessor = processor => isPublisher(processor) && isSubscriber(processor);

exports.isProcessor = isProcessor;
exports.isPublisher = isPublisher;
exports.isSubscriber = isSubscriber;
exports.isSubscription = isSubscription;
