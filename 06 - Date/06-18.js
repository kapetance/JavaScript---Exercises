/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/
"use strict";
(function () {
    function calculateAge(pickedDate) {
        var current = new Date().getFullYear();
        pickedDate = pickedDate.getFullYear();
        return current - pickedDate;
    }

    console.log(calculateAge(new Date(1982, 11, 4)));
    console.log(calculateAge(new Date(1962, 1, 1)));
})();
