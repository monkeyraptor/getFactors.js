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

> For **valid** input, for example `getFactors(8)`, the output will be `[[1, 8], [2, 4], [4,2], [8, 1]]`. Each inner array is structured to be the multiplication of factors with no repeatition. 

> For instance the output of `getFactors(8)` is `[[1, 8], [2, 4], [4,2], [8, 1]]` 

> As you can see, 1 &times; 8 = **8**, 2 &times; 4 = **8**, 4 &times; 2 = **8**, and 8 &times; 1 = **8** (the input is **8**).

> For **invalid** input, for example `getFactors(8.9)`, the output will be `[]` -- an empty array.

## Table of in-out

Usage | Output
------|--------
`getFactors(3)` (prime) | `[[1, 3], [3, 1]]`
`getFactors(-3)` (negative prime) | `[[-1, 3], [3, -1], [1, -3], [3, -1]]`
`getFactors(4)` (composite) | `[[1, 4], [2, 2], [4, 1]]`
`getFactors(-4)` (negative composite) | `[[-1, 4], [-2, 2], [-4, 1], [1, -4], [2, -2], [4, -1]]`
`getFactors([4])` (invalid input) | `[]`
`getFactors(4.5)` (invalid input) | `[]`
`getFactors("b")` (invalid input) | `[]`
