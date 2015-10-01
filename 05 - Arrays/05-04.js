/*
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

"use strict";
(function () {
    function last(pickedArray, nElements) {
        var finalArray = [];
        var numberElements = nElements || 1;
        for (var x = 0; x <= numberElements - 1 && x < pickedArray.length; x++) {
            finalArray.unshift(pickedArray[pickedArray.length - 1 - x]);
        }
        return finalArray;
    }

    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2], 3));
    console.log(last([7, 9, 0, -2], 6));

})();