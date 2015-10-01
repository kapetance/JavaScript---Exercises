/*
Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/
"use strict";
(function () {
    function is_Array() {
        return Array.isArray(this);
    }

    console.log(is_Array.call('w3resource'));
    console.log(is_Array.call([1, 2, 4, 0]));
    console.log(is_Array.call(null));
    console.log(is_Array.call(undefined));
})();