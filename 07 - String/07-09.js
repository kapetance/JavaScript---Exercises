/*
Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
*/
"use strict";
(function () {
    function capitalizeWord(pickedString) {
        function firstLetter(word) {
            return word[0].toUpperCase() + word.slice(1);
        }

        pickedString = pickedString.split(" ");
        return pickedString.map(function (x) {
            return firstLetter(x);
        }).join(" ");
    }
    console.log(capitalizeWord('js string exercises'));
})();
