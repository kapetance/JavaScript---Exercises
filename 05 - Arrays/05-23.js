/* Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); 
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"] */
"use strict";
(function () {
    function difference(array1, array2) {
        array1 = String(array1.concat(array2).sort(function (a, b) {
            return a > b;
        })).split(","); //concat>sort>converting to string>split
        for (var x = 0; x < array1.length; x++) {
            var unique = true;
            for (var y = x + 1; y < array1.length; y++) {
                if (array1[x] === array1[y]) {
                    delete array1[y];
                    array1[x] = false;
                }
            }
            if (!unique) {
                delete array1[x];
            }
        }
        return array1.filter(function (z) {
            return z;
        });

    }
    console.log(difference([1, 2, 3], [100, 2, 1, 10]));
    console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
    console.log(difference([1, 2, 3], [100, 2, 1, 10]));
})();
