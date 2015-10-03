/*
 Write a JavaScript function to get minutes with leading zeros (00 to 59). 
Test Data :
dt = new Date(1989, 10, 1); 
console.log(minutes_with_leading_zeros(dt)); 
"00"
*/

"use strict";
(function () {
    var minutes = {
        addZeroes: function (time) {
            time = String(time);
            return time.length < 2 ? "0" + time : time;
        },
        minutesZeroes: function (time) {
            return this.addZeroes(time);
        },
        showResult: function (time) {
            console.log(this.minutes(time.getMinutes()));
        }
    };
    minutes.showResult(new Date(1989, 10, 1, 12, 2));
})();