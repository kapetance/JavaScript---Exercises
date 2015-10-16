/*
 Write a JavaScript function to check whether an `input` is a string or not. 
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
*/
"use strict";
(function () {
    function isString(picked) {
        return typeof picked === "string";
    }

    console.log(isString('w3resource'));
    console.log(isString(''));
    console.log(isString([1, 2, 4, 0]));
    console.log(isString(null));
    console.log(isString(undefined));
    console.log(isString(/asd/));

})();
