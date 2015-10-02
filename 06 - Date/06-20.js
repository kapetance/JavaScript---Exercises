/*
Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(short_Days(dt));
"Sun"
*/
"use strict";
(function () {
    function shortDates(pickedDay) {
        var days = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
        return days[pickedDay.getDay()];
    }

    console.log(shortDates(new Date(2015, 10, 1)));
})();
