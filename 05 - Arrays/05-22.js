/*
Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/
"use strict";
(function () {
    function union(array1, array2) {
        for (var x = 0; x < array2.length; x++) {
            if (array1.indexOf(array2[x]) === -1) {
                array1.push(array2[x]);
            }
        }
        array1.sort(function (a, b) {
            return a > b;
        });
        return array1;
    }
    console.log(union([1, 2, 3], [100, 2, 1, 10]));
})();
