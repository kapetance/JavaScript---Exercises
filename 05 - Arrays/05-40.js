/*
Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. 

Test Data :
console.log(array_range(1, 4)); 
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
*/

"use strict";
(function () {
    
    function arrayRange(startingPosition, arrayLength) {
        var finalArray = [startingPosition];
        for (var x = 1; x < arrayLength; x++) {
            finalArray.push(finalArray[x - 1] + 1);
        }
        return finalArray;
    }

    console.log(arrayRange(1, 4));
    console.log(arrayRange(-6, 4));
})();