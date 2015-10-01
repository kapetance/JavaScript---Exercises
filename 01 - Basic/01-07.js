/*
Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
*/
"use strict";
(function () {
    var isItSunday = true;
    var year = 2014;
    var pickedDate;
    while (isItSunday && year < 2050) {
        pickedDate = new Date(year, 0, 1);
        if (pickedDate.getDay() === 0) {
            console.log("First Sunday on 1st January is in year " + pickedDate.getFullYear() + ".");
            isItSunday = false;
        }
        year++;
    }
})();