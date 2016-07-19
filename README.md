# getFactors.js
JavaScript snippet to get (real number -- positive and negative) factors from a non-zero integer

## Usage
> `getFactors(integer_input)`

> Example: `getFactors(8)`

## Input
> This snippet accomodates positive and negative integer (non-zero) under (absolute) 1 billion (-1,000,000,000 or 1,000,000,000).

> It only receives one argument (input).

> It does not have the imaginary handler. For instance the i &times; i = -1. It's *not included* in this.

## Output 
> The output will be an array for both **valid** and **invalid** inputs.

> For **valid** input, for example `getFactors(8)`, the output will be `[[1, 8], [2, 4], [-1, -8], [-2, -4]]`. Each inner array is structured to be the multiplication of the factors pair.

> Child array(s) with same elements (reversed order) with the other child array(s) is (are) filtered (commutative property of multiplication). For example [[2, 4], [4, 2]] is filtered to be just [[2, 4]].

> Live example output of `getFactors(8)` is `[[1, 8], [2, 4], [-1, -8], [-2, -4]]` 

> As you can see, 1 &times; 8 = **8**, 2 &times; 4 = **8**, -1 &times; -8 = **8**, -2 &times; -4 = **8** (the input is **8**).

> For **invalid** input, for example `getFactors(8.9)`, the output will be `[]` -- an empty array.

## Table of in-out

Usage | Output
------|--------
`getFactors(1)` (one) | `[[1, 1], [-1, -1]]`
`getFactors(-1)` (negative one) | `[[-1, 1]]`
`getFactors(2)` (prime) | `[[1, 2], [-1, -2]]`
`getFactors(-3)` (negative prime) | `[[-1, 3], [-3, 1]]`
`getFactors(4)` (composite) | `[[1, 4], [2, 2], [-1, -4], [-2, -2]]`
`getFactors(-6)` (negative composite) | `[[-1, 6], [-2, 3], [-3, 2], [-6, 1]]`
`getFactors([15])` (invalid input) | `[]`
`getFactors(40.5)` (invalid input) | `[]`
`getFactors("b")` (invalid input) | `[]`
`getFactors(0)` (invalid input) | `[]`


## With interface
> Go to <a href="http://portraptor.johanpaul.net/2015/09/priotizaer-prime-factorization-er.html">Port Raptor - Priotizaer</a>. Priotizaer is a bit different than this basic concept. Priotizaer is also equipped with **primes grouping** and it produces **only** the positive factors. But the first factoring (branching division) idea is pretty similar to this -- the coding path is a bit different.
