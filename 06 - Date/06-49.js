/*
 Write a JavaScript function to get time differences in years between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diff_years(dt1, dt2)); 
3
*/

"use strict";
(function () {
    function diffYears(dt1, dt2) {
        return Math.abs(dt1.getFullYear() - dt2.getFullYear());
    }

    var dt1 = new Date("June 13, 2014 08:11:00");
    var dt2 = new Date("October 19, 2017 11:13:00");
    console.log(diffYears(dt1, dt2));
})();
