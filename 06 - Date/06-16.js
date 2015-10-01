/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

"use strict";
(function () {
    function daysPassed(pickedDate) {
        var year = pickedDate.getFullYear();
        year = Date.parse(year);
        pickedDate = Date.parse(pickedDate);
        return Math.ceil((pickedDate - year) / (1000 * 60 * 60 * 24)) + 1;
    }
    console.log(daysPassed(new Date(2015, 0, 15)));
    console.log(daysPassed(new Date(2015, 11, 14)));

})();
