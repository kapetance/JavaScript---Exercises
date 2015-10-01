/*
Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. 

Test Data :
console.log(array_filled(6, 0)); 
[0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11));
[11, 11, 11, 11]
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
    console.log(filler(6, 0));
    console.log(filler(4, 11));
})();
