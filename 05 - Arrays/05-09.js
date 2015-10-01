/*
Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

"use strict";
(function () {
    function converter(pickedString) {
        var arrayedString = pickedString.split("");
        for (var x = 0; x < arrayedString.length; x++) {
            (function () {
                var letter = arrayedString[x];
                if (letter === letter.toUpperCase()) {
                    letter = letter.toLowerCase();
                } else if (letter === letter.toLowerCase()) {
                    letter = letter.toUpperCase();
                }
                arrayedString[x] = letter;
            })();
        }
        arrayedString = arrayedString.join("");
        console.log(arrayedString);
    }
    return converter;
})()('The Quick Brown Fox');