/*
Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 
*/

"use strict";
(function () {
    function sumer(pickedArray) {
        if (pickedArray.length === 0) {
            return 0;
        } else {
            return pickedArray[0] + sumer(pickedArray.splice(1));
        }
    }
    console.log(sumer([1, 2, 3, 4, 5, 6]));
    
})();