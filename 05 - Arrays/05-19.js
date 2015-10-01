/*
There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] 
*/

"use strict";
(function () {

    function sumer(arr1, arr2) {
        var finalArray = [];
        for (var x = 0; x < arr1.length || x < arr2.length; x++) {
            finalArray.push((arr1[x] || 0) + (arr2[x] || 0));
        }
        console.log(finalArray);
    }

    var array1 = [1, 0, 2, 3, 4];
    var array2 = [3, 5, 6, 7, 8, 13];

    sumer(array1, array2);
})();