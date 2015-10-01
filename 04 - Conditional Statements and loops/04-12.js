/*
Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/
"use strict";
(function () {
    var sumOfMultiples = 0;
    for (var i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumOfMultiples = sumOfMultiples + i;
        }
    }
    console.log(sumOfMultiples);
})();