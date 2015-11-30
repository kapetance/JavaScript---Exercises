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
        return pickedArray.slice();
    }
    console.log(cloneIt([1, 2, 4, 0]));
    console.log(cloneIt([1, 2, [4, 0]]));
})()
