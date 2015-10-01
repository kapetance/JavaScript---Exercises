/*
Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
*/

"use strict";
(function () {
    function gcd(a, b) {
        var gcdNumber = 1;
        for (var x = 1; x <= a && x <= b; x++) {
            if (a % x === 0 && b % x === 0) {
                gcdNumber = x;
            }
        }
        console.log("GCD is: " + gcdNumber);
    }
    return gcd;
})()(37, 150);