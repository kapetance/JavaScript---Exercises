/*
Write a JavaScript function to get a full textual representation of a month, such as January or June. 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(full_month(dt));
"November"
*/
"use strict";
(function () {
    function fullMonth(pickedDate) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[pickedDate.getMonth()];
    }
    console.log(fullMonth(new Date(2015, 10, 1)));
})();
