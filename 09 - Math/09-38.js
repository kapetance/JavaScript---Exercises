/* Write a JavaScript function to check if a number is a whole number or has a decimal place. 
Note : Whole Numbers are simply the numbers 0, 1, 2, 3, 4, 5, ... (and so on). No Fractions!
Test Data :
console.log(number_test(25.66));
"Number has a decimal place."
console.log(number_test(10));
"It is a whole number." */
"use strict";
(function () {
    function numberTest(pickedNumber) {
        return pickedNumber === Math.round(pickedNumber) ? "It is a whole number." : "Number has a decimal place.";
    }
    console.log(numberTest(25.66));
    console.log(numberTest(10));
})();
