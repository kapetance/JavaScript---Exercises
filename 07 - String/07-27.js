/*
Write a JavaScript function to convert ASCII to Hexadecimal format. 
Test Data :
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
Output :
"3132"
"313030"
*/
"use strict";
(function () {
    function asciiToHex(pickedNumber) {
        return pickedNumber.split("").map(function (i) {
            return i.charCodeAt(0).toString(16);
        }).join("");
    }
    console.log(asciiToHex("12"));
    console.log(asciiToHex("100"));
})();

console.log()
