/*Write a JavaScript function to check to check whether a variable is numeric or not. 
Test Data :
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
Output :
true
false
true
false
true
true  */
"use strict";
(function () {
    function isNumeric(pickedNumber) {
        return !isNaN(parseFloat(pickedNumber));
    }

    console.log(isNumeric(12));
    console.log(isNumeric('abcd'));
    console.log(isNumeric('12'));
    console.log(isNumeric(' '));
    console.log(isNumeric(1.20));
    console.log(isNumeric(-200));
})();