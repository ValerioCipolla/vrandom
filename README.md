# vrandom

An easy-to-use library to make your life easier when working with random numbers or random choices in javascript.

# Download & Usage
Download the package from npm 

```
npm i vrandom
```

Import the package where you need it 

```
import vrandom from "vrandom" 
```

Use the function you need by accessing it through the vrandom object

``` 
vrandom.coinFlip() 
```

# Docs
- [coinFlip](#coinflip)
- [randInt](#randint)
- [pick](#pick)

## coinFlip
Usage: 

```
vrandom.coinFlip()
```

It doesn't take any arguments, it returns true 50% of the time and false 50% of the time.


## randInt

Usage:

```
vrandom.randInt(min, max)
```

It takes two arguments, min and max

The two arguments both HAVE to be integers and max HAS to be greater than min, or it will throw an error.

It returns a random integer between min an max - min INCLUDED, max EXCLUDED

Example:
``` 
vrandom.randInt(1, 10)
```
Will return a random integer between 1 (included) and 10 (not-included)


## pick

Usage:
```
vrandom.pick(array)
```
It takes one argument, and it HAS to be an array, if not it will throw an error.

It will return a random element from that array.

Example:

``` 
const arr = [1, 2, 3, 4, "hello", "world", true, false]
vrandom.pick(arr)
```

Will return a random element from the array 'arr'


