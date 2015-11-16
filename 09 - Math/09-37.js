/* Write a JavaScript function to limit a value inside a certain range. 
Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.
Test Data :
console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));
12 */
"use strict";
(function () {
    function valueLimits(x, y, pickedValue) {
        var maximum = Math.max(x, y);
        var minimum = Math.min(x, y);
        if (pickedValue < minimum) {
            return minimum;
        } else if (pickedValue > maximum) {
            return maximum;
        } else {
            return pickedValue;
        }
    }
    console.log(valueLimits(7, 1, 12));
    console.log(valueLimits(-7, 0, 12));
    console.log(valueLimits(15, 0, 12));
})();
