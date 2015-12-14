/*
Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. 
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
*/
"use strict";
(function () {
    function removeOccurrence(pickedString, pickedPart) {
        return pickedString.split(" ").filter(function (i) {
            return i !== pickedPart;
        }).join(" ");
    }
    console.log(removeOccurrence("The quick brown fox jumps over the lazy dog", 'the'));
})();
