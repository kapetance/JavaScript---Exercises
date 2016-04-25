/* Write a JavaScript function to check whether a value is an integer or not. 
Note : Integer - A number which is not a fraction; a whole number.
Test Data :
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
Output :
true
true
false
false
true */
"use strict";
(function () {
    function isInt(pickedNumber) {
        return typeof pickedNumber === "number" &&
            Math.round(pickedNumber) === pickedNumber;
    }
    console.log(isInt(23));
    console.log(isInt(4e2));
    console.log(isInt(NaN));
    console.log(isInt(23.75));
    console.log(isInt(-23));
})();