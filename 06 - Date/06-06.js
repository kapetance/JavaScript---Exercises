/*
Write a JavaScript function to add specified minutes to a Date object.

Test Data :
console.log(add_minutes(new Date(2014,10,2), 30).toString());
Output :
"Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"
*/
"use strict";
(function () {
    function addMinutes(curTime, minutesAdd) {
        minutesAdd = minutesAdd * 60 * 1000;
        return new Date(curTime.getTime() + minutesAdd);
    }

    console.log(addMinutes(new Date(2014, 10, 2), 30).toString());
})();
