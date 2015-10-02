/*
Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
*/
"use strict";
(function () {
    function meridiem(pickedDate) {
        if (pickedDate.getHours() < 12) {
            return "AM";
        } else {
            return "PM";
        }
    }
    console.log(meridiem(new Date()));
})();