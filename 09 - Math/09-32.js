/* Write a JavaScript function to calculate the percentage (%) of a number. 
Test Data :
console.log(percentage(1000, 47.12));
471.2 */
"use strict";
(function () {
    function percentages(pickedValue, percentage) {
        return (pickedValue / 100 * percentage);
    }
    console.log(percentages(1000, 47.12));
})();
