/* Write a JavaScript function to find the lowest value in an array. 
Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56 */
"use strict";
(function () {
    function min(pickedArray) {
        var lowest = pickedArray[0];
        for (var x = 1; x < pickedArray.length; x++) {
            lowest = Math.min(lowest, pickedArray[x]);
        }
        return lowest;
    }
    console.log(min([12, 34, 56, 1]));
    console.log(min([-12, -34, 0, -56, -1]));
})();
