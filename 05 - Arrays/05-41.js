/*
Write a JavaScript function to generate an array between two integers of 1 step length.

Test Data :
console.log(rangeBetwee(4, 7)); 
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

"use strict";
(function () {
    function rangeBetween(firstNumber, secondNumber) {
        var finalArray = [];
        for (var x = firstNumber; x <= secondNumber; x++) {
            finalArray.push(x);
        }
        return finalArray;
    }

    console.log(rangeBetween(4, 7));
    console.log(rangeBetween(-4, 7));

})();
