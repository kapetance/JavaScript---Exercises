/*
 Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
*/

"use strict";
(function () {
    function camelize(pickedString) {
        return pickedString.split(" ").map(function (word) {
            return word.charAt(0).toLocaleUpperCase() + word.slice(1);
        }).join("");
    }

    console.log(camelize("JavaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("JavaScriptExercises"));
})();
