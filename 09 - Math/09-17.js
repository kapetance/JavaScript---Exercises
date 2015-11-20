/* Write a JavaScript function to calculate the sum of values in an array. 
Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6 */
"use strict";
(function () {
    function sum(pickedArray) {
        return pickedArray.filter(function (a) {
            if (!isNaN(a)) {
                return a;
            }
        }).reduce(function (a, b) {
            return a + b;
        });
    }
    console.log(sum([1, 2, 3]));
    console.log(sum([100, -200, 3]));
    console.log(sum([1, 2, 'a', 3]));
})();
