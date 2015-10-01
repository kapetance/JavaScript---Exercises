/*
Find the leap years in a given range of years.
*/

"use strict";
(function () {
    function leapYear(year) {
        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
                return false;
            } else {
                return year;
            }
        }
    }

    function leapInRange(fromYear, toYear) {
        var years = [];
        for (var x = fromYear; x <= toYear; x++) {
            years.push(x);
        }
        console.log(years.filter(leapYear));
    }

    return leapInRange;

})()(1983, 2050);