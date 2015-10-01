/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
"use strict";
(function () {
    function greLow(sampleArray) {
        sampleArray = sampleArray.sort(function (a, b) {
            return a - b;
        });
        console.log(sampleArray[1] + "," + sampleArray[sampleArray.length - 2]);
    }
    return greLow;
})()([25, 63, 1, -96, 0, 35]);