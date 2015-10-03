/*
Write a JavaScript function to add specified years to a date. 
Test Data :
dt = new Date(2014,10,2); 
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
*/

"use strict";
(function () {
    function addYears(pickedDate, toAdd) {
        pickedDate = pickedDate.setFullYear(pickedDate.getFullYear() + toAdd);
        return new Date(pickedDate);
    }

    console.log(addYears(new Date(2014, 10, 2), 10));
})();
