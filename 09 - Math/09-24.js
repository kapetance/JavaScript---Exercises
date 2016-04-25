/*  Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any). 
Test Data :
var a = -4.55555;
console.log(result);
-4.5556
var a = 5.0001000;
console.log(result);
5.0001 */
"use strict";
(function () {
    function roundFloat(pickedNumber, digitsNumber) {
        return pickedNumber.toFixed(digitsNumber);
    }

    console.log(roundFloat(-4.55555, 4))
    console.log(roundFloat(5.000100, 4))
})();