/* Write a JavaScript function to find the highest value in an array. 
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0 */
"use strict";
(function () {
    function max(pickedArray) {
        return Math.max.apply(null, pickedArray);
    }
    console.log(max([12, 34, 56, 1]));
    console.log(max([-12, -34, 0, -56, -1]));
})();
