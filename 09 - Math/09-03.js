/* Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 
Test Data :
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170" */
"use strict";
(function () {
    function decToBho(pickedNumber, base) {
        var bases = {
            "B": 2,
            "H": 16,
            "O": 8
        }
        if (base in bases) {
            return pickedNumber.toString(bases[base]);
        } else {
            return "There is no " + base + " in bases list";
        }
    }

    console.log(decToBho(120, 'B'));
    console.log(decToBho(120, 'H'));
    console.log(decToBho(120, 'O'));
})();
