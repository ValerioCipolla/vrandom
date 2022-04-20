# vrandom

![](https://img.shields.io/github/issues/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/forks/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/stars/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/github/license/ValerioCipolla/vrandom?style=flat-square)
![](https://img.shields.io/badge/test--coverage-100%25-brightgreen?style=flat-square)
![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)

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
We use standardjs to keep the formatting of the code uniform across all files. 
Every time the tests are run, the format check is run as well with the command `npx standard`. If you are trying to run the tests but it's not working, it might be because the files aren't formatted correctly. To format the files following the standard format please run 
```
npx standard --fix
```
and try running `npm t` again.

There is a CI workflow set-up that runs on every pull-request, so if tests fail it will be impossible to merge the PR.

If you want to see the tests running:

1. Clone the repo locally
2. Install dependencies

```js
npm i
```

3. run tests and format check

```js
npm t
```

4. run tests and see test coverage

```js
npm run test-coverage
```

# Docs

- [flip](#flip)
- [int](#int)
- [float](#float)
- [pick](#pick)
- [pickFromStr](#pickfromstr)
- [shuffle](#shuffle)
- [string](#string)
- [words](#words)
- [letter](#letter)
- [uppercaseLetter](#uppercaseLetter)
- [lowercaseLetter](#lowercaseLetter)

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
vrandom.int(min, max, ?inclusive = true);
```

It takes three arguments: min, max and inclusive

If no third argument is provided inclusive defaults to true.

The first two arguments both HAVE to be integers and max HAS to be greater than min, or it will throw an error.

It returns a random integer between min and max - min and max included IF inclusive is set to true (or not provided).

It returns a random integer between min and max - max excluded IF inclusive is set to false.

Example:

```js
vrandom.int(1, 10);
// will return an integer between 1 and 10 - 10 included
// possible output: 10
```

```js
vrandom.int(1, 10, false);
// will return an integer between 1 and 10 - 10 NOT included
// possible output: 9
// non-possible output: 10
```

## float

Usage:

```js
vrandom.float(min, max, ?decimals = 2);
```

It takes 2 arguments, plus 1 optional argument if only two arguments are provided the third argument defaults to 2.

The first and second arguments have to be numbers (floats or ints) the third argument has to be an integer.

The function will return a random floating point number between min and max - min and max INCLUDED. The returned floating point number will have a maximum of 2 decimal places if no third argument is specified.

If a third argument is passed, that will be the maximum number of decimals that the returned floating point number will have. Maximum of 15.

Note: the returned floating point number might have LESS decimals than the number specified but not more.

The function will return an error if: less than 2 arguments are passed, the third argument is greater than 15 or less than 0, if min is greater or equal to max, the third argument is not an integer.

Example:

```js
vrandom.float(0.5, 10.1, 5);
// possible output: 2.47185
// possible output: 10.1
// possible output: 0.5427
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

## string

Usage:

```js
vrandom.string(size, ?charset = "alphanumeric");
```

It takes 2 arguments.
First argument is the length of the desired output. It needs to be an integer greater than 0, or it will throw an error.
Second argument is a string representing the type of charset that should be used to generate output. At the moment there is only 2 possible values:

- "alphanumeric" [0-9a-zA-Z]
- "alphabetic" [a-zA-Z]

If the second argument is omitted it will default to "alphanumeric".

Example:

```js
vrandom.string(5);
// possible output: "Zd5r3"

vrandom.string(5, "alphanumeric");
// possible output: "1zZ3L"

vrandom.string(5, "alphabetic");
// possible output: "LzkAm"
// non-possible output: "1oLL4"
```

## words

Usage:

```js
vrandom.words(size, ?format = "lowercase")
```

Takes 2 arguments, it return an array of random words.

First argument is the size of the array that will be returned (the number of random words in the output). It needs to be a positive integer, or it will throw an error.

Second argument is optional (it will default to "lowercase" if not passed in).
It's the desired format of the individual strings in the returned array.
At the moment there is possible options:

- "lowercase"
- "uppercase"
- "capitalized"

If the second argument is passed in, but it doesn't match any of the possible options, it will throw an error.

Example:

```js
vrandom.words(5);
// possible output: ["ability", "main", "farm", "took", "current"]

vrandom.words(5, "lowercase");
// possible output: ["ability", "main", "farm", "took", "current"]

vrandom.words(5, "uppercase");
// possible output: ["ABILITY", "MAIN", "FARM", "TOOK", "CURRENT"]

vrandom.words(5, "capitalized");
// possible output: ["Ability", "Main", "Farm", "Took", "Current"]
```

## letter

Usage:

```js
vrandom.letter();
```

It doesn't take any arguments, it returns a random letter from the english alphabet.
The returned letter can be lowercase OR uppercase.

Example:

```js
vrandom.letter();
// possible output: "a"
// possible output: "A"
// possible output: "m"
// possible output: "Z"
```

## uppercaseLetter

Usage:

```js
vrandom.uppercaseLetter();
```

It doesn't take any arguments, it returns a random uppercase letter from the english alphabet.

Example:

```js
vrandom.uppercaseLetter();
// possible output: "A"
// possible output: "M"
// possible output: "Z"
```

## lowercaseLetter

Usage:

```js
vrandom.lowercaseLetter();
```

It doesn't take any arguments, it returns a random lowercase letter from the english alphabet.

Example:

```js
vrandom.lowercaseLetter();
// possible output: "a"
// possible output: "m"
// possible output: "z"
```

# Creators & Contributors

- [Valerio Cipolla](https://github.com/ValerioCipolla/)
- [kennarddh](https://github.com/kennarddh)
- [crayola-eater](https://github.com/crayola-eater)
