/*
Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

"use strict";
(function () {
    function exponent(number, exp) {
        if (exp === 0) {
            return 1;
        } else if (exp === 1) {
            return number;
        } else {
            return number * exponent(number, exp - 1);
        }
    }
    console.log(exponent(3,6));
})();