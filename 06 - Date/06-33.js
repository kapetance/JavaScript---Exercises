/*
Write a JavaScript function to get 12-hour format of an hour with leading zeros. 
Test Data :
dt = new Date(1989, 10, 1); 
console.log(hours_with_zeroes(dt)); 
"12"
*/
"use strict";
(function () {
    var hours = {
        addZeroes: function (time) {
            time = String(time);
            return time.length < 2 ? "0" + time : time;
        },
        hoursZeroes: function (time) {
            time = time > 12 ? time - 12 : (time === 0 ? 12 : time);
            return this.addZeroes(time);
        },
        showResult: function (time) {
            console.log(this.hoursZeroes(time.getHours()));
        }
    };
    hours.showResult(new Date(1989, 10, 1, 1));
})();
