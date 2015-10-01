/*
Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. 

Test Data : 
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
*/
"use strict";
(function () {
    function numStringLength(startPos, endPos, steps) {
        var abc = "abcdefghijklmnopqrstuvwxyz";
        var finalArray = [];
        if (!isNaN(startPos) && !isNaN(endPos)) {
            for (var x = startPos; x <= endPos; x += steps) {
                finalArray.push(x);
            }
        } else if (isNaN(startPos) && isNaN(endPos)) {
            for (var x = abc.indexOf(startPos); x <= abc.indexOf(endPos); x += steps) {
                finalArray.push(abc.charAt(x));
            }
        } else {
            return "Incorect data entered";
        }
        return finalArray;
    }
    console.log(numStringLength("a", "z", 2));
    console.log(numStringLength(1, 100, 3));
})();
