/*
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/
"use strict";
(function () {
    function wordMaker(word) {
        for (var i = 0; i < word.length; i++) {
            for (var j = i; j <= word.length; j++) {
                console.log(word.slice(i, j));
            }
        }
    }
    return wordMaker;
})()("mile");