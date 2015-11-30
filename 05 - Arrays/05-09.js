/*
Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

"use strict";

(function () {
    function converter(pickedString) {
        return pickedString.split("").map(function (letter) {
            if (letter === letter.toUpperCase()) {
                letter = letter.toLowerCase();
            } else if (letter === letter.toLowerCase()) {
                letter = letter.toUpperCase();
            }
            return letter;
        }).join("");
    }
    console.log(converter('The Quick Brown Fox'));
})();
