/*
Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).  
Test Data :
dt = new Date(2015, 10, 1);
console.log(short_months(dt));
"Nov"
*/
"use strict";
(function () {
    function fullMonth(pickedDate, length) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[pickedDate.getMonth()].slice(0, length);
    }
    console.log(fullMonth(new Date(2015, 10, 1), 3));
})();
