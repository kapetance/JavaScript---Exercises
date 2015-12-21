/*
Write a JavaScript function to repeat a string a specified times. 
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
*/
"use strict";
(function () {
    function repeatString(pickedString, numberRepeats) {
        if (numberRepeats) {
            var final = "";
            for (var x = 0; x < numberRepeats; x++) {
                final += pickedString;
            }
            return final;
        } else {
            return "Error in string or count.";
        }
    }
    console.log(repeatString('a', 4));
    console.log(repeatString('a'));
})();
