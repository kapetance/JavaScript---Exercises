/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/
"use strict";
(function () {
    function dayMonth(pickedDate) {
        pickedDate = String(pickedDate.getDate());
        return pickedDate.length < 2 ? "0" + pickedDate : pickedDate;
    }

    console.log(dayMonth(new Date(2015, 10, 23)));
})();
