/*  Write a JavaScript function to find out if a number is a natural number or not. 
Note :
Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
No negative numbers and no fractions.
Test Data :
console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10/0));
Output :
false
true
false
false */
"use strict";
(function () {
    function isNatural(pickedNumber) {
        return pickedNumber > 0 &&
            pickedNumber === Math.round(pickedNumber) &&
            isFinite(pickedNumber);
    }
    console.log(isNatural(-15));
    console.log(isNatural(1));
    console.log(isNatural(10.22));
    console.log(isNatural(10 / 0));
})();