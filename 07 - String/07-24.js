/*
Write a JavaScript function to truncate a string to a certain number of words. 
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
*/
"use strict";
(function () {
    function truncate(pickedString, wordsNumber) {
        return pickedString.split(" ").splice(0, wordsNumber).join(" ");
    }

    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
})();
