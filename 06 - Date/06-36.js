/*
Write a JavaScript function to get seconds with leading zeros (00 through 59).
Test Data :
dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt)); 
"00"
*/

"use strict";
(function () {
    var seconds = {
        addZeroes: function (time) {
            time = String(time);
            return time.length < 2 ? "0" + time : time;
        },
        secondsZeroes: function (time) {
            return this.addZeroes(time);
        },
        showResult: function (time) {
            console.log(this.secondsZeroes(time.getSeconds()));
        }
    };
    seconds.showResult(new Date(1989, 10, 1, 12, 2, 2));
})();