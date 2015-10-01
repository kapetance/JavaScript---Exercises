/*
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] 
*/

"use strict";
(function () {
    function first(pickedArray, numberOfElements) {
        var finalArray = [];
        var countelements = numberOfElements || 1;
        for (var x = 0; x <= countelements - 1 && x < pickedArray.length; x++) {
            finalArray.push(pickedArray[x]);
        }
        return finalArray;
    }

    console.log(first([7, 9, 0, -2]));
    console.log(first([], 3));
    console.log(first([7, 9, 0, -2], 3));
    console.log(first([7, 9, 0, -2], 6));
    console.log(first([7, 9, 0, -2], -3));

})();