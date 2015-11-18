/* Write a JavaScript function to format a number up to specified decimal places. 
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00" */
"use strict";
(function () {
    function decimals(pickedNumber, decimalPaces) {
        return pickedNumber.toFixed(decimalPaces);
    }

    console.log(decimals(2.100212, 2));
    console.log(decimals(2.100212, 3));
    console.log(decimals(2100, 2));
})();
