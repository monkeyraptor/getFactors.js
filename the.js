function getFactors(a) {
    "use strict";
    // -----------------------------------------------
    var primeTest = function (b) { // primality test
        var limit = Math.floor(Math.sqrt(b));
        var mod = 2; // modulus lower limit
        var primeOrNot = 1;
        while (mod <= limit) {
            if (b % mod === 0) {
                primeOrNot = 0; // composite
                break;
            }
            mod += 1;
        }
        return primeOrNot;
    };
    // -----------------------------------------------
    var ne = function (c) { // to convert positive to negative
        return (-1 * c);
    };
    // -----------------------------------------------
    // for handling standard (positive) integer
    var result = [];
    var i;
    var div;
    // -----------------------------------------------
    // for handling negative integer
    var sign = 0; // negative flag
    var resultSign = [];
    // -----------------------------------------------
    // cultivating factors
    // >> input must be integer number type (non zero) and below 1,000,000,000 (1 billion)
    if (typeof a === "number" && a % 1 === 0 && a !== 0 && a < 1e9) {
        if (a < 0) { // negative number input
            sign = 1; // negative flag is on
            a = Math.abs(a);
        }
        if (primeTest(a)) { // prime input
            if (!sign) { // positive prime input                
                result = [[1, a], [ne(1), ne(a)]];
            } else { // negative prime input
                if (a !== 1) {
                    result = [[ne(1), a], [ne(a), 1]];
                } else {
                    result = [[-1, 1]];
                }
            }
        } else { // composite
            i = a;
            while (i > 0) { // backward loop
                if (a % i === 0) {
                    div = a / i;
                    if (!sign) { // positive composite input
                        result.push([div, i]);
                        resultSign.push([ne(div), ne(i)]);
                    } else { // negative composite input
                        resultSign.push([ne(div), i]);
                    }
                }
                i -= 1; // backward loop
            }
            if (sign) { // negative composite input
                result = resultSign;
            } else {
                result = result.concat(resultSign);
            }
        }
    }
    // -----------------------------------------------
    return result;
}
