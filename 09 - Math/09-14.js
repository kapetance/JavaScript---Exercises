/* Write a JavaScript function to round a number to a given decimal places. 
Test Data :
console.log(precise_round(12.375,2));
console.log(precise_round(12.37499,2));
console.log(precise_round(-10.3079499, 3));
Output :
"12.38"
"12.37"
"-10.308" */
"use strict";
(function () {
    function preciseRound(pickedNumber, decimalPlaces) {
        return pickedNumber.toFixed(decimalPlaces);
    }

    console.log(preciseRound(12.375, 2));
    console.log(preciseRound(12.37499, 2));
    console.log(preciseRound(-10.3079499, 3));
})();