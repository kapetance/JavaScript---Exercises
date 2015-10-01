/*
Write a JavaScript function to get the month name from a particular date. 

Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November"
*/

"use strict";
(function () {
    function monthName(pickedDate) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[pickedDate.getMonth()];
    }

    console.log(monthName(new Date("10/11/2009")));
    console.log(monthName(new Date("11/13/2014")));
})();
