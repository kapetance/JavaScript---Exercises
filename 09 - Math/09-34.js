/* Write a JavaScript function to convert radians to degrees. 
Test Data :
console.log(radians_to_degrees(0.7853981633974483));
45  */
"use strict";
(function () {
    function radiansDegrees(pickedValue) {
        return (180 / Math.PI * pickedValue);
    }
    console.log(radiansDegrees(0.7853981633974483));
})();
