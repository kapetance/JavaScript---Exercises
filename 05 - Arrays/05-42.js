/*
Write a JavaScript function to find the unique elements from two arrays.

Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["1", "2", "3", "10", "100"]
*/
"use strict";
(function () {
    function difference(firstArray, secondArray) {
        function flatenArray(pickedArray) {
            return pickedArray.toString().split(",");
        }
        var finalArray = [];
        firstArray = flatenArray(firstArray).concat(flatenArray(secondArray));
        for (var x = 0; x < firstArray.length; x++) {
            if (finalArray.indexOf(firstArray[x]) === -1) {
                finalArray.push(firstArray[x]);
            }
        }
        return finalArray.map(function(a){
            return parseInt(a, 10);
        }).sort(function (a, b) {
            return a > b;
        });
    }
    console.log(difference([1, 2, 3], [100, 2, 1, 10]));
    console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
    console.log(difference([1, 2, 3], [100, 2, 1, 10]));
})();
