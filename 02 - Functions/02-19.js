/*
Write a JavaScript function that returns array elements larger than a number.
*/

"use strict";
(function () {
    function largerThan(pickedArray, pickedNumber) {
        return pickedArray.filter(function (value) {
            return value > pickedNumber;
        });
    }

    var numbers = [2, 5, 23, 56, 0, 34, 11, 22, 98];
    console.log(largerThan(numbers, 3));
})();