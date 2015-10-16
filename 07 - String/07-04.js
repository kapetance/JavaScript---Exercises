/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/
"use strict";
(function () {
    function truncateString(pickedString, numberOfChars) {
        return pickedString.substr(0, numberOfChars);
    }
    console.log(truncateString("Robin Singh", 4));
})();
