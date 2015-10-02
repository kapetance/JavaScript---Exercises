/*
Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
*/
"use strict";
(function () {
    function meridiem(pickedDate) {
        if (pickedDate.getHours() < 12) {
            return "am";
        } else {
            return "pm";
        }
    }
    console.log(meridiem(new Date()));
})();
