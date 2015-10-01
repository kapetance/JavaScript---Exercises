/*
 Write a JavaScript function to find an array contains a specific element.

Test data :
console.log(contain([2, 5, 9, 6], 5));
true
*/

"use strict";
(function () {
    function contain(pickedArray, pickedNumber) {
        return !!pickedArray.indexOf(pickedNumber);
    }
    console.log(contain([2, 5, 9, 6], 5));
    
})();