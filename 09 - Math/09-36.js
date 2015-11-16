/* Write a JavaScript function which will return values that are powers of two. 
Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false  */
"use strict";
(function () {
    function powerOfTwo(pickedNumber) {
        if (pickedNumber === 1) {
            return true;
        } else if (pickedNumber < 1) {
            return false;
        } else {
            return powerOfTwo(pickedNumber / 2);
        }
    }
    
    console.log(powerOfTwo(64));
    console.log(powerOfTwo(94));
})();
