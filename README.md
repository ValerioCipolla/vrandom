# vrandom

![](https://img.shields.io/github/issues/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/forks/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/stars/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/license/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/badge/test--coverage-100%25-brightgreen?style=flat-square)

An easy-to-use library to make your life easier when working with random numbers or random choices in javascript.

# Table of contents

- [Installation & Usage](#installation--usage)
- [Tests](#tests)
- [Docs](#docs)
- [Creators & Contributors](#creators--contributors)

# Installation & Usage

Install the package with npm

```js
npm i vrandom
```

Import the package where you need it (both commonjs and module syntax supported)

```js
import vrandom from "vrandom";
```

or

```js
const vrandom = require("vrandom");
```

Use the function you need by accessing it through the vrandom object

```js
vrandom.flip();
```

# Tests

The library is fully tested. If you are contributing and you are creating a new feature please add tests to it.

There is a CI workflow set-up that runs on every pull-request, so if tests fail it will be impossible to merge the PR.

If you want to see the tests running:

1. Clone the repo locally
2. Install dependencies

```js
npm i
```

3. Install jest as a dev dependency

```js
npm i -D jest
```

4. run tests

```js
npm t
```

# Docs

- [flip](#flip)
- [int](#int)
- [float](#float)
- [pick](#pick)
- [pickFromStr](#pickfromstr)
- [shuffle](#shuffle)

## flip

Usage:

```js
vrandom.flip();

// possible output: true
```

It doesn't take any arguments, it returns true 50% of the time and false 50% of the time.

## int

Usage:

```js
vrandom.int(min, max);
```

It takes two arguments, min and max

The two arguments both HAVE to be integers and max HAS to be greater than min, or it will throw an error.

It returns a random integer between min and max - min INCLUDED, max EXCLUDED

Example:

```js
vrandom.int(1, 10);

// possible output: 4
```

Will return a random integer between 1 (included) and 10 (not-included)

## float

Usage:

```js
vrandom.float(min, max, decimals);
```

It takes 2 arguments, plus 1 optional argument if only two arguments are provided the third argument defaults to 2.

The first and second arguments have to be numbers (floats or ints) the third argument has to be an integer.

The function will return a random floating point number between min and max - min INCLUDED, max EXCLUDED. The returned floating point number will have a maximum of 2 decimal places if no third argument is specified.

If a third argument is passed, that will be the maximum number of decimals that the returned floating point number will have. Maximum of 15.

Note: the returned floating point number might have LESS decimals than the number specified but not more.

The function will return an error if: less than 2 arguments are passed, the third argument is greater than 15 or less than 0, if min is greater or equal to max, the third argument is not an integer.

Example:

```js
vrandom.float(0, 10, 5);
// possible output: 0.47185
```

## pick

Usage:

```js
vrandom.pick(array);
```

It takes one argument, and it HAS to be an array, if not it will throw an error.

It will return a random element from that array.

Example:

```js
const arr = [1, 2, 3, 4, "hello", "world", true, false];
vrandom.pick(arr);

// possible output: 1
```

Will return a random element from the array 'arr'

## pickFromStr

Usage:

```js
vrandom.pickFromStr(string);
```

Same as pick, but it takes a string as an argument and returns a random character from that string.

Takes 1 argument, and it needs to be a string, or it will throw an error.

If provided string is empty, it will return an empty string.

Example:

```js
const string = "hello";
vrandom.pickFromStr(string);

// possible output: "e"
```

Returns random character from a string.

## shuffle

Usage:

```js
vrandom.shuffle(array);
```

It takes one argument, and it HAS to be an array.

It will make a shallow copy of the provided array, and return a new array with the same elements as the provided array, but in (possibly) a different order, every element is shuffled and is assigned a new position (the initial position of the element is included in the possible positions where the element ends up). The original array remains unchanged.

Example:

```js
const arr = [1, 2, "hello", "world", true, false];
vrandom.shuffle(arr);

// possible output: [1, "hello", true, false, 2, "world"]

console.log(arr); // [1, 2, "hello", "world", true, false]
```

# Creators & Contributors

- [Valerio Cipolla](https://github.com/ValerioCipolla/)
- [kennarddh](https://github.com/kennarddh)
- [crayola-eater](https://github.com/crayola-eater)
