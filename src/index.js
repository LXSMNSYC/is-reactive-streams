/* eslint-disable valid-typeof */
const type = y => x => typeof x === y;

const isObject = type('object');
const isFunction = type('function');

export const isPublisher = publisher => isObject(publisher) && isFunction(publisher.subscribe);

export const isSubscriber = subscriber => isObject(subscriber)
  && isFunction(subscriber.onSubscribe)
  && isFunction(subscriber.onNext)
  && isFunction(subscriber.onError)
  && isFunction(subscriber.onComplete);

export const isSubscription = subscription => isObject(subscription)
  && isFunction(subscription.request)
  && isFunction(subscription.cancel);

export const isProcessor = processor => isPublisher(processor) && isSubscriber(processor);
