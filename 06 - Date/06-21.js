/*
Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(long_Days(dt));
"Sunday"
*/
"use strict";
(function () {
    function longDays(pickedDate) {
        var days = ["Sunday", "Monday", "Tusday", "Wednsday", "Thursday", "Friday", "Saturday"];
        return days[pickedDate.getDay()];
    }

    console.log(longDays(new Date(2015, 10, 1)));
})();
