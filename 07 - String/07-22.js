/*
Write a JavaScript function to get a part of a string after a specified character.
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
*/
"use strict";
(function () {
    function subStrAfterChars(pickedString, breakPoint, n) {
        if (n === "a") {
            return pickedString.substr(0, pickedString.indexOf(breakPoint));
        } else if (n === "b") {
            return pickedString.substr(pickedString.indexOf(breakPoint)+1);
        } else {
            return pickedString;
        }
    }
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
    console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));
})();
