/*
Write a JavaScript function to check whether a string is blank or not. 
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
Click me to see the solution
*/

"use strict";
(function () {
    function isBlank(picked) {
        if (typeof picked === "string") {
            return !(picked);
        }
    }
    console.log(isBlank(''));
    console.log(isBlank('abc'));
})();
