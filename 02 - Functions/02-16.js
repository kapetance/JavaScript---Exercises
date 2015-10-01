/*
Write a JavaScript function to extract unique characters from a string.
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/
"use strict";
(function () {
    function unique(pickedString) {
        var outputString = "";

        function checkLetter(letter) {
            for (var i = 0; i < outputString.length; i++) {
                if (letter === outputString.charAt(i)) {
                    return true;
                }
            }
            return false;
        }
        for (var i = 0; i < pickedString.length; i++) {
            if (!checkLetter(pickedString.charAt(i))) {
                outputString = outputString + pickedString.charAt(i);
            };
        }
        console.log(outputString);
    }
    return unique;
})()("thequickbrownfoxjumpsoverthelazydog");