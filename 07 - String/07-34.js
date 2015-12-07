/*
Write a JavaScript function to convert a string to title case. 
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
*/

"use strict";
(function () {
    function sentenceCase(pickedString) {
        function firstLetter(word) {
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        }

        pickedString = pickedString.split(" ");
        return pickedString.map(function (x) {
            return firstLetter(x);
        }).join(" ");
    }
    console.log(sentenceCase("PHP exercises. python exercises."));
})();
