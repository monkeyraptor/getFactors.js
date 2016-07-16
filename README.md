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

> For **valid** input, for example `getFactors(8)`, the output will be `[[1, 8], [2, 4], [4,2]]`. Each inner array is structured to be the multiplication of factors. 

> For instance the output of `getFactors(8)` is `[[1, 8], [2, 4], [4,2]]` 

> As you can see, 1 &times; 8 = **8**, 2 &times; 4 = **8**, and 4 &times; 2 = **8** (the input is **8**).

> For **invalid** input, for example `getFactors(8.9)`, the output will be `[]` -- an empty array.
