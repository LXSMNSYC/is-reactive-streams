# is-reactive-streams

Test whether an object is a [Reactive Streams](https://github.com/reactive-streams/reactive-streams-js) component

[![NPM](https://nodei.co/npm/is-reactive-streams.png)](https://nodei.co/npm/is-reactive-streams/)

[![](https://data.jsdelivr.com/v1/package/npm/is-reactive-streams/badge)](https://www.jsdelivr.com/package/npm/is-reactive-streams)
[![HitCount](http://hits.dwyl.io/lxsmnsyc/is-reactive-streams.svg)](http://hits.dwyl.io/lxsmnsyc/is-reactive-streams)

| Platform | Build Status |
| --- | --- |
| Linux | [![Build Status](https://travis-ci.org/LXSMNSYC/is-reactive-streams.svg?branch=master)](https://travis-ci.org/LXSMNSYC/is-reactive-streams) |
| Windows | [![Build status](https://ci.appveyor.com/api/projects/status/mkjwe462uk80axx4?svg=true)](https://ci.appveyor.com/project/LXSMNSYC/is-reactive-streams) |


[![codecov](https://codecov.io/gh/LXSMNSYC/is-reactive-streams/branch/master/graph/badge.svg)](https://codecov.io/gh/LXSMNSYC/is-reactive-streams)
[![Known Vulnerabilities](https://snyk.io/test/github/LXSMNSYC/is-reactive-streams/badge.svg?targetFile=package.json)](https://snyk.io/test/github/LXSMNSYC/is-reactive-streams?targetFile=package.json)

## Usage

### Installing

#### NPM

```bash
npm i is-reactive-streams
```

#### CDN

* jsDelivr
```html
<script src="https://cdn.jsdelivr.net/npm/is-reactive-streams/dist/index.min.js"></script>
```

* unpkg
```html
<script src="https://unpkg.com/is-reactive-streams/dist/index.min.js"></script>
```

### Loading the Module

#### ESNext

```js
import { isPublisher, isSubscriber, isSubscription, isProcessor } from 'is-reactive-streams';
```

#### CommonJS

```js
const { isPublisher, isSubscriber, isSubscription, isProcessor } = require('is-reactive-streams');
```

#### Browser

A global variable declared as 'IRS' provides the 4 functions.

```js
const { isPublisher, isSubscriber, isSubscription, isProcessor } = IRS;
```

## API
## Objects

<dl>
<dt><a href="#IRS">IRS</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#isPublisher">isPublisher(publisher)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test whether an object implements the <a href="https://github.com/reactive-streams/reactive-streams-js#1-publisher-code">Publisher</a> interface.</p>
</dd>
<dt><a href="#isSubscriber">isSubscriber(subscriber)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test whether an object implements the <a href="https://github.com/reactive-streams/reactive-streams-js#2-subscriber-code">Subscriber</a> interface.</p>
</dd>
<dt><a href="#isSubscription">isSubscription(subscription)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test whether an object implements the <a href="https://github.com/reactive-streams/reactive-streams-js#3-subscription-code">Subscription</a> interface.</p>
</dd>
<dt><a href="#isProcessor">isProcessor(processor)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test whether an object implements the <a href="https://github.com/reactive-streams/reactive-streams-js#4processor-code">Processor</a> interface.</p>
</dd>
</dl>

<a name="IRS"></a>

## IRS : <code>object</code>
**Kind**: global namespace  
<a name="isPublisher"></a>

## isPublisher(publisher) ⇒ <code>boolean</code>
Test whether an object implements the [Publisher](https://github.com/reactive-streams/reactive-streams-js#1-publisher-code) interface.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| publisher | <code>object</code> | An object that is expected to implement the [Publisher](https://github.com/reactive-streams/reactive-streams-js#1-publisher-code) interface. |

<a name="isSubscriber"></a>

## isSubscriber(subscriber) ⇒ <code>boolean</code>
Test whether an object implements the [Subscriber](https://github.com/reactive-streams/reactive-streams-js#2-subscriber-code) interface.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| subscriber | <code>object</code> | An object that is expected to implement the [Subscriber](https://github.com/reactive-streams/reactive-streams-js#2-subscriber-code) interface. |

<a name="isSubscription"></a>

## isSubscription(subscription) ⇒ <code>boolean</code>
Test whether an object implements the [Subscription](https://github.com/reactive-streams/reactive-streams-js#3-subscription-code) interface.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| subscription | <code>object</code> | An object that is expected to implement the [Subscription](https://github.com/reactive-streams/reactive-streams-js#3-subscription-code) interface. |

<a name="isProcessor"></a>

## isProcessor(processor) ⇒ <code>boolean</code>
Test whether an object implements the [Processor](https://github.com/reactive-streams/reactive-streams-js#4processor-code) interface.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| processor | <code>object</code> | An ojbect that is expected to implement the [Processor](https://github.com/reactive-streams/reactive-streams-js#4processor-code) interface. |


## Build

Clone the repo first, then run the following to install the dependencies

```bash
npm install
```

To build the coverages, run the test suite, the docs, and the distributable modules:

```bash
npm run build
```