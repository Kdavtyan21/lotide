# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karendavtyan21/lotide`

**Require it:**

`const _ = require('@karendavtyan21/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Takes the first value out of an array
* `tail`: Takes all values except the first one out of an array
* `middle`: Takes a middle value out of an array
* `countLetters` : Counts letters in a string
* `countOnly` : Counts the keys that you need in an object
* `findKey` : Finds a key that you need in an object
* `findKeyByValue` : Finds a key in an object by value
* `flatten` : Flattens multiple arrays that are within each other into one array
* `letterPosition` : Finds a letter position in a string
* `map` : Creates a new array with your function on how you want to change an array
* `takeUntil` : Takes items out of an object until you want it to stop
* `without` : Makes a new array without a specific element