/*
Write a JavaScript function to merge two arrays and removes all duplicates elements. 

Test data :
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
console.log(merge_array(array1, array2));
[3, 2, 30, 1]
*/

"use strict";
(function () {
    function merger(firstArray, secondArray) {
        for (var x = 0; x < secondArray.length; x++) {
            if (!(firstArray.indexOf(secondArray[x]) >= 0)) {
                firstArray.push(secondArray[x]);
            }
        }
        return firstArray;
    }
    var array1 = [1, 2, 3];
    var array2 = [2, 30, 1];
    console.log(merger(array1, array2));

})();