/*
Write a JavaScript function that can pad (left, right) a string to get to a determined length. 
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"
*/
"use strict";
(function () {
    function formatedString(totalLength, pickedNumber, padDirection) {
        pickedNumber = String(pickedNumber);
        while (pickedNumber.length < totalLength.length) {
            if (padDirection === "l") {
                pickedNumber = "0" + pickedNumber;
            } else {
                pickedNumber += "0";
            }
        }
        return pickedNumber;
    }
    console.log(formatedString('0000', 123, 'l'));
    console.log(formatedString('00000000', 123, ''));
})();

(function () {
    function formatedString(zeros, pickedNumber, padDirection) {
        pickedNumber = "" + pickedNumber;
        zeros = zeros.slice(0, zeros.length - pickedNumber.length);
        return padDirection === "l" ? zeros + pickedNumber : pickedNumber + zeros;
    }
    console.log(formatedString('0000', 123, 'l'));
    console.log(formatedString('00000000', 123, ''));
})();
