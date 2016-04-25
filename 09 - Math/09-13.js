/* Write a JavaScript function to test if a number is a power of 2. 
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output :
true
false
true */
"use strict";
(function () {
    function powerOfTwo(pickedNumber) {
        while (pickedNumber > 1) {
            if (pickedNumber % 2 !== 0) {
                return false
            }
            pickedNumber /= 2;
        }
        return true;
    }
    console.log(powerOfTwo(16));
    console.log(powerOfTwo(18));
    console.log(powerOfTwo(256));

})();