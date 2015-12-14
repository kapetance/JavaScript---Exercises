/* Write a JavaScript function to find the lowest value in an array. 
Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56 */
"use strict";
(function () {
    function min(pickedArray) {
        return Math.min.apply(null, pickedArray);
    }
    console.log(min([12, 34, 56, 1]));
    console.log(min([-12, -34, 0, -56, -1]));
})();
