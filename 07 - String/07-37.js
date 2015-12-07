/*
Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. 
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
*/

"use strict";
(function () {
    function compareStrings(firstString, secondString) {
        return firstString.toLowerCase() === secondString.toLowerCase();
    }
    
    console.log(compareStrings('abcd', 'AbcD'));
    console.log(compareStrings('ABCD', 'Abce'));
})();
