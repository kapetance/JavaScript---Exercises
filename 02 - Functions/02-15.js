/*
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
*/
"use strict";
(function (b, n) {
    function expon(b, n) {
        if (n === 1) {
            return b;
        } else {
            return b * expon(b, n - 1);
        }
    }
    console.log(expon(b, n));
})(3, 3);