# getFactors.js
JavaScript snippet to get factors from a non-zero integer

## Usage
> `getFactors(integer_input)`

> Example: `getFactors(8)`

## Input
> This snippet accomodates positive and negative integer (non-zero).

> It only receives one argument (input).

## Output 
> The output will be an array for both **valid** and **invalid** inputs.

> For **valid** input, for example `getFactors(8)`, the output will be `[[1, 8], [2, 4], [4,2], [8, 1]]`. Each inner array is structured to be the multiplication of factors with the index combination of the, um, them pairs. 

> For instance the output of `getFactors(8)` is `[[1, 8], [2, 4], [4,2], [8, 1]]` 

> As you can see, 1 &times; 8 = **8**, 2 &times; 4 = **8**, 4 &times; 2 = **8**, and 8 &times; 1 = **8** (the input is **8**).

> For **invalid** input, for example `getFactors(8.9)`, the output will be `[]` -- an empty array.

## Table of in-out

Usage | Output
------|--------
`getFactors(1)` (one) | `[[1, 1]]`
`getFactors(-1)` (negative one) | `[[-1, 1], [1, -1]]`
`getFactors(2)` (prime) | `[[1, 2], [2, 1]]`
`getFactors(-3)` (negative prime) | `[[-1, 3], [3, -1], [1, -3], [3, -1]]`
`getFactors(4)` (composite) | `[[1, 4], [2, 2], [4, 1]]`
`getFactors(-6)` (negative composite) | `[[-1, 6], [-2, 3], [-3, 2], [-6, 1], [1, -6], [2, -3], [3, -2], [6, -1]]`
`getFactors([15])` (invalid input) | `[]`
`getFactors(40.5)` (invalid input) | `[]`
`getFactors("b")` (invalid input) | `[]`
