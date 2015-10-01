/*
Write a JavaScript function to get the number of days in a month.

Test Data :
console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012)); 
Output :
31 
29 
30 
31
*/

"use strict";
(function () {
    function getDaysInMonth(month, year) {
        var thisMonth = new Date(year, month - 1);
        var nextMonth = new Date(year, month);
        return (nextMonth - thisMonth) / (1000 * 60 * 60 * 24);
    }

    console.log(getDaysInMonth(1, 2012));
    console.log(getDaysInMonth(2, 2012));
    console.log(getDaysInMonth(9, 2012));
    console.log(getDaysInMonth(12, 2012));

})();
