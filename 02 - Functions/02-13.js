/*
Write a JavaScript function to compute the factors of a positive integer.
*/
"use strict";
(function () {
    function factors(pickedNumber) {
        var factorList = [];
        while (pickedNumber > 1) {
            for (var x = 2; x <= pickedNumber;x++) {
                if (pickedNumber%x === 0) {
                    pickedNumber/=x;
                    factorList.push(x);
                    break;
                }
            }
        }
        return factorList;
    }
    console.log(factors(100));
})();