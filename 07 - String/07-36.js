/*
Write a JavaScript function to create a Zerofilled value with optional +, - sign. 
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
*/

"use strict";
(function () {
    function zeroFill(pickedNumber, pickedLength, optionalSign) {
        pickedNumber = pickedNumber.toString(10);
        while (pickedNumber.length < pickedLength) {
            pickedNumber = "0" + pickedNumber;
        }
        return (optionalSign || "") + pickedNumber;
    }

    console.log(zeroFill(120, 5, '-'));
    console.log(zeroFill(29, 4));

})();
