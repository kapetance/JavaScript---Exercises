/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/
"use strict";
(function () {
    function wordContained(pickedString, pickedLetter) {
        var counted = 0;
        for (var i = 0; i < pickedString.length; i++) {
            if (pickedLetter === pickedString.charAt(i)) {
                counted++;
            }
        }
        console.log(counted);
    }
    return wordContained;
})()("w3resource.com", "o");