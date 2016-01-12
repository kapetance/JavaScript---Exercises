/* Write a JavaScript function to convert a binary number to a decimal number. 
Test Data :
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));
51
4 */
"use strict";
(function () {
    function binToDec(pickedNumber) {
        return parseInt(pickedNumber, 2);
    }

    console.log(binToDec("110011"));
    console.log(binToDec("100"));
})();
