/*
 Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/
"use strict";
(function (year) {
        if (year % 4 === 0) {
            if (year % 100 === 0 && year % 400 !== 0) {
            console.log("Year is common");
        } else {
            console.log("Year is leap");
        }
    }
 else {
    console.log("Year is common");
}
})(2016);