/*
Write a JavaScript function to get a full numeric representation of a year (4 digits). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(full_year(dt)); 
2015
*/

"use strict";
(function () {
    function fullYear(pickedDate) {
        return pickedDate.getFullYear();
    }

    console.log(fullYear(new Date(2015, 10, 1)));
})();
