/*
Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt));
"11"
*/
"use strict";
(function () {
    function numericMonth(pickedDate) {
        pickedDate = String(pickedDate.getMonth() + 1);
        return pickedDate.length < 2 ? "0" + pickedDate : pickedDate;
    }

    console.log(numericMonth(new Date(2015, 10, 1)));
})();
