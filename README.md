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

* `head(arr)`: Takes the first value out of an array
* `tail(arr)`: Takes all values except the first one out of an array
* `middle(array)`: Takes a middle value out of an array
* `countLetters(lettersToCount)` : Counts letters in a string
* `countOnly(allItems, itemsToCount)` : Counts the keys that you need in an object
* `findKey(object, callback)` : Finds a key that you need in an object
* `findKeyByValue(tvObject, tvShow)` : Finds a key in an object by value
* `flatten(array)` : Flattens multiple arrays that are within each other into one array
* `letterPosition(newSentence)` : Finds a letter position in a string
* `map(array, callback)` : Creates a new array with your function on how you want to change an array
* `takeUntil(array, callback)` : Takes items out of an object until you want it to stop
* `without(source, itemsToRemove)` : Makes a new array without a specific element
* `eqArrays(arr1, arr2)` : Checks if two arrays have the same value
* `eqObjects(object1, object2)` : Checks if two objects have the same value