/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/
"use strict";
(function () {
    function swapcase(pickedString) {
        pickedString = pickedString.split("");
        var finalString = pickedString.map(function (x) {
            if (x.toLowerCase() === x) {
                return x.toUpperCase();
            } else {
                return x.toLowerCase();
            }
        });
        return finalString.join("");
    }
    console.log(swapcase('AaBbc'));
})();
