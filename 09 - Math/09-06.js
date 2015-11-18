/* Write a JavaScript function to find the highest value in an array. 
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0 */
"use strict";
(function () {
    function max(pickedArray) {
        var highest = pickedArray[0];
        for (var x = 1; x < pickedArray.length; x++) {
            highest = Math.max(highest, pickedArray[x]);
        }
        return highest;
    }
    console.log(max([12, 34, 56, 1]));
    console.log(max([-12, -34, 0, -56, -1]));
})();
