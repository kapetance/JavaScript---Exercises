/*
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

"use strict";
(function () {
    function cloneIt(pickedArray) {
        var clonedArray = [];
        for (var x = 0; x < pickedArray.length; x++) {
            clonedArray.push(pickedArray[x]);
        }
        return clonedArray;
    }
    console.log([1, 2, 4, 0]);
    console.log([1, 2, [4, 0]]);
})();