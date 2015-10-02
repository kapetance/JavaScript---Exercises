/*
Write a JavaScript function to create a specified number of elements with pre-filled string value array. 

Test Data :
console.log(array_filled(3, 'default value')); 
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]

*/

"use strict";
(function () {
    function filler(arrayLength, fillerElements) {
        var x = new Array(arrayLength);
        for (var z = 0; z < arrayLength; z++) {
            x[z] = fillerElements;
        }
        return x;
    }
    console.log(filler(3, 'default value'));
    console.log(filler(4, 'password'));
})();
