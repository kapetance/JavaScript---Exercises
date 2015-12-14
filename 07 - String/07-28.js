/*
Write a JavaScript function to convert Hexadecimal to ASCII format. 
Test Data :
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
Output :
"12"
"100"
*/
"use strict";
(function () {
    function hexToAscii(pickedAscii) {
        var asciiArray = [];
        for (var x = 0; x < pickedAscii.length / 2; x++) {
            asciiArray.push(parseInt(pickedAscii.slice(2 * x, 2 * x + 2), 16));
        }
        return String.fromCharCode.apply(null, asciiArray);
    }
    console.log(hexToAscii('3132'));
    console.log(hexToAscii('313030'));
})();
