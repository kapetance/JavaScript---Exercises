/*
 Write a JavaScript function check if a string ends with specified suffix. 
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
*/
"use strict";
(function () {
    function stringEnds(pickedString, suffix) {
        return pickedString.slice(-suffix.length) === suffix;
    }
    console.log(stringEnds('JS PHP PYTHON', 'PYTHON'));
    console.log(stringEnds('JS PHP PYTHON', ''));
})();
