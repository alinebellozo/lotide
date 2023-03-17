# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abellozo/lotide`

**Require it:**

`const _ = require('@abellozo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of an array
* `tail(...)`: returns the elements of an array, except the first (index 0)
* `middle(...)`: returns the middle element of an array
* `assertArraysEqual(...)`: checks if two arrays are equals
* `assertEqual(...)`: checks if two values are equals
* `assertObjectsEqual(...)`: checks if two objects are equals
* `countLetters(...)`: returns a count of each letter in the sentence
* `countOnly(...)`: returns counts for a specific subset of the items given
* `eqArrays(...)`: compares two arrays
* `eqObjects(...)`: compares two objects
* `findKey(...)`: scans the object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: scans the object and returns the first key which contains the given value
* `flatten(...)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `letterPositions(...)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(...)`: returns a new array based on the results of the callback function
* `takeUntil(...)`: returns a slice of the array with elements taken from the beginning
* `without(...)`: returns a subset of a given array, removing unwanted elements