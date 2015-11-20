/* Write a JavaScript function to calculate the product of values in an array. 
Test Data :
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output :
6
-60000
6 */
"use strict";
(function () {
    function product(pickedArray) {
        return pickedArray.filter(function (a) {
            if (!isNaN(a)) {
                return a;
            }
        }).reduce(function (a, b) {
            return a * b;
        });
    }
    console.log(product([1, 2, 3]));
    console.log(product([100, -200, 3]));
    console.log(product([1, 2, 'a', 3]));
})();
